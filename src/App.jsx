/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import QrCodeScanner from "./components/pages/QrCodeScanner/QrCodeScanner";
import WelcomePage from "./components/pages/WelcomePage/WelcomePage";
import Instruction from "./components/pages/Instructions/Instruction";
import "semantic-ui-css/semantic.min.css";
import Home from "./components/pages/Home/Home";
// import Payment from "./components/pages/Payment/Payment";
// import Review from "./components/pages/Review/Review";
// import Mercadopago from "./components/pages/Mercadopago/Mercadopago";
import Login from "./components/pages/Login/Login";
import Language from "./components/pages/Language/Language";
import ProtectedRoutes from "./components/atoms/ProtectedRoutes/ProtectedRoutes";
import { useDispatch } from "react-redux";
import axios from "axios";
// import MyOrders from "./components/pages/MyOrders/MyOrders";
// axios.defaults.baseURL = "http://localhost:3001/";
// axios.defaults.baseURL = "https://nodejs-production-bbf9.up.railway.app";
axios.defaults.baseURL = "https://web-production-053a.up.railway.app";
function App() {
  const [scanResult, setScanResult] = useState();
  const dispatch = useDispatch();
  const lang = localStorage.getItem("Lang")
    ? localStorage.getItem("Lang")
    : "es";

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
        <Route path="/welcome/*" element={<WelcomePage />} />
        <Route element={<ProtectedRoutes />}>
          {/* <Route path="/login" element={<Login scanResult={scanResult} />} /> */}
          {/* <Route
            path="/welcome"
            element={<WelcomePage scanResult={scanResult} />}
          /> */}
          {/* <Route path="/instruction" element={<Instruction />} /> */}
          <Route path="/home" element={<Home />} />
          {/* <Route path="/payment" element={<Payment />} />
          <Route path="/mercadopago" element={<Mercadopago />} />
          <Route path="/rating/:id?" element={<Review />} />
          <Route path="/myorders" element={<MyOrders />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
