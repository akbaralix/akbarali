import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../pages/home/home/home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
