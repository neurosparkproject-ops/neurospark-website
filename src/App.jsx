// update
import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Whitepaper from "./pages/Whitepaper";
import dashboard from "./assets/dashboard.png";
import { PieChart, Pie, Cell, Tooltip,
ResponsiveContainer } from "recharts";

const tokenomicsData = [
  { name: "Presale", value: 20 },
  { name: "Liquidity", value: 30 },
  { name: "Ecosystem", value: 25 },
  { name: "Team & Development", value: 15 },
  { name: "Marketing", value: 10 }
];


const COLORS = ["#22c55e", "#06b6d4", "#3b82f6", "#6366f1", "#a855f7"];

<style>
{`
@keyframes threat-scroll {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}


.animate-threat {
  display: inline-block;
  white-space: nowrap;
  animation: threat-scroll 20s linear infinite;
}


.live-dot {
  display:inline-block;
  width:10px;
  height:10px;
  background:red;
  border-radius:50%;
  margin-right:8px;
  animation:blink 1s infinite;
}


@keyframes blink {
  0%{opacity:1;}
  50%{opacity:0.3;}
  100%{opacity:1;}
}
`}
</style>

function Home({ setShowPopup }) {
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


{/* LIVE THREAT FEED */}


<div className="w-full bg-red-500 text-black text-sm py-2 overflow-hidden">


<marquee className="font-semibold">


🔴 LIVE Threat Feed — $1.8M Exploit detected on BNB Chain — AI monitoring active — NeuroSpark Security Engine —


</marquee>


</div>





      {/* NAVBAR */}


<nav className="w-full h-20 px-10 border-b border-white/10 backdrop-blur-md bg-[#0b1120]/90 flex items-center justify-between">


<div className="flex items-center gap-3">


<img src="/logo.png" alt="logo" className="h-10 w-10 object-contain" />


<span className="text-2xl font-bold tracking-wide">
NeuroSpark <span className="text-green-400">(NSP)</span>
</span>


</div>


<div className="flex gap-6 text-sm text-white/80 font-medium">


<a href="#">Home</a>
<a href="#engine">AI Engine</a>
<a href="#attackmap">Attack Map</a>
<a href="#tokenomics">Tokenomics</a>
<a href="#roadmap">Roadmap</a>
<a href="#contracts">Contracts</a>
<a href="#exploits">Exploit Tracker</a>
<Link to="/whitepaper">Whitepaper</Link>


</div>


</nav>


      {/* HERO */}
<section className="text-center px-6 py-28 pt-32 bg-gradient-to-b from-[#0b1120] via-[#111827] to-[#0b1120]">


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

</div>


{/* GLOBAL ATTACK MAP */}


<section id="attackmap" className="px-10 py-20">


<h2 className="text-3xl font-bold text-center mb-10">
🌍 Global Web3 Attack Monitoring
</h2>


<div className="flex justify-center">


<img 
src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
alt="Attack Map"
className="opacity-80"
/>

</div>


<p className="text-center mt-6 text-white/70">
Real-time AI monitoring of suspicious smart contract activity across global blockchain networks.
</p>


</section>



{/* SECURITY PARTNERS */}


<section className="py-16 bg-[#020617] text-white">


<div className="max-w-6xl mx-auto px-6 text-center">


<p className="text-gray-400 mb-8 uppercase tracking-widest text-sm">
Powered by Web3 Security Intelligence
</p>


<div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-gray-300 text-lg font-semibold">


<div className="opacity-70 hover:opacity-100 transition">
BNB Chain
</div>


<div className="opacity-70 hover:opacity-100 transition">
BscScan
</div>


<div className="opacity-70 hover:opacity-100 transition">
AI Detection
</div>


<div className="opacity-70 hover:opacity-100 transition">
Smart Contract Monitoring
</div>


<div className="opacity-70 hover:opacity-100 transition">
Blockchain Intelligence
</div>


</div>


</div>


</section>


{/* AI DASHBOARD SECTION */}


<div className="mt-24 text-center">


<h2 className="text-3xl font-bold mb-6">
AI Risk Intelligence Dashboard
</h2>


<p className="text-white/70 max-w-2xl mx-auto">
  NeuroSpark AI continuously scans smart contracts,
  DeFi protocols and blockchain activity to identify
  potential exploits before they happen.
</p>


<p className="text-green-400 mt-4 text-sm tracking-wide">
  ● Live AI Demo
</p>


<video
  autoPlay
  muted
  loop
  playsInline
  className="rounded-xl shadow-lg mx-auto mt-10"
  style={{ maxWidth: "900px", width: "100%" }}
>
  <source src="/demo.mp4" type="video/mp4" />
</video>


</div>

 <div className="mt-20 max-w-4xl mx-auto text-center">
  <h3 className="text-2xl font-bold mb-6">
    Why traders use NeuroSpark
  </h3>


  <div className="grid md:grid-cols-3 gap-6 text-sm text-white/80">
    <div>
      ⚠️ Avoid rug pulls before they happen
    </div>
    <div>
      🔍 Detect hidden contract risks instantly
    </div>
    <div>
      🧠 Make smarter trading decisions with AI
    </div>
  </div>

<div className="mt-12 text-center">
  <button
onClick={() => setShowPopup(true)}
className="bg-green-500 px-6 py-3 rounded-xl font-semibold">
    Unlock Full AI Analysis
  </button>
</div>

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

       {/* AI SECURITY ENGINE */}


<section id="engine" className="py-24 px-6 bg-[#020617] text-white">


<div className="max-w-6xl mx-auto text-center">


<h2 className="text-4xl font-bold mb-12">
AI Security Engine
</h2>


<p className="text-gray-400 max-w-3xl mx-auto mb-16">
NeuroSpark AI analyzes blockchain activity and smart contracts to identify 
potential security risks, exploit patterns, and abnormal on-chain behavior.
</p>


<div className="grid md:grid-cols-2 gap-10 text-left">


<div className="bg-white/5 p-6 rounded-xl border border-white/10">
<h3 className="text-xl font-semibold text-cyan-400 mb-2">
Real-Time Smart Contract Monitoring
</h3>
<p className="text-gray-400">
AI continuously scans blockchain transactions to detect suspicious activity 
and potential vulnerabilities.
</p>
</div>


<div className="bg-white/5 p-6 rounded-xl border border-white/10">
<h3 className="text-xl font-semibold text-cyan-400 mb-2">
Exploit Pattern Detection
</h3>
<p className="text-gray-400">
Machine learning models analyze historical exploits to identify attack patterns 
before they cause damage.
</p>
</div>


<div className="bg-white/5 p-6 rounded-xl border border-white/10">
<h3 className="text-xl font-semibold text-cyan-400 mb-2">
DeFi Risk Scoring
</h3>
<p className="text-gray-400">
Protocols can receive AI-generated risk scores based on smart contract structure 
and on-chain activity.
</p>
</div>


<div className="bg-white/5 p-6 rounded-xl border border-white/10">
<h3 className="text-xl font-semibold text-cyan-400 mb-2">
AI-Driven Security Intelligence
</h3>
<p className="text-gray-400">
NeuroSpark AI delivers data-driven insights that help developers and users 
understand blockchain risks.
</p>
</div>


</div>


</div>


</section>


{/* EXPLOIT TRACKER */}


<section id="exploits" className="py-24 px-6 bg-[#020617] text-white">


<div className="max-w-6xl mx-auto">


<h2 className="text-4xl font-bold text-center mb-12">
Live Exploit Tracker
</h2>


<p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
NeuroSpark AI continuously monitors blockchain activity to detect suspicious
transactions, abnormal contract behavior, and potential exploit patterns.
</p>


<div className="grid md:grid-cols-3 gap-8">


<div className="bg-white/5 border border-white/10 rounded-xl p-6">
<p className="text-red-400 font-bold text-lg">$1.8M Exploit</p>
<p className="text-white mt-2">DeFi Lottery Protocol</p>
<p className="text-gray-400 text-sm mt-2">
Flash loan manipulation detected in smart contract reward logic.
</p>
</div>


<div className="bg-white/5 border border-white/10 rounded-xl p-6">
<p className="text-red-400 font-bold text-lg">$2.3M Bridge Attack</p>
<p className="text-white mt-2">Cross-chain Bridge</p>
<p className="text-gray-400 text-sm mt-2">
Unauthorized validator signature used to drain bridge liquidity.
</p>
</div>


<div className="bg-white/5 border border-white/10 rounded-xl p-6">
<p className="text-yellow-400 font-bold text-lg">$900K Vulnerability</p>
<p className="text-white mt-2">DeFi Lending Protocol</p>
<p className="text-gray-400 text-sm mt-2">
Reentrancy pattern detected during collateral withdrawal.
</p>
</div>


</div>


</div>


</section>

      {/* TOKENOMICS */}
<section id="tokenomics" className="py-24 px-6 bg-[#0f172a] text-white text-center">
  <h2 className="text-3xl font-bold mb-12">Tokenomics</h2>


  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Grafik */}

    <div className="mt-12 flex justify-center">


