import React from "react";
import { Routes, Route } from "react-router-dom";

import Whitepaper from "./pages/Whitepaper";
import Presale from "./pages/Presale";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presale" element={<Presale />} />
      <Route path="/whitepaper" element={<Whitepaper />} />
    </Routes>
  );
}


export default App;


