import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";

export default function Navbar(){
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold"></div>
        <div id="link" className="space-x-4">
          <Link to="/" className="hover:text-blue-600">Translator |</Link>&nbsp;&nbsp;
                    <Link to="/random" className="hover:text-blue-600">Random |</Link>&nbsp;&nbsp;
          <Link to="/about" className="hover:text-blue-600">About</Link>
        </div>
      </div>
    </nav>
  );
}