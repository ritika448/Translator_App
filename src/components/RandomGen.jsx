import { useState, useCallback, useEffect } from "react";
import React from "react";
import "./RandomGen.css";

function generateRandomString(length=12){
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let s = "";
  for(let i=0;i<length;i++){
    s += chars.charAt(Math.floor(Math.random()*chars.length));
  }
  return s;
}

export default function RandomGen(){
  const [len, setLen] = useState(12);
  const [str, setStr] = useState("");

  const handleGenerate = useCallback(()=> {
    setStr(generateRandomString(Number(len)));
  }, [len]);

  useEffect(()=> {
    // initial generate on mount
    setStr(generateRandomString(len));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Random String Generator</h2>
      <div className="flex items-center gap-3 mb-4">
        <input type="number" min="4" max="64" value={len} onChange={(e)=>setLen(e.target.value)} className="border p-2 rounded w-24" />
        <button onClick={handleGenerate} className="bg-green-600 text-white px-4 py-2 rounded">Generate</button>
        <button onClick={()=>{
          navigator.clipboard.writeText(str);
        }} className="px-3 py-2 border rounded">Copy</button>
      </div>
      <div className="bg-gray-50 border p-4 rounded break-words">{str}</div>
    </div>
  );
}