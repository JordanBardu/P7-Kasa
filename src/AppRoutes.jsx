import { Routes, Route } from "react-router";
import NotFound from "./pages/NotFound/index.jsx";
import About from "./pages/About/index.jsx";
import Home from "./pages/Home/index.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
