import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../pages/home/home/home";
import About from "../pages/home/about/about";
import Projects from "../pages/home/projects/projects";
import Contact from "../pages/home/contact/contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/haqimda" element={<About />} />
      <Route path="/loyihalar" element={<Projects />} />
      <Route path="/aloqa" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
