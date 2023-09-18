/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import QrCodeScanner from "./components/pages/QrCodeScanner/QrCodeScanner";
import WelcomePage from "./components/pages/WelcomePage/WelcomePage";
import Instruction from "./components/pages/Instructions/Instruction";
import "semantic-ui-css/semantic.min.css";
import Home from "./components/pages/Home/Home";
import Payment from "./components/pages/Payment/Payment";
import Review from "./components/pages/Review/Review";
import Mercadopago from "./components/pages/Mercadopago/Mercadopago";
import Login from "./components/pages/Login/Login";
import Language from "./components/pages/Language/Language";

function App() {
  const [scanResult, setScanResult] = useState();
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <QrCodeScanner
              scanResult={scanResult}
              setScanResult={setScanResult}
            />
          }
        />
        {/* <Route path="/language/:commerceId/:tableId?" element={<Language />} /> */}
        <Route path="/language/:data" element={<Language />} />
        <Route path="/login" element={<Login scanResult={scanResult} />} />
        <Route
          path="/welcome"
          element={<WelcomePage scanResult={scanResult} />}
        />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/mercadopago" element={<Mercadopago />} />
        <Route path="/rating" element={<Review />} />
      </Routes>
    </>
  );
}

export default App;
