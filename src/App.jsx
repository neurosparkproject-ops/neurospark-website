import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Whitepaper from "./pages/Whitepaper";


function Home() {
  return (
    <div
  className="min-h-screen text-white"
  style={{
    background: `
      radial-gradient(circle at 20% 20%, rgba(34,197,94,0.12), transparent 40%),
      radial-gradient(circle at 80% 30%, rgba(59,130,246,0.10), transparent 40%),
      linear-gradient(180deg, #0b1120, #0a0f1c)
    `
  }}
>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-white/10 backdrop-blur-md bg-[#0b1120]/80 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="h-12 w-12 object-contain" />
          <span className="text-2xl font-bold tracking-wide">
            NeuroSpark <span className="text-green-400">(NSP)</span>
          </span>
        </div>


        <div className="flex gap-8 text-white/80 font-medium">
          <Link to="/" className="hover:text-green-400 transition">
            Home
          </Link>

          <Link to="/whitepaper" className="hover:text-green-400 transition">
          Whitepaper
          </Link>

        </div>
      </nav>


      {/* HERO */}
<section className="text-center px-6 py-28 bg-gradient-to-b from-[#0b1120] via-[#111827] to-[#0b1120]">


  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
    AI-Powered Web3 Risk Intelligence Infrastructure
  </h1>


  <p className="text-lg text-white/70 max-w-3xl mx-auto mb-10">
    Building the intelligent security layer of Web3 with real-time AI monitoring,
    predictive exploit detection and enterprise-grade risk analytics.
  </p>


  <div className="mt-6">


  <div className="mb-4">
    <Link
      to="/whitepaper"
      className="min-w-[220px] bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-xl transition shadow-lg shadow-green-500/30"
    >
      View Investor Whitepaper
    </Link>
  </div>


  <div>
    <a
      href="https://neurosparkai-demo.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="min-w-[220px] bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-8 py-4 rounded-xl transition shadow-lg shadow-cyan-400/30"
    >
      Try Live AI Demo
    </a>
  </div>
        {/* TRUST METRICS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto text-white/80">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur">
            <p className="text-3xl font-bold text-green-400">4</p>
            <p>Verified Smart Contracts</p>
          </div>


          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur">
            <p className="text-3xl font-bold text-green-400">500M</p>
            <p>Fixed Supply</p>
          </div>


          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur">
            <p className="text-3xl font-bold text-green-400">BNB</p>
            <p>Built on BNB Smart Chain</p>
          </div>
        </div>
        
      </section>


      {/* TOKENOMICS */}
<section className="py-24 px-6 bg-[#0f172a] text-white text-center">
  <h2 className="text-3xl font-bold mb-12">Tokenomics</h2>


  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Grafik */}
    <div className="relative w-64 h-64 mx-auto">
      <div className="w-full h-full rounded-full bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center text-black font-bold text-xl">
        100%
      </div>
    </div>


    {/* Dağılım */}
    <div className="space-y-6 text-left">
      
      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <p className="text-green-400 text-xl font-bold">20% Presale</p>
        <p className="text-white/60 mt-2">Public token distribution phase</p>
      </div>


      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <p className="text-cyan-400 text-xl font-bold">80% TokenLock & Vesting</p>
        <p className="text-white/60 mt-2">Long-term ecosystem sustainability</p>
      </div>


    </div>


  </div>
</section>

      {/* VERIFIED CONTRACTS */}
<section className="px-6 py-28 max-w-6xl mx-auto">


  <div className="text-center mb-20">
    <h2 className="text-4xl font-bold mb-4">
      On-Chain Transparency
    </h2>
    <p className="text-white/50 max-w-2xl mx-auto">
      All core contracts are publicly verified and accessible on BscScan.
      Full transparency is a non-negotiable principle of NeuroSpark.
    </p>
  </div>


  <div className="space-y-10">


    {[
      {
        title: "NSP Token Contract",
        address: "0xf3166D06768CcA4db98b7239B34FfAE35c16a5Fe"
      },
      {
        title: "Presale Contract",
        address: "0xAd14070Ace343194a758BCC3E29bE67424E1144A"
      },
      {
        title: "TokenLock Vesting",
        address: "0x1683c88D0E65a0eC824Fdea01D858E8506912231"
      },
      {
        title: "Unsold Manager",
        address: "0x04e8146Cc10885ADB1F604A3CfaC77917FD83534"
      }
    ].map((contract, index) => {


      const shortAddress =
        contract.address.slice(0, 8) +
        "..." +
        contract.address.slice(-6);


      return (
        <div
          key={index}
          className="border border-white/10 p-8 rounded-2xl bg-white/[0.02] backdrop-blur-md hover:border-white/30 transition"
        >
          <div className="flex justify-between items-center flex-wrap gap-6">


            <div>
              <h3 className="text-xl font-semibold mb-2">
                {contract.title}
              </h3>
              <p className="text-white/60 font-mono">
                {shortAddress}
              </p>
            </div>


            <div className="flex gap-4">


              <button
                onClick={() => navigator.clipboard.writeText(contract.address)}
                className="px-5 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
              >
                Copy
              </button>


              <a
                href={`https://bscscan.com/address/${contract.address}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
              >
                BscScan
              </a>


            </div>


          </div>
        </div>
      );
    })}


  </div>


</section>


  {/* FOOTER */}
  <footer style={{
  padding: "60px 20px",
  background: "#0a0f1c",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  textAlign: "center"
}}>


  <div style={{ marginBottom: "30px" }}>
    <h3 style={{ fontSize: "18px", marginBottom: "15px", opacity: 0.8 }}>
      Official Channels
    </h3>


    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap"
    }}>
      <a href="https://x.com/NeuroSparkHQ" target="_blank" rel="noreferrer"
         style={{ color: "#22c55e", textDecoration: "none", fontWeight: "bold" }}>
        X (Twitter)
      </a>


      <a href="https://t.me/NeuroSparkOfficial" target="_blank" rel="noreferrer"
         style={{ color: "#22c55e", textDecoration: "none", fontWeight: "bold" }}>
        Telegram
      </a>


      <a href="https://youtube.com/@neurosparkweb3" target="_blank" rel="noreferrer"
         style={{ color: "#22c55e", textDecoration: "none", fontWeight: "bold" }}>
        YouTube
      </a>


      <a href="mailto:contact@neurosparkai.io"
         style={{ color: "#22c55e", textDecoration: "none", fontWeight: "bold" }}>
        contact@neurosparkai.io
      </a>
    </div>
  </div>


  <div style={{ opacity: 0.5, fontSize: "14px" }}>
    © 2026 NeuroSpark (NSP) — AI-Powered Web3 Risk Intelligence Infrastructure
  </div>


</footer>
    </div>
  );
}


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whitepaper" element={<Whitepaper />} />
    </Routes>
  );
}