<div style={{ width: 400, height: 300 }}>


<ResponsiveContainer>


<PieChart>


<Pie
data={tokenomicsData}
cx="50%"
cy="50%"
outerRadius={100}
dataKey="value"
label
>


{tokenomicsData.map((entry, index) => (


<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />


))}


</Pie>


<Tooltip />


</PieChart>


</ResponsiveContainer>


</div>


</div>

<div className="mt-10 space-y-6 text-left max-w-xl mx-auto">


<h3 className="text-xl font-semibold text-cyan-400">Tokenomics Overview</h3>


<p>
<strong>20% Presale Allocation</strong><br/>
Distributed during the public presale phase.
</p>


<p>
<strong>80% Ecosystem & Development Reserve</strong><br/>
Locked via TokenLockVesting smart contract to ensure long-term sustainability.
</p>


<h3 className="text-xl font-semibold text-cyan-400 mt-6">Vesting Mechanism</h3>


<ul className="list-disc ml-6 space-y-2">
<li>Initial <strong>6-month cliff</strong></li>
<li><strong>5% monthly release schedule</strong></li>
<li>Tokens support ecosystem growth, partnerships and protocol development</li>
</ul>


<p className="text-sm text-gray-400 mt-6">
All token locks and vesting contracts are publicly verifiable on BscScan.
</p>


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

      {/* ROADMAP */}
