import React from "react";
import "./App.css";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Providers from "./provider";
import Cart from "./pages/cart";

const App: React.FC = () => {
  const currentPath = window.location.pathname;
  const stripCartPrefix = (path: string) => {
    if (path.startsWith("/cart")) {
      const stripped = path.replace("/cart", "");
      return stripped === "" ? "/" : stripped;
    }
    return path.startsWith("/") ? path : "/";
  };

  const initialPath = stripCartPrefix(currentPath);

  console.log("🛒 Cart App mounting with window path:", currentPath, "internal path:", initialPath);

  return (
    <Providers>
      <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </Providers>
  );
};

export default App;