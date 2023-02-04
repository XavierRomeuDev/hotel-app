import './App.css';
import { Routes, Route } from "react-router-dom";
import React from "react";
import Details from './components/Details';
import Create from './components/Create';
import NotFound from './components/NotFound';
import Card from './components/Card';

function App() {
  return (
    <Routes>
      <Route path="/create" element={<Create />} />
      <Route path="/hotels/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Card />} />
    </Routes>
  );
}

export default App;
