import { useState, useEffect } from "react";
import { ethers } from "ethers";


const PRESALE_ADDRESS = "0x5a3EdEdCDd99F81b346a8dd0D39F10d0Aa98aAd4";
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
    if (!window.ethereum) return;


    const provider = new ethers.BrowserProvider(window.ethereum);
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
  };


  const progress = hardCap ? (raised / hardCap) * 100 : 0;
  const bonusPercent = (bonusPool / 10000000) * 100;


  const tokensPerBNB = price ? Math.floor(1 / price) : 0;


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
    Number(amount) <= (balance - 0.003);


  return (
    <div style={container}>
      <div style={card}>


        <h2>NeuroSpark Presale</h2>


        {!wallet ? (
          <button onClick={connectWallet} style={btn}>Connect Wallet</button>
        ) : (
          <p>{wallet.slice(0,6)}...{wallet.slice(-4)}</p>
        )}


        <div style={timerRow}>
          <TimeBox label="DAYS" value={time.d} />
          <TimeBox label="HOURS" value={time.h} />
          <TimeBox label="MIN" value={time.m} />
          <TimeBox label="SEC" value={time.s} />
        </div>


        <div style={stageBox}>
          <p style={{ fontWeight: "bold" }}>Stage {stage}</p>
          <p>Price: {price.toFixed(10)} BNB</p>
          <p>1 BNB = {tokensPerBNB.toLocaleString()} NSP</p>
        </div>


        <p>Contracts:</p>
        <ContractItem label="Presale" address={PRESALE_ADDRESS} copy={copy} />
        <ContractItem label="Token" address={TOKEN_ADDRESS} copy={copy} />
        <ContractItem label="Vesting" address={VESTING_ADDRESS} copy={copy} />


        <div style={bar}>
          <div style={{
            width: `${progress}%`,
            height: "100%",
            background: "#00ffd5",
            boxShadow: "0 0 10px #00ffd5"
          }} />
        </div>


        <p>Raised: {raised.toFixed(2)} BNB</p>
        <p>HardCap: {hardCap} BNB</p>


        <p style={{ color:"#ffb84d", fontWeight:"bold", textShadow:"0 0 6px #ffb84d" }}>
          ⚠️ Only {remainingBNB.toFixed(2)} BNB left
        </p>


        <div style={bonusBar}>
          <div style={{
            width: `${bonusPercent}%`,
            height: "100%",
            background: "#00ffae",
            boxShadow: "0 0 10px #00ffae"
          }} />
        </div>


        <p style={{
          color:"#00ffae",
          fontWeight:"bold",
          fontSize:16,
          letterSpacing:0.6,
          textShadow:"0 0 10px #00ffae"
        }}>
          🎁 Bonus Pool Remaining: {Math.floor(bonusPool).toLocaleString()} NSP
        </p>


        <p style={{ fontSize:12, opacity:0.8 }}>+20% bonus active</p>


        <div style={{ position:"relative" }}>
          <input
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            placeholder="0.1"
            style={input}
          />
          <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png"
            style={{position:"absolute", right:10, top:"50%", transform:"translateY(-50%)", width:18}}
          />
        </div>


        <p>Available: {balance.toFixed(4)} BNB</p>


        <button onClick={()=>{
          const usable = Math.max(balance - 0.003,0);
          setAmount(Math.min(usable, maxBuy).toFixed(4));
        }} style={miniBtn}>MAX</button>


        <p>You receive:</p>


        <p style={row}>
          <span>Base:</span>
          <span style={valueRow}>
            {Math.floor(baseTokens)} NSP <img src="/nsp.png" style={nspIcon}/>
          </span>
        </p>


        <p style={{...row, color:"#00ffae"}}>
          <span>Bonus:</span>
          <span style={valueRow}>
            +{Math.floor(bonusTokens)} NSP <img src="/nsp.png" style={nspIcon}/>
          </span>
        </p>


        <p style={row}>
          <span>Total:</span>
          <span style={valueRow}>
            {totalTokens} NSP <img src="/nsp.png" style={nspIconBig}/>
          </span>
        </p>


        <button disabled={!canBuy} onClick={buy}
          style={{...btn, opacity: canBuy ? 1 : 0.5, boxShadow:"0 0 12px #00ffae"}}
        >
          Buy Tokens
        </button>


        <p>{status}</p>


        {txHash && (
          <a href={`https://bscscan.com/tx/${txHash}`} target="_blank">
            🔗 View on BscScan
          </a>
        )}


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
        </div>
        <img src="/bscscan.png" width="14"
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


const row = { display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%" };


const valueRow = {
  display:"flex",
  alignItems:"center",
  gap:6,
  minWidth:120,
  justifyContent:"flex-end"
};


const nspIcon = { width:16 };
const nspIconBig = { width:18 };


const container = { minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center", background:"#0f2027", color:"#fff" };
const card = { width:340, background:"#0b1e2a", padding:20, borderRadius:12 };
const stageBox = { background:"#132a36", padding:10, borderRadius:10, marginBottom:10 };


const btn = {
  width:"100%",
  padding:12,
  background:"linear-gradient(90deg,#00ffd5,#00ffae)",
  border:"none",
  borderRadius:10,
  cursor:"pointer",
  color:"#002b22",
  fontWeight:"bold"
};


const miniBtn = { width:"100%", padding:8, marginTop:8, background:"#00ffd5", border:"none", borderRadius:8 };


const input = {
  width:"100%",
  padding:"10px 40px 10px 10px",
  borderRadius:8,
  background:"#0f2a36",
  color:"#fff",
  border:"1px solid #1f4f5f",
  outline:"none",
  boxShadow:"0 0 6px rgba(0,255,174,0.2)"
};


const bar = { background:"#333", height:14, borderRadius:10 };
const bonusBar = { background:"#222", height:10, borderRadius:10, marginTop:6, overflow:"hidden" };


const popup = { position:"fixed", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"#0b1e2a", padding:20, borderRadius:12 };


const contractItem = { display:"flex", justifyContent:"space-between", fontSize:12, background:"#132a36", padding:6, borderRadius:6, marginBottom:5 };


const timerRow = { display:"flex", justifyContent:"space-between" };
const timeBox = { flex:1, margin:3, padding:6, background:"#132a36", borderRadius:6, textAlign:"center" };