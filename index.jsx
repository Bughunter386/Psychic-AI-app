import React, { useState } from "react";
import TokenScanner from "../components/TokenScanner";
import { scanToken } from "../api/scanToken";

export default function Home() {
  const [result, setResult] = useState("");

  const handleScan = async (address) => {
    setResult("Scanning...");
    const data = await scanToken(address);
    setResult(data);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-4">
      <h1 className="text-3xl mb-6 font-bold text-center">🔮 Web3 Psychic AI</h1>
      <TokenScanner onScan={handleScan} />
      {result && (
        <div className="mt-6 bg-[#161b22] p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">🧠 AI Analysis</h2>
          <pre className="whitespace-pre-wrap">{result}</pre>
        </div>
      )}
    </div>
  );
}