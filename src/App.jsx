import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./styles/globals.css";
import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <div id="main-content-wrapper" className="transition-all duration-700 ease-in-out">
      <AppRoutes />
    </div>
  </BrowserRouter>
);

export default App;
