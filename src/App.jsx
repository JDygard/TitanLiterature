import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Read from "./pages/Read";
import Books from "./pages/Books"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/read" element={<Read />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;

