/* eslint-disable react/jsx-no-comment-textnodes */
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
// import Login from "./usoInternal/ui/components/pages/login/Login";
// import Dashboard from './usoInternal/ui/components/pages/dashboard/Dashboard';
// import Menu from './usoInternal/ui/components/pages/menu/Menu';
// import Sales from './usoInternal/ui/components/pages/sales/Sales';
// import History from './usoInternal/ui/components/pages/history/History';
// import Config from './usoInternal/ui/components/pages/config/Config';
// import Nav from './usoInternal/ui/components/molecules/nav/Nav';
import "semantic-ui-css/semantic.min.css";
import Instruction from "./components/pages/Instructions/Instruction";

function App() {
  return (
    <>
    {/* <Nav/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="instruction" element={<Instruction/>}/>
        //* Rutas para uso interno *//
        {/* <Route path="/" element={<Login/>}/> */}
        //! Rutas protegidas //!
        {/* <Route element={<ProtectedRoutes />}> */}
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/history" element={<History />} />
          <Route path="/config" element={<Config/>} /> */}
        {/* </Route> */}
        //! Rutas protegidas //!
      </Routes>
    </>
  );
}

export default App;
