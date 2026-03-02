import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Whitepaper from "./pages/Whitepaper";


function Home() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white">


      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-white/10 backdrop-blur-md bg-[#0b1120]/80 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="h-12 w-12 object-contain" />
          <span className="text-2xl font-bold tracking-wide">
            NeuroSpark <span className="text-green-400">(NSP)</span>
          </span>
        </div>


        <div className="flex gap-8 text-white/80 font-medium">
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <Link to="/whitepaper" className="hover:text-green-400 transition">Whitepaper</Link>
        </div>
      </nav>


      {/* HERO */}
      <section className="text-center px-6 py-28 bg-gradient-to-b from-[#0b1120] via-[#111827] to-[#0b1120]">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          AI-Powered Web3 Risk Intelligence Infrastructure
        </h1>


        <p className="text-lg text-white/70 max-w-3xl mx-auto mb-10">
          Building the intelligent security layer of Web3 with real-time AI monitoring,
          predictive exploit detection and enterprise-grade risk analytics.
        </p>


        <Link
          to="/whitepaper"
          className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-xl transition shadow-lg shadow-green-500/30"
        >
          View Investor Whitepaper
        </Link>


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
      <section style={{
  padding: "120px 20px",
  background: "linear-gradient(180deg, #0f172a, #0b1120)"
}}>
  <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
    
    <h2 style={{
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "60px"
    }}>
      Tokenomics
    </h2>


    <div style={{
      background: "#111827",
      padding: "50px",
      borderRadius: "20px",
      boxShadow: "0 0 40px rgba(0,0,0,0.6)"
    }}>


      {/* Presale */}
      <div style={{ marginBottom: "50px", textAlign: "left" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
          fontSize: "18px"
        }}>
          <span>Presale Allocation</span>
          <span style={{ color: "#22c55e", fontWeight: "bold" }}>20%</span>
        </div>


        <div style={{
          width: "100%",
          height: "24px",
          background: "#1f2937",
          borderRadius: "20px",
          overflow: "hidden"
        }}>
          <div style={{
            width: "20%",
            height: "100%",
            background: "linear-gradient(90deg,#22c55e,#16a34a)"
          }}></div>
        </div>
      </div>


      {/* TokenLock */}
      <div style={{ textAlign: "left" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
          fontSize: "18px"
        }}>
          <span>TokenLock Vesting</span>
          <span style={{ color: "#3b82f6", fontWeight: "bold" }}>80%</span>
        </div>


        <div style={{
          width: "100%",
          height: "24px",
          background: "#1f2937",
          borderRadius: "20px",
          overflow: "hidden"
        }}>
          <div style={{
            width: "80%",
            height: "100%",
            background: "linear-gradient(90deg,#3b82f6,#2563eb)"
          }}></div>
        </div>
      </div>


      {/* Details */}
      <div style={{
        marginTop: "60px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        gap: "30px",
        textAlign: "center"
      }}>
        <div>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#22c55e" }}>500M</p>
          <p style={{ opacity: 0.6 }}>Total Supply</p>
        </div>


        <div>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#22c55e" }}>BNB</p>
          <p style={{ opacity: 0.6 }}>Network</p>
        </div>


        <div>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#22c55e" }}>No Mint</p>
          <p style={{ opacity: 0.6 }}>Immutable Supply</p>
        </div>
      </div>


    </div>
  </div>
</section>


      {/* VERIFIED CONTRACTS */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Verified Smart Contracts
        </h2>


        <div className="grid md:grid-cols-2 gap-8">


          {[
            {
              title: "Token Contract",
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
          ].map((contract, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur">
              <h3 className="text-xl font-semibold mb-3">{contract.title}</h3>


              <p className="text-white/60 text-sm mb-4 break-all">
                {contract.address}
              </p>


              <div className="flex gap-4 text-sm">
                <button
                  onClick={() => navigator.clipboard.writeText(contract.address)}
                  className="text-green-400 hover:underline"
                >
                  Copy Address
                </button>


                <a
                  href={`https://bscscan.com/address/${contract.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-green-400 transition"
                >
                  Verified on BscScan
                </a>
              </div>
            </div>
          ))}


        </div>
      </section>


      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-white/10 text-white/50 text-sm">
        © 2026 NeuroSpark (NSP) — AI-Powered Web3 Security Infrastructure
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