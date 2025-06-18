import { Routes, Route } from "react-router";
import NotFound from "./pages/NotFound/index.jsx";
import About from "./pages/About/index.jsx";
import Home from "./pages/Home/index.jsx";
import Housing from "./pages/Housing/index.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/housing/:housingId" element={<Housing />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
