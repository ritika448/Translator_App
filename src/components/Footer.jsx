import React from "react";
import "./Footer.css";
export default function Footer(){
  return (
    <footer className="bg-white mt-6 border-t">
      <div className="max-w-5xl mx-auto px-4 py-4 text-sm text-gray-600">
        © {new Date().getFullYear()}2025 LinguaCraft — Crafted with 💙 using React & Vite
      </div>
    </footer>
  );
}