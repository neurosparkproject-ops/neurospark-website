import { useState, useEffect } from "react";
import { ethers } from "ethers";


const PRESALE_ADDRESS = "0x5C13DB982f74CAFf154F66EC791a3b6a17dF5C7f";
const TOKEN_ADDRESS = "0x625df14C51555B3264dAbe62dDE85D2b6cb19fbD";
const VESTING_ADDRESS = "0xaE1a7Df5c3029f328fEECc8b0056B10e7191A924";


const ABI = [
  "function buy() payable",
  "function getPrice() view returns (uint256)",
  "function maxBuy() view returns (uint256)",
  "function totalRaised() view returns (uint256)",
  "function hardCap() view returns (uint256)",
  "function endTime() view returns (uint256)",
  "function bonusPool() view returns (uint256)",
  "function contributions(address) view returns (uint256)",
  "function totalSold() view returns (uint256)"
];


const MIN_BUY = 0.01;


export default function Presale() {
  const [wallet, setWallet] = useState(null);
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [txHash, setTxHash] = useState("");
  const [showPopup, setShowPopup] = useState(false);


  const [price, setPrice] = useState(0);
  const [maxBuy, setMaxBuy] = useState(0);
  const [raised, setRaised] = useState(0);
  const [hardCap, setHardCap] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [totalSold, setTotalSold] = useState(0);


  const [bonusPool, setBonusPool] = useState(0);
  const [myContribution, setMyContribution] = useState(0);
  const [balance, setBalance] = useState(0);


  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [lastStage, setLastStage] = useState(1);


  const load = async () => {


  const provider = window.ethereum
    ? new ethers.BrowserProvider(window.ethereum)
    : new ethers.JsonRpcProvider("https://bsc-dataseed.binance.org/");


  const contract = new ethers.Contract(PRESALE_ADDRESS, ABI, provider);

    const [p, max, r, hard, end, bonus, sold] = await Promise.all([
      contract.getPrice(),
      contract.maxBuy(),
      contract.totalRaised(),
      contract.hardCap(),
      contract.endTime(),
      contract.bonusPool(),
      contract.totalSold()
    ]);


    setPrice(Number(ethers.formatEther(p)));
    setMaxBuy(Number(ethers.formatEther(max)));
    setRaised(Number(ethers.formatEther(r)));
    setHardCap(Number(ethers.formatEther(hard)));
    setEndTime(Number(end));
    setBonusPool(Number(ethers.formatEther(bonus)));
    setTotalSold(Number(ethers.formatEther(sold)));


    if (wallet) {
      const bal = await provider.getBalance(wallet);
      setBalance(Number(ethers.formatEther(bal)));


      const my = await contract.contributions(wallet);
      setMyContribution(Number(ethers.formatEther(my)));
    }
  };


  useEffect(() => { load(); }, [wallet]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (!endTime) return;
      const now = Math.floor(Date.now() / 1000);
      const diff = endTime - now;
      if (diff <= 0) return;


      setTime({
        d: Math.floor(diff / 86400),
        h: Math.floor((diff % 86400) / 3600),
        m: Math.floor((diff % 3600) / 60),
        s: Math.floor(diff % 60)
      });
    }, 1000);


    return () => clearInterval(interval);
  }, [endTime]);


  const connectWallet = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const acc = await provider.send("eth_requestAccounts", []);
    setWallet(acc[0]);
  };


  let stage = 1;
  if (totalSold >= 70000000) stage = 3;
  else if (totalSold >= 30000000) stage = 2;


  useEffect(() => {
    if (stage !== lastStage) {
      setStatus(`🚀 Stage ${stage} started`);
      setLastStage(stage);
    }
  }, [stage]);


  const buy = async () => {
    try {
      if (!amount || Number(amount) <= 0) return setStatus("⚠️ Enter amount");
      if (Number(amount) < MIN_BUY) return setStatus(`⚠️ Minimum buy is ${MIN_BUY} BNB`);
      if (Number(amount) > maxBuy) return setStatus(`⚠️ Max per wallet is ${maxBuy} BNB`);
      if (Number(amount) > (balance - 0.003)) return setStatus("⚠️ Not enough balance");


      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner(wallet);
      const contract = new ethers.Contract(PRESALE_ADDRESS, ABI, signer);


      setStatus("Processing...");


      const tx = await contract.buy({
        value: ethers.parseEther(amount)
      });


      setTxHash(tx.hash);
      await tx.wait();


      setStatus(`✅ You bought ${totalTokens} NSP`);
      setShowPopup(true);
      load();


    } catch (err) {
      if (err?.reason) setStatus(`❌ ${err.reason}`);
      else if (err?.shortMessage) setStatus(`❌ ${err.shortMessage}`);
      else setStatus("❌ Transaction failed");
    }
  };


  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setStatus("Copied ✅");
    setTimeout(() => setStatus(""), 1200);
  };


  const progress = hardCap ? (raised / hardCap) * 100 : 0;
  const bonusPercent = (bonusPool / 10000000) * 100;
  const tokensPerBNB = price ? Math.floor(1 / price) : 0;

  const usableBalance = Math.max(balance - 0.003, 0);


  let baseTokens = 0;
  let bonusTokens = 0;


  if (amount && price) {
    baseTokens = Number(amount) / price;
    const potentialBonus = baseTokens * 0.2;
    bonusTokens = Math.min(potentialBonus, bonusPool);
  }


  const totalTokens = Math.floor(baseTokens + bonusTokens);
  const remainingBNB = Math.max(hardCap - raised, 0);


  const canBuy =
    wallet &&
    amount &&
    Number(amount) >= MIN_BUY &&
    Number(amount) <= maxBuy &&
    Number(amount) <= usableBalance;


  return (
  <div style={bgWrapper}>


    <div style={navbar}>
      <div style={navLeft}>
        <img src="/nsp-logo.png" style={navLogo} />
        <span style={navText}>NeuroSpark</span>
      </div>


      {!wallet ? (
       <>
        <button onClick={connectWallet} 
        style={navBtn}>
          Connect Wallet


  <img
    src="/wallet.png"
    style={{    
      width: 20,    
      height: 20,        
      marginLeft: 6,
      objectFit: "contain" 
    }}
  />
</button>

<p className="text-white/70 text-[11px] mt-2 px-2 leading-relaxed">
  Mobile users: open in MetaMask or Trust Wallet browser for seamless wallet connection.
</p>
</>
      ) : (
        <span style={walletText}>
          {wallet.slice(0,6)}...{wallet.slice(-4)}
        </span>
      )}
    </div>


    <img src="/bg-network.png" style={bgImage} />
    <div style={bgOverlay}></div>


    {/* 🔥 ANA FLEX LAYOUT */}
    <div style={mainLayout}>

      {/* SAĞ TARAF (SENİN KODUN AYNEN) */}
      <div style={card}>


        <h2 style={{
          textShadow: "0 0 18px rgba(0,255,213,0.9)",
          marginBottom: 14,
          textAlign: "center",
          fontSize: 22,
          letterSpacing: 0.5,
          color: "#ffffff"
        }}>
          NeuroSpark Presale
        </h2>


        <div style={timerRow}>
          <TimeBox label="DAYS" value={time.d} />
          <TimeBox label="HOURS" value={time.h} />
          <TimeBox label="MIN" value={time.m} />
          <TimeBox label="SEC" value={time.s} />
        </div>


        <div style={stageBox}>
          <p><b>Stage {stage}</b></p>
          <p>Price: {price.toFixed(10)} BNB</p>
          <p>1 BNB = {tokensPerBNB.toLocaleString()} NSP</p>
        </div>


        <p style={{ color:"#ffffff", 
        fontWeight:"600" }}>
          Contracts:
        </p>
        <ContractItem label="Presale" address={PRESALE_ADDRESS} copy={copy} />
        <ContractItem label="Token" address={TOKEN_ADDRESS} copy={copy} />
        <ContractItem label="Vesting" address={VESTING_ADDRESS} copy={copy} />


        <div style={bar}>
          <div style={{ width: `${progress}%`, height:"100%", background:"#00ffd5" }} />
        </div>


        <p style={{ color:"#ffffff",
        fontWeight:"600" }}>
          Raised: {raised.toFixed(2)} BNB
        </p>
        <p style={{ color:"#ffffff", 
        fontWeight:"600" }}>
          HardCap: {hardCap} BNB
        </p>


        <p style={{ color:"#ffb84d" }}>
          ⚠️ Only {remainingBNB.toFixed(2)} BNB left
        </p>


        <div style={bonusBar}>
          <div style={{ width:`${bonusPercent}%`, height:"100%", background:"#00ffae" }} />
        </div>


        <p style={{ color:"#00ffae" }}>
          🎁 Bonus Pool Remaining: {Math.floor(bonusPool).toLocaleString()} NSP
        </p>


        <p style={{ fontSize:12, color:"#ffffff" }}>
  +20% bonus active
</p>

        <div style={{ position:"relative" }}>
          <input
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            placeholder="0.1"
            style={input}
          />


          <img
            src="https://cryptologos.cc/logos/bnb-bnb-logo.png"
            style={{
              position:"absolute",
              right:65,
              top:"50%",
              transform:"translateY(-50%)",
              width:18,
              opacity:0.9
            }}
          />


          <div style={maxBadge} onClick={()=>{
            const usable = Math.max(balance - 0.003,0);
            setAmount(Math.min(usable, maxBuy).toFixed(4));
          }}> 
            MAX
          </div>
        </div>

        <p style={{ color:"#ffffff", 
        fontWeight:"600" }}>
          Available: {usableBalance.toFixed(4)} BNB
        </p>


        <p style={{fontSize:11, color:"#ffffff"}}>
          Gas fee reserved automatically
        </p>


        <p style={{fontSize:11, color:"#ffffff"}}>
          Max buy: {Math.min(usableBalance, maxBuy || 0).toFixed(4)} BNB
        </p>


        <p style={{fontSize:10, color:"#ffffff"}}>
          Based on wallet + limit
        </p>


        <p style={{fontSize:11, color:"#ffffff"}}>
          Tokens are sent instantly to your wallet
        </p>


        {myContribution > 0 && price > 0 && (
          <>
            <p style={{ marginTop:14, color:"#00ffaa", fontWeight:"bold" }}>
              You bought: {price ? Math.floor(myContribution / price).toLocaleString() : 0} NSP
            </p>
          </>
        )}


        <p style={{ marginTop:10, fontWeight:"bold", color:"#ffffff" }}>
          You receive:
        </p>


        <p style={{...row, color:"#ffffff"}}>
  <span>Base:</span>
  <span style={valueRow}>
    {Math.floor(baseTokens)} NSP 
    <img src="/nsp.png" style={nspIcon}/>
  </span>
</p>


        <p style={{...row, color:"#00ffae"}}>
  <span>Bonus:</span>
  <span style={valueRow}>
    +{Math.floor(bonusTokens)} NSP 
    <img src="/nsp.png" style={nspIcon}/>
  </span>
</p>


        <p style={{...row, color:"#ffffff"}}>
  <span>Total:</span>
  <span style={valueRow}>
    {totalTokens} NSP 
    <img src="/nsp.png" style={nspIconBig}/>
  </span>
</p>


        <button disabled={!canBuy} onClick={buy} style={btn}>
          Buy Tokens
        </button>


        <p>{status}</p>


      </div>
      
      </div>
    
<div style={{
  background:"rgba(8,20,35,0.85)",
  border:"1px solid rgba(0,255,213,0.12)",
  borderRadius:16,
  padding:20,
  marginTop:24,
  boxShadow:"0 0 20px rgba(0,255,213,0.05)"
}}>


  <div style={{
    color:"#fff",
    fontSize:22,
    fontWeight:"bold",
    marginBottom:16
  }}>
    Verified Smart Contracts
  </div>


  <div style={{
    color:"#8fffe0",
    lineHeight:1.9,
    fontSize:15
  }}>
   {"✓"} Presale contract verified <br />
   {"✓"} Vesting locked on-chain <br />
   {"✓"} Transparent transactions <br />
   {"✓"} Unsold tokens burned <br />
   {"✓"} Liquidity locked <br />
   {"✓"} No mint function <br />
   {"✓"} On-chain verified
  </div>


</div>


      {/* SOL TARAF */}
      <div style={leftSide}>


        <div style={infoCard}>
          <h3 style={title}>About NeuroSpark</h3>
          <p style={text}>
            AI-powered Web3 risk intelligence platform that analyzes tokens,
            detects hidden smart contract risks and helps users avoid exploits.
          </p>
        </div>


        <div style={infoCard}>
          <h3 style={title}>Why NeuroSpark</h3>
          <ul style={list}>
            <li>⚠️ Detect risky tokens before you buy</li>
            <li>🔍 Analyze smart contracts instantly</li>
            <li>🧠 AI-powered exploit detection</li>
          </ul>
        </div>


        <div style={infoCard}>
          <h3 style={title}>Tokenomics</h3>
          <div style={text}>
            <div>Presale: 19%</div>
            <div>Ecosystem: 30%</div>
            <div>Marketing: 20%</div>
            <div>Team: 15%</div>
            <div>Reserve: 15%</div>
            <div>Liquidity: 1%</div>
              <p style={{ marginTop:10, fontSize:11, color:"#cfefff", lineHeight:1.7 }}>
                 Total Supply: 500M NSP <br/>
                 • No minting <br/>
                 • Liquidity locked
              </p>
          </div>
        </div>


        <div style={infoCard}>
          <h3 style={title}>Roadmap</h3>
          <ul style={list}>
            <li>Q1 — Token & Presale launch</li>
            <li>Q2 — Ecosystem growth</li>
            <li>Q3 — AI engine</li>
            <li>Q4 — Platform beta release</li>
          </ul>
           <p style={{ 
             marginTop:10,
             fontSize:13,
             color:"#00ffaa",
             fontWeight:"600",
             cursor:"pointer",
             paddingLeft:2
           }}>
             View full website →
         </p>
        </div>


      </div>


      


{/* FOOTER */}
<div style={footerWrap}>
  <div style={footerTitle}>Official Channels</div>


  <div style={footerLinks}>
    <a
      href="https://x.com/NeuroSparkHQ"
      target="_blank"
      rel="noopener noreferrer"
      style={footerLink}
    >
      X (Twitter)
    </a>


    <a
      href="https://t.me/NeuroSparkOfficial"
      target="_blank"
      rel="noopener noreferrer"
      style={footerLink}
    >
      Telegram
    </a>


    <a
      href="https://www.youtube.com/@NeuroSparkWeb3"
      target="_blank"
      rel="noopener noreferrer"
      style={footerLink}
    >
      YouTube
    </a>


    <a
      href="mailto:contact@neurosparkai.io"
      style={footerLink}
    >
      contact@neurosparkai.io
    </a>
  </div>


  <div style={footerText}>
    © 2026 NeuroSpark (NSP) • All Rights Reserved
  </div>


  <div style={footerSub}>
    AI-Powered Web3 Risk Intelligence
  </div>
</div>


<div style={disclaimer}>
  Crypto investments involve risk. Always do your own research before participating in any token sale.
</div>


        {showPopup && (
          <div style={popup}>
            <h3>🎉 Success</h3>
            <p>You bought {totalTokens} NSP</p>
            <button onClick={()=>setShowPopup(false)}>Close</button>
          </div>
        )}
    
</div>
  );
}



