import './App.css'
import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}
