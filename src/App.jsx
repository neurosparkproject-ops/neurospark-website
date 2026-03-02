import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Whitepaper from "./pages/Whitepaper";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);


function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
        padding: "15px 40px",
        background: scrolled
          ? "rgba(11,18,32,0.95)"
          : "rgba(11,18,32,0.7)",
        backdropFilter: "blur(12px)",
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
      <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
        <img
          src="/logo.png"
          alt="NeuroSpark Logo"
          style={{
            height: "42px",
            width: "auto",
            display: "block"
          }}
        />
      </Link>


      <div>
        <Link
          to="/"
          style={{
            color: location.pathname === "/" ? "#00f0ff" : "white",
            marginRight: "25px",
            textDecoration: "none",
          }}
        >
          Home
        </Link>


        <Link
          to="/whitepaper"
          style={{
            color: location.pathname === "/whitepaper" ? "#00f0ff" : "white",
            marginRight: "25px",
            textDecoration: "none",
          }}
        >
          Whitepaper
        </Link>


        <a
          href="#contracts"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Contracts
        </a>
      </div>
    </div>
  );
}


function Home() {
  const pieData = {
    labels: ["Presale (20%)", "Locked Vesting (80%)"],
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
          "radial-gradient(circle at 50% 0%, rgba(0,240,255,0.15), transparent 40%), linear-gradient(180deg,#0b1220,#0f172a)",
      }}
    >
      {/* HERO */}
      <section style={{ textAlign: "center", padding: "120px 20px" }}>
        <h1
          style={{
            fontSize: "52px",
            background: "linear-gradient(90deg,#00f0ff,#3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          NeuroSpark (NSP)
        </h1>


        <h2 style={{ opacity: 0.85, marginTop: "20px" }}>
          AI-Powered Web3 Risk Intelligence Infrastructure
        </h2>


        <Link to="/whitepaper">
          <button
            style={{
              marginTop: "40px",
              padding: "14px 34px",
              background: "#00f0ff",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(0,240,255,0.6)",
            }}
          >
            Whitepaper
          </button>
        </Link>
      </section>


      {/* TOKENOMICS */}
      <section style={{ textAlign: "center", padding: "100px 20px" }}>
        <h2 style={{ fontSize: "32px" }}>Tokenomics</h2>
        <p>Max Supply: 500,000,000 NSP</p>
        <p>Presale Allocation: 100,000,000 NSP (20%)</p>
        <p>Locked in Vesting: 400,000,000 NSP (80%)</p>
        <p>No Mint. No Inflation.</p>


        <div style={{ maxWidth: "420px", margin: "40px auto" }}>
          <Pie data={pieData} />
        </div>
      </section>


      {/* VERIFIED CONTRACTS */}
      <section
        id="contracts"
        style={{
          textAlign: "center",
          padding: "100px 20px",
          background: "#0f172a",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
          Verified Smart Contracts
        </h2>


        <div style={{ maxWidth: "600px", margin: "auto" }}>
          <p>
            <a href="https://bscscan.com/address/0xf3166D06768CcA4db98b7239B34FfAE35c16a5Fe" target="_blank" rel="noreferrer">
              Token Contract
            </a>
          </p>


          <p>
            <a href="https://bscscan.com/address/0xAd14070Ace343194a758BCC3E29bE67424E1144A" target="_blank" rel="noreferrer">
              Presale Contract
            </a>
          </p>


          <p>
            <a href="https://bscscan.com/address/0x1683c88D0E65a0eC824Fdea01D858E8506912231" target="_blank" rel="noreferrer">
              TokenLockVesting
            </a>
          </p>


          <p>
            <a href="https://bscscan.com/address/0x04e8146Cc10885ADB1F604A3CfaC77917FD83534" target="_blank" rel="noreferrer">
              UnsoldManager
            </a>
          </p>
        </div>
      </section>


      <footer
        style={{
          textAlign: "center",
          padding: "40px",
          opacity: 0.6,
        }}
      >
        © 2026 NeuroSpark — AI Web3 Risk Intelligence Infrastructure
      </footer>
    </div>
  );
}


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </>
  );
}


export default App;