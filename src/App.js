import React from "react";
import './App.css'
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Privatecomponent from "./Components/Privatecomponent";
import Login from "./Components/Login";
import Addproduct from "./Components/Addproduct";
import Productlist from "./Components/Productlist";
import Updateproduct from "./Components/Updateproduct";
import Footer from "./Components/Footer";
import Pagenotfound from "./Components/Pagenotfound";
import Profile from "./Components/Profile";

function App() {
  return (
    <div>
      {/* <h1>E-Dashboard</h1> */}
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<Privatecomponent />} >
            <Route path="/" element={<Productlist />} />
            <Route path="/add" element={<Addproduct />} />
            <Route path="/update/:id" element={<Updateproduct />} />
            <Route path="/logout" element={<h1>Logout Product</h1>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="./*" element={<Pagenotfound />} />

          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Pagenotfound />} />

        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