/* COMPONENTS */
function ContractItem({ label, address, copy }) {
  return (
    <div style={contractItem}>
      <span>{label}</span>
      <div style={{ display:"flex", gap:6 }}>
        <div onClick={()=>copy(address)} style={{cursor:"pointer"}}>
          {address.slice(0,6)}...{address.slice(-4)}
        
          <span style={{
    color:"#00ffaa",
    marginLeft:5,
    fontSize:11,
    fontWeight:"bold",
    textShadow:"0 0 6px #00ffaa"
  }}>
    ✓
  </span>
</div>
        <img src="/bscscan.png" width="14" style={{ cursor:"pointer" }}
          onClick={()=>window.open(`https://bscscan.com/address/${address}`)}
        />
      </div>
    </div>
  );
}


function TimeBox({ label, value }) {
  return (
    <div style={timeBox}>
      <div>{value}</div>
      <div style={{ fontSize:10 }}>{label}</div>
    </div>
  );
}


/* STYLES */
const isMobile = window.innerWidth < 900;


const navbar = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: isMobile ? 95 : 70,


  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",


  flexWrap: "wrap",


  padding: isMobile ? "10px 16px" : "0 40px",


  background: "rgba(10,25,35,0.6)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(0,255,213,0.15)",
  zIndex: 20,


  gap: isMobile ? 8 : 0,
  boxSizing: "border-box"
};


