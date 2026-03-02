import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Whitepaper from "./pages/Whitepaper";


function Home() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Contract address copied");
  };


  return (
    <div className="bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] text-white min-h-screen">


      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10 backdrop-blur-md bg-black/20">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold tracking-wide">
            NeuroSpark <span className="text-green-400">(NSP)</span>
          </span>
        </div>


        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <Link to="/whitepaper" className="hover:text-green-400 transition">Whitepaper</Link>
        </div>
      </nav>


      {/* HERO */}
      <section className="text-center py-28 px-6">
        <h1 className="text-5xl font-extrabold mb-6">
          AI-Powered Web3 Risk Intelligence Infrastructure
        </h1>


        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Autonomous AI security layer built to detect, analyze and prevent decentralized exploits before they escalate.
        </p>


        {/* TRUST METRICS */}
        <div className="flex justify-center gap-6 flex-wrap text-sm text-green-400 mb-10">
          <span>4 Verified Smart Contracts</span>
          <span>500M Fixed Supply</span>
          <span>Built on BNB Smart Chain</span>
        </div>


        <Link
          to="/whitepaper"
          className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-3 rounded-xl transition shadow-lg"
        >
          View Whitepaper
        </Link>
      </section>


      {/* TOKENOMICS */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold mb-10">Tokenomics</h2>


        <div className="space-y-4 text-gray-300">
          <p>Max Supply: 500,000,000 NSP</p>
          <p>Presale Allocation: 100,000,000 NSP (20%)</p>
          <p>Locked in Vesting: 400,000,000 NSP (80%)</p>
          <p className="text-green-400 font-semibold">No Mint. No Inflation.</p>
        </div>
      </section>


      {/* VERIFIED CONTRACTS */}
      <section className="py-20 px-6 border-t border-white/10">
        <h2 className="text-3xl font-bold text-center mb-12">
          Verified Smart Contracts
        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">


          {[
            { name: "Token Contract", address: "0xTokenAddress123456789" },
            { name: "Presale Contract", address: "0xPresaleAddress123456789" },
            { name: "TokenLockVesting", address: "0xLockAddress123456789" },
            { name: "UnsoldManager", address: "0xUnsoldAddress123456789" },
          ].map((contract, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-green-400 transition"
            >
              <h3 className="font-semibold mb-3">{contract.name}</h3>


              <p className="text-xs text-gray-400 mb-3">
                {contract.address.slice(0, 6)}...
                {contract.address.slice(-4)}
              </p>


              <div className="flex justify-between items-center text-sm">
                <button
                  onClick={() => copyToClipboard(contract.address)}
                  className="text-green-400 hover:underline"
                >
                  Copy
                </button>


                <a
                  href="#"
                  className="text-green-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verified on BscScan
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-white/10 text-gray-400 text-sm">
        © 2026 NeuroSpark — AI Web3 Risk Intelligence Infrastructure
      </footer>
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </Router>
  );
}