import "./App.css";
import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import Services from "./MyComponents/Services";
import SDI from "./MyComponents/SDI";
import OurTeam from "./MyComponents/OurTeam";
import ContactUs from "./MyComponents/ContactUs";
import LogIn from "./MyComponents/LogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    // Remove the base name to start development server it will show white screen also after updateing the code do write the basename again
    <Router basename="Ses-Solution">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sdi" element={<SDI />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
