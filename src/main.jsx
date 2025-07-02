import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainMenu from "./components/MainMenu/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Home from "./pages/Home/index.jsx";
import Housing from "./pages/Housing/index.jsx";
import About from "./pages/About/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:housingId" element={<Housing />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
