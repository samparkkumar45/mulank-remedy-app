import React, { useState } from "react";

export default function App() {
  const [mulank, setMulank] = useState("");
  const [bhagyank, setBhagyank] = useState("");
  const [result, setResult] = useState("");

  const remedies = {
    "1-1": "Carnelian & Citrine Blend",
    "1-2": "Clear Quartz & Tiger Eye Blend",
    "1-3": "Yellow Citrine",
    "1-4": "Golden Tiger Eye",
    "1-5": "Green Aventurine",
    "1-6": "Clear Quartz",
    "1-7": "Amethyst",
    "1-8": "Lapis Lazuli",
    "1-9": "Red Jasper",

    "2-1": "SunStone & White MoonStone Blend",
    "2-2": "White MoonStone",
    "2-3": "Yellow Citrine",
    "2-4": "Golden Tiger Eye",
    "2-5": "Green Aventurine",
    "2-6": "White MoonStone & Rose Quartz Blend",
    "2-7": "Amethyst",
    "2-8": "Golden Tiger Eye",
    "2-9": "Carnelian",

    "3-1": "Yellow Citrine",
    "3-2": "Clear Quartz",
    "3-3": "Yellow Tiger Eye & Amethyst Blend",
    "3-4": "Citrine & Smoky Quartz Blend",
    "3-5": "Yellow Citrine & Green Jade Blend",
    "3-6": "Yellow Citrine & Rose Quartz Blend",
    "3-7": "Amethyst",
    "3-8": "Yellow Citrine & Lapis Lazuli Blend",
    "3-9": "Yellow Citrine & Carnelian Blend",
  };

  function findRemedy() {
    if (!mulank || !bhagyank) {
      setResult("Please enter both numbers.");
      return;
    }

    if (mulank < 1 || mulank > 3 || bhagyank < 1 || bhagyank > 9) {
      setResult("Mulank must be 1-3 and Bhagyank must be 1-9.");
      return;
    }

    const key = `${mulank}-${bhagyank}`;
    const answer = remedies[key] || "No remedy found";

    setResult(answer);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e1e2f, #3a0ca3)",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          width: "350px",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ color: "#3a0ca3", marginBottom: "10px" }}>
          Mulank & Bhagyank
        </h1>

        <p style={{ color: "gray", marginBottom: "20px" }}>
          Find your perfect bracelet remedy
        </p>

        <input
          type="number"
          placeholder="Enter Mulank (1-3)"
          min="1"
          max="3"
          value={mulank}
          onChange={(e) => setMulank(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Enter Bhagyank (1-9)"
          min="1"
          max="9"
          value={bhagyank}
          onChange={(e) => setBhagyank(e.target.value)}
          style={inputStyle}
        />

        <button onClick={findRemedy} style={buttonStyle}>
          Find Remedy
        </button>

        {result && (
          <div style={resultStyle}>
            <h3>Best Bracelet:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  border: "2px solid #ccc",
  borderRadius: "10px",
  outline: "none",
  fontSize: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  border: "none",
  borderRadius: "10px",
  background: "#3a0ca3",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "10px",
};

const resultStyle = {
  marginTop: "20px",
  padding: "15px",
  background: "#f3f0ff",
  borderRadius: "10px",
};