import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./styles/globals.css";
import Navbar from "./components/layout/NavBar";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <AppRoutes />
  </BrowserRouter>
);

export default App;
