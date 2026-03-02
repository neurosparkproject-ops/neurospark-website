import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);


/* ================= NAVBAR ================= */


function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "18px 50px",
        background: scrolled
          ? "rgba(8,15,28,0.95)"
          : "rgba(8,15,28,0.7)",
        backdropFilter: "blur(14px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        borderBottom: scrolled
          ? "1px solid rgba(0,240,255,0.3)"
          : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/logo.png"
          alt="NeuroSpark Logo"
          style={{ height: "40px" }}
        />
      </Link>


      <div>
        <Link
          to="/"
          style={{
            color: location.pathname === "/" ? "#00f0ff" : "white",
            marginRight: "30px",
            textDecoration: "none",
          }}
        >
          Home
        </Link>


        <Link
          to="/whitepaper"
          style={{
            color:
              location.pathname === "/whitepaper"
                ? "#00f0ff"
                : "white",
            marginRight: "30px",
            textDecoration: "none",
          }}
        >
          Whitepaper
        </Link>


        <a href="#contracts" style={{ color: "white" }}>
          Contracts
        </a>
      </div>
    </div>
  );
}


/* ================= HOME ================= */


function Home() {
  const pieData = {
    labels: ["Presale (20%)", "Locked (80%)"],
    datasets: [
      {
        data: [20, 80],
        backgroundColor: ["#00f0ff", "#1e293b"],
        borderWidth: 0,
      },
    ],
  };


  return (
    <div
      style={{
        paddingTop: "120px",
        minHeight: "100vh",
        color: "white",
        background:
          "radial-gradient(circle at 50% 0%, rgba(0,240,255,0.15), transparent 40%), linear-gradient(180deg,#070d1a,#0f172a)",
      }}
    >
      {/* HERO */}
      <section style={{ textAlign: "center", padding: "140px 20px" }}>
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            background: "linear-gradient(90deg,#00f0ff,#3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          NeuroSpark (NSP)
        </h1>


        <h2 style={{ opacity: 0.85, marginTop: "25px" }}>
          AI-Powered Web3 Risk Intelligence Infrastructure
        </h2>


        {/* BADGES */}
        <div style={{ marginTop: "40px" }}>
          {["No Mint", "100% Verified Contracts", "AI Secured"].map(
            (item, i) => (
              <span
                key={i}
                style={{
                  padding: "10px 18px",
                  margin: "10px",
                  borderRadius: "30px",
                  background: "rgba(0,240,255,0.1)",
                  border: "1px solid rgba(0,240,255,0.4)",
                  fontSize: "14px",
                }}
              >
                {item}
              </span>
            )
          )}
        </div>


        <Link to="/whitepaper">
          <button
            style={{
              marginTop: "50px",
              padding: "16px 40px",
              background: "#00f0ff",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(0,240,255,0.6)",
            }}
          >
            View Whitepaper
          </button>
        </Link>
      </section>


      {/* TOKENOMICS */}
      <section style={{ textAlign: "center", padding: "100px 20px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>
          Tokenomics
        </h2>


        <div style={{ maxWidth: "400px", margin: "auto" }}>
          <Pie data={pieData} />
        </div>


        <div style={{ marginTop: "40px", opacity: 0.85 }}>
          <p>Max Supply: 500,000,000 NSP</p>
          <p>Presale Allocation: 100,000,000 NSP (20%)</p>
          <p>Locked in Vesting: 400,000,000 NSP (80%)</p>
          <p>No Mint. No Inflation.</p>
        </div>
      </section>


      {/* CONTRACTS */}
      <section
        id="contracts"
        style={{
          padding: "120px 20px",
          textAlign: "center",
          background: "#0f172a",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "60px" }}>
          Verified Smart Contracts
        </h2>


        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px,1fr))",
            gap: "30px",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          {[
            {
              name: "Token Contract",
              url: "https://bscscan.com/address/0xf3166D06768CcA4db98b7239B34FfAE35c16a5Fe",
            },
            {
              name: "Presale Contract",
              url: "https://bscscan.com/address/0xAd14070Ace343194a758BCC3E29bE67424E1144A",
            },
            {
              name: "TokenLockVesting",
              url: "https://bscscan.com/address/0x1683c88D0E65a0eC824Fdea01D858E8506912231",
            },
            {
              name: "UnsoldManager",
              url: "https://bscscan.com/address/0x04e8146Cc10885ADB1F604A3CfaC77917FD83534",
            },
          ].map((contract, i) => (
            <a
              key={i}
              href={contract.url}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "30px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.03)",
                border:
                  "1px solid rgba(0,240,255,0.2)",
                textDecoration: "none",
                color: "white",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 25px rgba(0,240,255,0.4)";
                e.currentTarget.style.transform =
                  "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "none";
                e.currentTarget.style.transform =
                  "translateY(0px)";
              }}
            >
              <h3>{contract.name}</h3>
              <p style={{ opacity: 0.6 }}>
                View on BscScan →
              </p>
            </a>
          ))}
        </div>
      </section>


      <footer
        style={{
          textAlign: "center",
          padding: "50px",
          opacity: 0.6,
        }}
      >
        © 2026 NeuroSpark — AI Web3 Risk Intelligence Infrastructure
      </footer>
    </div>
  );
}


/* ================= WHITEPAPER PAGE ================= */


function WhitepaperPage() {
  return (
    <div
      style={{
        paddingTop: "140px",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#070d1a,#0f172a)",
        color: "white",
        paddingBottom: "100px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          padding: "60px",
          background: "rgba(255,255,255,0.03)",
          borderRadius: "16px",
          border: "1px solid rgba(0,240,255,0.2)",
        }}
      >
        <h1 style={{ marginBottom: "40px" }}>
          NeuroSpark (NSP) Whitepaper
        </h1>


        <h2>1. Introduction</h2>
        <p>
          NeuroSpark (NSP) is an AI-driven Web3 security
          ecosystem designed to detect, analyze and prevent
          emerging decentralized threats in real time.
        </p>


        <h2>2. Vision</h2>
        <p>
          To become the intelligent security layer of Web3 —
          an autonomous AI risk detection network.
        </p>


        <h2>3. Token Utility</h2>
        <ul>
          <li>Access to premium AI tools</li>
          <li>Staking rewards</li>
          <li>Governance rights</li>
          <li>Enterprise integrations</li>
        </ul>


        <h2>4. Roadmap</h2>
        <ul>
          <li>Q1 — Platform Infrastructure</li>
          <li>Q2 — AI Detection Engine</li>
          <li>Q3 — Enterprise API</li>
          <li>Q4 — Cross-chain Expansion</li>
        </ul>
      </div>
    </div>
  );
}


/* ================= APP ================= */


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/whitepaper"
          element={<WhitepaperPage />}
        />
      </Routes>
    </>
  );
}


export default App;