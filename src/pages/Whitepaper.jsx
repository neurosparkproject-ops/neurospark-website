import { useState, useEffect } from "react";
import { ethers } from "ethers";


const PRESALE_ADDRESS = "0x5a3EdEdCDd99F81b346a8dd0D39F10d0Aa98aAd4";


const ABI = [
  "function buy() payable",
  "function getPrice() view returns (uint256)"
];


export default function Presale() {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState(null);


  // 🔥 fiyat çek (stage'e göre)
  useEffect(() => {
    const loadPrice = async () => {
      try {
        if (!window.ethereum) return;


        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(PRESALE_ADDRESS, ABI, provider);


        const p = await contract.getPrice();
        setPrice(p);
      } catch (err) {
        console.log("Price error:", err);
      }
    };


    loadPrice();
  }, []);


  // 🔥 token hesap (bonus dahil)
  const tokens = (() => {
    try {
      if (!amount || Number(amount) <= 0 || !price) return 0;


      const priceBNB = Number(ethers.utils.formatEther(price));
      const calculated = (Number(amount) / priceBNB) * 1.2;


      return Math.floor(calculated);
    } catch {
      return 0;
    }
  })();


  // 🚀 satın alma
  const buyTokens = async () => {
    try {
      if (!window.ethereum) {
        alert("Metamask yok");
        return;
      }


      if (!amount || Number(amount) <= 0) {
        alert("Geçerli miktar gir");
        return;
      }


      if (Number(amount) < 0.05) {
        alert("Minimum 0.05 BNB");
        return;
      }


      if (Number(amount) > 5) {
        alert("Maximum 5 BNB");
        return;
      }


      setStatus("⏳ Processing...");


      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);


      const signer = provider.getSigner();


      const tx = await signer.sendTransaction({
        to: PRESALE_ADDRESS,
        value: ethers.utils.parseEther(amount)
      });


      await tx.wait();


      setStatus("✅ Success!");
      setAmount("");
    } catch (err) {
      console.log(err);
      setStatus("❌ Error");
    }
  };


  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "#0b1e2a",
          padding: "40px",
          borderRadius: "20px",
          width: "320px",
          textAlign: "center",
        }}
      >
        <h2>NeuroSpark Presale</h2>


        <input
          placeholder="0.05 BNB"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "15px",
            fontSize: "16px",
            color: "#000",
            background: "#fff",
            outline: "none",
          }}
        />


        <p>
          Price:{" "}
          {price
            ? Number(ethers.utils.formatEther(price)).toFixed(8)
            : "..."}{" "}
          BNB
        </p>


        <p style={{ marginBottom: "20px" }}>
          You will receive:
          <br />
          <b style={{ fontSize: "18px", color: "#00ffd5" }}>
            {tokens} NSP
          </b>
        </p>


        <p style={{ fontSize: "13px", opacity: 0.7 }}>
          +20% bonus included
        </p>


        <button
          onClick={buyTokens}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "#00ffd5",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Buy Tokens
        </button>


        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          {status}
        </p>
      </div>
    </div>
  );
}