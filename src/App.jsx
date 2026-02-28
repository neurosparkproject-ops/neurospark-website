import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);


function App() {


  const pieData = {
    labels: ["Presale (20%)", "Locked Vesting (80%)"],
    datasets: [
      {
        data: [20, 80],
        backgroundColor: ["#00f0ff", "#1e293b"],
        borderColor: ["#00f0ff", "#0f172a"],
        borderWidth: 2,
      },
    ],
  };


  return (
    <div
      style={{
        fontFamily: "Arial",
        background:
          "radial-gradient(circle at 50% 0%, rgba(0,240,255,0.15), transparent 40%), linear-gradient(180deg,#0b1220,#0f172a)",
        color: "white",
        minHeight: "100vh",
      }}
    >


      {/* HERO */}
      <section style={{ padding: "140px 20px", textAlign: "center" }}>


        <img
          src="/logo.png"
          alt="NeuroSpark Logo"
          style={{
            width: "110px",
            marginBottom: "25px",
            filter: "drop-shadow(0 0 20px rgba(0,240,255,0.6))",
          }}
        />


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


        <h2 style={{ fontSize: "22px", marginTop: "20px", opacity: 0.9 }}>
          AI-Powered Web3 Risk Intelligence
        </h2>


        <p style={{ marginTop: "20px", opacity: 0.7 }}>
          Secure the Future of Web3
          <br />
          Analyze. Detect. Protect.
        </p>


        <div style={{ marginTop: "40px" }}>


          <a
            href="https://neurosparkai-demo.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                padding: "14px 32px",
                margin: "10px",
                background: "#00f0ff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 0 15px rgba(0,240,255,0.6)",
              }}
            >
              🔍 Try AI Demo
            </button>
          </a>


          <a
            href="https://t.me/NeuroSparkOfficial"
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                padding: "14px 32px",
                margin: "10px",
                background: "#1e293b",
                border: "1px solid #00f0ff",
                color: "#00f0ff",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              💬 Join Telegram
            </button>
          </a>


        </div>


        <div
          style={{
            marginTop: "40px",
            display: "inline-block",
            padding: "10px 22px",
            borderRadius: "30px",
            background: "#111827",
            border: "1px solid #00f0ff",
          }}
        >
          🔒 80% Locked at Launch | Fixed Supply: 500M NSP
        </div>


      </section>




      {/* TOKENOMICS */}
      <section style={{ padding: "100px 20px", textAlign: "center", background: "#0f172a" }}>


        <h2 style={{ fontSize: "34px", marginBottom: "30px" }}>
          📊 Tokenomics
        </h2>


        <p>Max Supply: 500,000,000 NSP</p>
        <p>Presale Allocation: 100,000,000 NSP (20%)</p>
        <p>Locked in Vesting: 400,000,000 NSP (80%)</p>
        <p>No Mint. No Inflation.</p>


        <div style={{ maxWidth: "420px", margin: "40px auto" }}>
          <Pie data={pieData} />
        </div>


      </section>




      {/* VERIFIED CONTRACTS */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>


        <h2 style={{ fontSize: "34px", marginBottom: "30px" }}>
          🔍 Verified Smart Contracts
        </h2>


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


      </section>




      {/* WHITEPAPER */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>


        <h2 style={{ fontSize: "34px", marginBottom: "30px" }}>
          📜 Lite Whitepaper
        </h2>


        <a
          href="/NeuroSpark_Lite_Whitepaper_v1.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button
            style={{
              padding: "14px 30px",
              background: "#00f0ff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 15px rgba(0,240,255,0.5)",
            }}
          >
            Download Whitepaper
          </button>
        </a>


      </section>




      {/* FOOTER */}
      <footer
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#0b1220",
          borderTop: "1px solid rgba(255,255,255,0.05)"
        }}
      >


        <div style={{ marginBottom: "20px", fontSize: "16px", fontWeight: "bold" }}>
          Official Links
        </div>


        <div style={{ marginBottom: "25px" }}>


          <a
            href="https://t.me/NeuroSparkOfficial"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 15px", color: "#00f0ff", textDecoration: "none" }}
          >
            Telegram
          </a>


          <a
            href="https://x.com/NeuroSparkHQ"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 15px", color: "#00f0ff", textDecoration: "none" }}
          >
            X
          </a>


          <a
            href="https://youtube.com/@NeuroSparkWeb3"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 15px", color: "#00f0ff", textDecoration: "none" }}
          >
            YouTube
          </a>


        </div>


        <div style={{ marginBottom: "20px", opacity: 0.7 }}>
          Contact: contact@neurosparkai.io
        </div>


        <div style={{ opacity: 0.5 }}>
          © 2026 NeuroSpark (NSP) — Professional AI Web3 Infrastructure Project
        </div>


      </footer>


    </div>
  );
}


export default App;