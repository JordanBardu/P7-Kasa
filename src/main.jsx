import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import MainMenu from "./components/MainMenu/index.jsx";
import Footer from "./components/Footer/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MainMenu />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
