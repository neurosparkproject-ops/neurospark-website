import React from "react";
import { Link } from "react-router-dom";


export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white px-6 py-20">


      <div className="max-w-5xl mx-auto">


        <Link to="/" className="text-green-400 text-sm mb-8 inline-block">
          ← Back to Home
        </Link>


        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            NeuroSpark (NSP)
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
            AI-powered real-time risk intelligence infrastructure designed
            to protect Web3 ecosystems through predictive exploit modeling
            and behavioral blockchain analytics.
          </p>


          <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-xl transition">
            Download Full PDF
          </button>
        </div>


        {/* EXECUTIVE SUMMARY */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Executive Summary
          </h2>
          <p className="text-white/70 leading-relaxed">
            Billions of dollars are lost annually due to smart contract
            exploits, oracle manipulation and flash loan attacks.
            NeuroSpark introduces an AI-native infrastructure that detects,
            analyzes and predicts vulnerabilities before they escalate.
          </p>
        </section>


        {/* MARKET OPPORTUNITY */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-green-400">
            Market Opportunity
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Rapid Web3 Expansion",
              "Increasing Exploit Frequency",
              "Demand for AI Security Infrastructure"
            ].map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                {item}
              </div>
            ))}
          </div>
        </section>


        {/* TOKEN UTILITY */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            NSP Token Utility
          </h2>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Access to premium AI monitoring tools</li>
            <li>Staking for security node rewards</li>
            <li>Governance participation</li>
            <li>Enterprise API payments</li>
          </ul>
        </section>


        {/* SECURITY FRAMEWORK */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Security Framework
          </h2>
          <ul className="text-white/70 space-y-2">
            <li>4 Verified Smart Contracts</li>
            <li>Immutable 500M Fixed Supply</li>
            <li>No Mint Function</li>
            <li>Transparent Vesting Architecture</li>
          </ul>
        </section>


      </div>
    </div>
  );
}