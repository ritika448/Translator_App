import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Translator from "./components/Translator";
import RandomGen from "./components/RandomGen";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
      <Navbar />
      <About />
      <Routes>
        <Route path="/" element={<Translator/>} />
        <Route path="/random" element={<RandomGen/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>  </>
  )
}

export default App;