/* eslint-disable react/jsx-no-comment-textnodes */
import { Routes, Route } from "react-router-dom";
import QrCodeScanner from "./components/pages/QrCodeScanner/QrCodeScanner";
import Home from "./components/pages/Home/Home";
import Instruction from "./components/pages/Instructions/Instruction";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<QrCodeScanner />} />
        <Route path="/home" element={<Home />} />
        <Route path="/instruction" element={<Instruction />} />
      </Routes>
    </>
  );
}

export default App;