<section id="roadmap" className="py-20 bg-black text-white">
<div className="max-w-5xl mx-auto px-6">


<h2 className="text-4xl font-bold text-center mb-12">
NeuroSpark AI Development Roadmap
</h2>


<div className="space-y-10">


<div>
<h3 className="text-xl font-semibold text-cyan-400">
Phase 1 — Foundation (Q1 2026)
</h3>
<ul className="list-disc ml-6 mt-2 text-gray-300">
<li>NeuroSpark AI concept development</li>
<li>Core smart contract architecture</li>
<li>NSP Token creation</li>
<li>TokenLock & Vesting smart contract deployment</li>
<li>Official website launch</li>
<li>Social channels launch (X, Telegram, YouTube)</li>
</ul>
</div>


<div>
<h3 className="text-xl font-semibold text-cyan-400">
Phase 2 — Ecosystem Launch (Q2 2026)
</h3>
<ul className="list-disc ml-6 mt-2 text-gray-300">
<li>NSP token presale</li>
<li>Smart contract security review</li>
<li>Community growth campaign</li>
<li>Initial exploit analysis content series</li>
<li>AI risk detection model research</li>
</ul>
</div>


<div>
<h3 className="text-xl font-semibold text-cyan-400">
Phase 3 — AI Risk Engine (Q3 2026)
</h3>
<ul className="list-disc ml-6 mt-2 text-gray-300">
<li>AI-powered smart contract monitoring prototype</li>
<li>Exploit pattern detection research</li>
<li>DeFi protocol risk scoring framework</li>
<li>Developer documentation preparation</li>
</ul>
</div>


<div>
<h3 className="text-xl font-semibold text-cyan-400">
Phase 4 — Beta Platform (Q4 2026)
</h3>
<ul className="list-disc ml-6 mt-2 text-gray-300">
<li>NeuroSpark AI dashboard beta release</li>
<li>Real-time blockchain anomaly detection testing</li>
<li>Early protocol integrations</li>
<li>Community testing program</li>
</ul>
</div>


<div>
<h3 className="text-xl font-semibold text-cyan-400">
Phase 5 — Ecosystem Expansion (2027)
</h3>
<ul className="list-disc ml-6 mt-2 text-gray-300">
<li>AI risk intelligence platform launch</li>
<li>Web3 protocol integrations</li>
<li>Advanced exploit detection models</li>
<li>Security partner collaborations</li>
</ul>
</div>


</div>


</div>
</section>

      {/* VERIFIED CONTRACTS */}
<section id="contracts" className="px-6 py-28 max-w-6xl mx-auto">


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
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState(""); 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home  setShowPopup={setShowPopup} />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>


      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#0b1120] p-8 rounded-xl text-center max-w-md w-full border border-white/10">
            
            <h2 className="text-xl font-bold mb-4">
              Full AI Analysis Locked
            </h2>


            <p className="text-white/70 mb-6">
              Upgrade to unlock detailed contract risk analysis, wallet tracking and AI insights.
            </p>

            <p className="text-white/70 mb-6">
  Upgrade to unlock detailed contract risk analysis, wallet tracking and AI insights.
</p>


<input
  type="email"
  placeholder="Enter your email"
  className="w-full px-4 py-2 rounded-lg mb-4 text-black"
  onChange={(e) => setEmail(e.target.value)}
/>


<button
  onClick={() => {
    fetch("https://script.google.com/macros/s/AKfycbwj9wjoIZ5DRiAD-f8HY3SnSelmd6PrRN0vopf0dmGyOaTF9b9dDJRPa49JTVirmPqe/exec", {
      method: "POST",
      body: new URLSearchParams({ 
       email:email
      }).toString(),
    });
    setShowPopup(false);
  }}
  className="bg-green-500 px-5 py-2 rounded-lg"
>
  Unlock Access
</button>
            
          </div>
        </div>
      )}


    </>
  );
}