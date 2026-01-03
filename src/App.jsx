import { useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ConciergeBot from "./components/ConciergeBot";
import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetails";
import Products from "./pages/Products";
import Footer from "./components/Footer";



export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <ConciergeBot />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:slug" element={<CollectionDetail />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
}
