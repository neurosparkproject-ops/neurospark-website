import React from "react";
import { Link } from "react-router-dom";


const sectionStyle = {
  marginBottom: "60px",
};


const Whitepaper = () => {
  return (
    <div
      style={{
        fontFamily: "Arial",
        background:
          "radial-gradient(circle at 50% 0%, rgba(0,240,255,0.15), transparent 40%), linear-gradient(180deg,#0b1220,#0f172a)",
        color: "white",
        minHeight: "100vh",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h1
            style={{
              fontSize: "48px",
              background: "linear-gradient(90deg,#00f0ff,#3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NeuroSpark (NSP)
          </h1>


          <h2 style={{ fontWeight: "normal", opacity: 0.8 }}>
            AI-Powered Web3 Risk Intelligence Infrastructure
          </h2>


          <div style={{ marginTop: "30px" }}>
            <a
              href="/NeuroSpark_Lite_Whitepaper_v1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  padding: "14px 32px",
                  background: "#00f0ff",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Download Full PDF
              </button>
            </a>
          </div>
        </div>


        {/* INTRO */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#00f0ff" }}>1. Introduction</h2>
          <p style={{ opacity: 0.85, lineHeight: "1.8" }}>
            NeuroSpark (NSP) is an AI-driven Web3 security ecosystem designed to
            detect, analyze and prevent emerging decentralized threats in real time.
            The platform integrates artificial intelligence, behavioral analytics,
            smart contract inspection and predictive exploit modeling.
          </p>
        </section>


        {/* VISION */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#00f0ff" }}>2. Vision</h2>
          <p style={{ opacity: 0.85, lineHeight: "1.8" }}>
            Our vision is to become the intelligent security layer of Web3 —
            an autonomous risk detection network that continuously monitors
            blockchain ecosystems and prevents systemic vulnerabilities before
            they escalate.
          </p>
        </section>


        {/* PROBLEM */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#00f0ff" }}>3. The Problem</h2>
          <p style={{ opacity: 0.85, lineHeight: "1.8" }}>
            Billions of dollars are lost yearly due to oracle manipulation,
            smart contract vulnerabilities, flash loan exploits and account
            takeovers. Traditional audits are static and reactive.
            Web3 requires continuous AI-powered protection.
          </p>
        </section>


        {/* SOLUTION */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#00f0ff" }}>4. The Solution</h2>
          <ul style={{ opacity: 0.85, lineHeight: "1.8" }}>
            <li>AI Smart Contract Scanner</li>
            <li>On-chain Behavioral Monitoring</li>
            <li>Oracle Manipulation Detection</li>
            <li>Exploit Prediction Engine</li>
            <li>Enterprise Risk Dashboard</li>
          </ul>
        </section>


        {/* TOKEN UTILITY */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#00f0ff" }}>5. NSP Token Utility</h2>
          <ul style={{ opacity: 0.85, lineHeight: "1.8" }}>
            <li>Access to premium AI monitoring tools</li>
            <li>Staking for security node rewards</li>
            <li>Governance voting rights</li>
            <li>Enterprise service payments</li>
          </ul>
        </section>


        {/* ROADMAP */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#00f0ff" }}>6. Roadmap</h2>
          <ul style={{ opacity: 0.85, lineHeight: "1.8" }}>
            <li>Q1 – Platform Infrastructure Launch</li>
            <li>Q2 – AI Detection Engine Deployment</li>
            <li>Q3 – Enterprise Security API</li>
            <li>Q4 – Cross-Chain Expansion</li>
          </ul>
        </section>


        {/* CTA */}
        <section style={{ textAlign: "center", marginTop: "100px" }}>
          <h2>Secure the Future of Web3</h2>
          <p style={{ opacity: 0.7 }}>
            Join NeuroSpark and redefine blockchain security standards.
          </p>


          <div style={{ marginTop: "30px" }}>
            <Link to="/">
              <button
                style={{
                  padding: "14px 30px",
                  background: "#1e293b",
                  border: "1px solid #00f0ff",
                  color: "#00f0ff",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Back to Home
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};


export default Whitepaper;