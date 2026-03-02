import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Whitepaper from "./pages/Whitepaper";


function Home() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Contract address copied");
  };


  return (
    <div className="bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] text-white min-h-screen">


      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold tracking-wide">
            NeuroSpark <span className="text-green-400">(NSP)</span>
          </span>
        </div>


        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <Link to="/whitepaper" className="hover:text-green-400 transition">Whitepaper</Link>
        </div>
      </nav>


      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-extrabold mb-6">
          AI-Powered Web3 Risk Intelligence Infrastructure
        </h1>


        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          Building the intelligent security layer of Web3 with verified smart contracts and fixed tokenomics.
        </p>


        <Link
          to="/whitepaper"
          className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl font-semibold transition"
        >
          View Whitepaper
        </Link>


        {/* Trust Metrics */}
        <div className="flex justify-center gap-8 mt-12 text-sm text-white/60">
          <span>4 Verified Smart Contracts</span>
          <span>500M Fixed Supply</span>
          <span>Built on BNB Smart Chain</span>
        </div>
      </section>


      {/* TOKENOMICS */}
      <section className="text-center py-16 px-6 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-8">Tokenomics</h2>


        <div className="space-y-3 text-white/70">
          <p>Max Supply: 500,000,000 NSP</p>
          <p>Presale Allocation: 100,000,000 NSP (20%)</p>
          <p>Locked in Vesting: 400,000,000 NSP (80%)</p>
          <p>No Mint. No Inflation.</p>
        </div>
      </section>


      {/* VERIFIED CONTRACTS */}
      <section className="text-center py-20 px-6 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-12">Verified Smart Contracts</h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">


          {[
            { name: "Token Contract", address: "0xYourTokenAddressHere" },
            { name: "Presale Contract", address: "0xYourPresaleAddressHere" },
            { name: "TokenLock Vesting", address: "0xYourVestingAddressHere" },
            { name: "UnsoldManager", address: "0xYourUnsoldAddressHere" },
          ].map((contract, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
            >
              <h3 className="font-semibold mb-4">{contract.name}</h3>


              <p className="text-xs text-white/60 mb-4">
                {contract.address.slice(0, 6)}...
                {contract.address.slice(-4)}
              </p>


              <div className="flex flex-col gap-3">
                <button
                  onClick={() => copyToClipboard(contract.address)}
                  className="bg-green-500 hover:bg-green-600 py-2 rounded-lg text-sm"
                >
                  Copy Address
                </button>


                <a
                  href={`https://bscscan.com/address/${contract.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 text-sm hover:underline"
                >
                  Verified on BscScan →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-white/10 text-white/50 text-sm">
        © 2026 NeuroSpark (NSP) — AI Web3 Risk Intelligence Infrastructure
      </footer>


    </div>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whitepaper" element={<Whitepaper />} />
    </Routes>
  );
}


export default App;