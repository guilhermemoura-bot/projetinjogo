import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import OutraPagina from "./pages/outrapagina";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/outra" element={<OutraPagina />} />
    </Routes>
  );
}

