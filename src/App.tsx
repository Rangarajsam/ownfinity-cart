import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Providers from "./provider";
import Cart from "./pages/cart";

const App: React.FC = () => {
  return (
    <Providers>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </Providers>
  );
};

export default App;