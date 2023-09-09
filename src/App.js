import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Weekly from "./components/Weekly";
function App() {
  return (
    <div className="App">
      <div className="cotainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/weekly" element={<Weekly />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
