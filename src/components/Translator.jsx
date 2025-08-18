import React, { useState } from "react";
import axios from "axios";
import "./Translator.css";

const LANGS = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
];

export default function Translator(){
  const [text, setText] = useState("");
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("hi");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleTranslate(){
    if(!text.trim()) return;
    setLoading(true);
    setResult("");
    try{
      const res = await axios.post("https://xtranslate.vercel.app/translate",{
      "fl":from,
      "tl":to,
      "text":text
      },{
          headers: { "Content-Type": "application/json" }
        });
      setResult(res.data.translated_text || " ");
    } catch(err){
      console.error(err);
      setResult("Error:Translation failed");
    } finally{
      setLoading(false);
    }
   
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">🌍 Smart Translator</h1>
      <p className="text-gray-400 mb-6">Type, Translate & Copy with just one click 🚀</p>

      {/* Input Area */}
      <textarea
        rows={4}
        className="w-full max-w-xl border border-gray-600 bg-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4"
        placeholder="✍ Type something in English..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Language Selector */}
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="border border-gray-600 bg-gray-700 px-4 py-2 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        {LANGS.map((l) => (
          <option key={l.code} value={l.code}>
            {l.name}
          </option>
        ))}
      </select>

      {/* Buttons */}
      <div className="flex-col justify-center item-center gap-4 mb-6">
        <button
          onClick={handleTranslate}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          {loading ? "⏳ Translating..." : "🔄 Translate Now"}
        </button>

        <button
          onClick={() => navigator.clipboard?.writeText(result)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-5 py-2 rounded-lg shadow-md transition"
        >
          📋 Copy Result
        </button>
      </div>

      {/* Result Box */}
      <div className="bg-gray-100 text-gray-900 w-full max-w-xl p-4 rounded-lg min-h-[80px] shadow-inner">
        {result ? (
          <p className="text-lg font-medium">{result}</p>
        ) : (
          <span className="text-gray-500">✨ Your translation will appear here...</span>
          )}
      </div>
    </div>
  );
}