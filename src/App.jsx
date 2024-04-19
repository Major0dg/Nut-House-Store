import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./app/features/counter/CartPage";
import Products from "./app/features/counter/Products";
import Community from "./pages/Community";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
