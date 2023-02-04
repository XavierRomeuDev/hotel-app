import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
//import { QueryClient, QueryClientProvider } from "react-query";
//import { ReactQueryDevtools } from "react-query/devtools";
const Card = React.lazy(() => import("./components/Card"));
const Create = React.lazy(() => import("./components/Create"));
//const Destinations = React.lazy(() => import("./components/Destinations"));
const Details = React.lazy(() => import("./components/Details"));
const NotFound = React.lazy(() => import("./components/NotFound"));
//const ReactQueryDestinations = React.lazy(() => import("./components/ReactQueryDestinations"));

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
