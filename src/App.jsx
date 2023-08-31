/* eslint-disable react/jsx-no-comment-textnodes */
import { Routes, Route } from "react-router-dom";
import QrCodeScanner from "./components/pages/QrCodeScanner/QrCodeScanner";
import WelcomePage from "./components/pages/WelcomePage/WelcomePage";
import Instruction from "./components/pages/Instructions/Instruction";
import "semantic-ui-css/semantic.min.css";
import Home from "./components/pages/Home/Home";
import Review from "./components/molecules/Review/Review";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<QrCodeScanner />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/rating" element={<Review/>}/>
      </Routes>
    </>
  );
}

export default App;
