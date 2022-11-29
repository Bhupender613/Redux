import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Customerform from "./components/Customerform";
import Customerlist from "./components/Customerlist";
import Manufacturer from "./components/Manufacturer";
import Productform from "./components/Productform";
import Productlist from "./components/Productlist";
import Createcontracts from "./components/Createcontracts";
import Assingrule from "./components/Assingrule";
import Contractslist from "./components/Contractslist";
import Charts from "./components/Charts";
import Tables from "./components/Tables";
import Manufacturerlist from "./components/Manufacturerlist";

function App() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Customerform" element={<Customerform />}></Route>
              <Route path="/Customerlist" element={<Customerlist />}></Route>
              <Route path="/Manufacturer" element={<Manufacturer />}></Route>
              <Route
                path="/Manufacturerlist"
                element={<Manufacturerlist />}
              ></Route>
              <Route path="/Productform" element={<Productform />}></Route>
              <Route path="/Productlist" element={<Productlist />}></Route>
              <Route
                path="/Createcontracts"
                element={<Createcontracts />}
              ></Route>
              <Route path="/Assingrule" element={<Assingrule />}></Route>
              <Route path="/Contractslist" element={<Contractslist />}></Route>
              <Route path="/Charts" element={<Charts />}></Route>
              <Route path="/Tables" element={<Tables />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
