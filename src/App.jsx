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
        padding: "18px 40px",
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
      <Link to="/" style={{ textDecoration: "none" }}>
        <h3
          style={{
            color: "#00f0ff",
            margin: 0,
            textShadow: "0 0 12px rgba(0,240,255,0.8)",
          }}
        >
          NeuroSpark
        </h3>
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
            textDecoration: "none",
          }}
        >
          Whitepaper
        </Link>
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
              transition: "0.3s",
            }}
          >
            Whitepaper
          </button>
        </Link>
      </section>


      <section style={{ textAlign: "center", padding: "100px 20px" }}>
        <h2 style={{ fontSize: "32px" }}>Tokenomics</h2>
        <div style={{ maxWidth: "420px", margin: "40px auto" }}>
          <Pie data={pieData} />
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