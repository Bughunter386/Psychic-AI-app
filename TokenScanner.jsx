import React, { useState } from 'react';

const TokenScanner = ({ onScan }) => {
  const [address, setAddress] = useState("");

  return (
    <div className="p-4 rounded-xl shadow-lg bg-[#0d1117] text-white w-full max-w-xl mx-auto">
      <h2 className="text-xl mb-4">🔍 Enter Token Address</h2>
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Paste contract here..."
        className="w-full p-2 rounded bg-[#161b22] border border-gray-600 text-white"
      />
      <button
        onClick={() => onScan(address)}
        className="mt-4 bg-[#ffcd05] text-black px-4 py-2 rounded hover:bg-yellow-400"
      >
        Scan Token
      </button>
    </div>
  );
};

export default TokenScanner;