const navLeft = {
  display: "flex",
  alignItems: "center",
  gap: 10,


  paddingLeft: isMobile ? 0 : 80
};


const navLogo = {
  width: isMobile ? 30 : 36,
  height: isMobile ? 30 : 36,
  borderRadius: "50%"
};


const navText = {
  color: "#00ffd5",
  fontWeight: "600",


  fontSize: isMobile ? 18 : 16
};


const navBtn = {
  padding: isMobile ? "10px 14px" : "10px 16px",


  borderRadius: 10,
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",


  background: "#37e67d",
  color: "#062b14",


  display: "flex",
  alignItems: "center",
  justifyContent: "center",


  gap: 6,


  marginRight: isMobile ? 0 : 120,


  width: isMobile ? "100%" : "auto",
  maxWidth: isMobile ? 220 : "none"
};


const walletText = {
  color: "#00ffd5",
  fontWeight: "bold",
  fontSize: isMobile ? 13 : 15
};


const bgWrapper = {
  minHeight: "100vh",


  backgroundImage: `
    linear-gradient(
      rgba(5,8,22,0.92),
      rgba(5,8,22,0.95)
    ),
    url('/bg-network.png')
  `,


  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",


  color: "white"
};

const bgImage = { position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", opacity:0.12, zIndex:-2 };
const bgOverlay = {
  position:"absolute",
  inset:0,
  background:"rgba(0,0,0,0.93)",   // 🔥 DÜZ KARARTMA (gradient yok)
  zIndex:-1
};

const container = {
  minHeight:"100vh",
  display:"flex",
  justifyContent:"flex-end",
  alignItems:"flex-start",   // aşağı kaydırır
  color:"#fff",
  paddingTop:200,            // biraz daha aşağı indirir
  paddingRight:"8%"
};

const card = {
  width: isMobile ? "100%" : 420,
  maxWidth: 420,


  background:"rgba(4,10,16,0.995)",
  padding:22,
  borderRadius:14,
  boxShadow:"0 0 12px rgba(0,255,213,0.05)",
  border:"1px solid rgba(0,255,213,0.10)",
};

const stageBox = { background:"#08141c", color:"#ffffff", padding:10, borderRadius:10 };


const btn = { width:"100%", padding:12, background:"linear-gradient(90deg,#00ffd5,#00ffaa)", border:"none", borderRadius:10, opacity: 0.7, color:"#ffffff" };


const miniBtn = { display:"none" };


const input = {
  width:"100%",
  padding:"10px 115px 10px 10px",
  borderRadius:8,
  background:"#08141c",
  color:"#ffffff",
  opacity:0.92,
  border:"1px solid rgba(255,255,255,0.06)",
  outline:"none"
};


const maxBadge = {
  position:"absolute",
  right:10,
  top:"50%",
  transform:"translateY(-50%)",
  padding:"4px 10px",
  borderRadius:6,
  fontSize:12,
  background:"linear-gradient(90deg,#00ffd5,#00ffae)",
  fontWeight:"bold",
  cursor:"pointer",
  color:"#002b22",
  boxShadow:"0 0 8px rgba(0,255,174,0.5)"
};


const row = { display:"flex", justifyContent:"space-between" };


const valueRow = {
  display:"flex",
  alignItems:"center",
  gap:6,
  minWidth:120,
  justifyContent:"flex-end",
  fontWeight:"bold",          // 🔥
  color:"#ffffff"             // 🔥
};


const nspIcon = { width:16 };
const nspIconBig = { width:18 };


const bar = { background:"#333", height:14, borderRadius:10 };
const bonusBar = { background:"#222", height:10, borderRadius:10 };


const popup = { position:"fixed", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"#0b1e2a", padding:20 };


const contractItem = { display:"flex", justifyContent:"space-between", fontSize:12, background:"#0d2430", padding:6, borderRadius:6, marginBottom:6, color:"#ffffff", opacity:1 };


const timerRow = { display:"flex", justifyContent:"space-between" };
const timeBox = { flex:1, margin:3, padding:6, background:"#08141c", color:"#ffffff", borderRadius:6, textAlign:"center" };

const infoCard = {
  background: "rgba(11,30,42,0.45)",
  border: "1px solid rgba(0,255,213,0.12)",
  borderRadius: 16,
  padding: 20,
  backdropFilter: "blur(10px)"
};


const title = {
  fontSize: 18,
  fontWeight: "bold",
  color: "#ffffff",
  marginBottom: 10
};


const text = {
  fontSize:13,
  opacity:1,     
  color: "#ffffff",
  lineHeight: 1.6
};


const list = {
  fontSize:13,
  opacity:1,
  color:"#ffffff",
  paddingLeft:18,
  lineHeight:1.6
};


const mainLayout = {
  display: "flex",


  flexDirection: isMobile ? "column" : "row",


  justifyContent: "center",
  alignItems: "center",


  gap: isMobile ? 30 : 80,


  paddingTop: isMobile ? 190 : 120,


  paddingLeft: isMobile ? 14 : 0,
  paddingRight: isMobile ? 14 : 0
};


const leftSide = {
  width: isMobile ? "100%" : 520,


  display: "flex",
  flexDirection: "column",
  gap: 30
};


const footerWrap = {
  width: "100%",
  marginTop: 20,
  paddingTop: 35,
  paddingBottom: 70,
  borderTop: "1px solid rgba(0,255,255,0.12)",
  textAlign: "center"
};


const footerTitle = {
  color: "#ffffff",
  fontSize: 20,
  fontWeight: "600",
  marginBottom: 18
};


const footerLinks = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 28,
  flexWrap: "wrap",
  marginBottom: 18
};


const footerLink = {
  color: "#8efcff",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: 15,
  cursor: "pointer"
};


const footerText = {
  color: "#d6d6d6",
  fontSize: 13,
  marginBottom: 6
};


const footerSub = {
  color: "#7f8b96",
  fontSize: 12
};


const disclaimer = {
  marginTop: 10,
  marginBottom: 34,
  color: "#9aa7b5",
  fontSize: 12,
  textAlign: "center",
  opacity: 0.82
};
