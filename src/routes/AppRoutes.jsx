import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import InvestorPitch from "../pages/InvestorPitch";
import WhoWeServe from "../components/home/WhoWeServe";
import WaitlistForm from "../pages/WaitlistForm";
import ThankYou from "../pages/ThankYou";
import Features from "../pages/Features";
import About from "../pages/About";

function AppRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/invest" element={<InvestorPitch />} />
    <Route path="/who-we-serve" element={<WhoWeServe />} />
    <Route path="/join/:type" element={<WaitlistForm />} />
    <Route path="/thank-you" element={<ThankYou />} />
    <Route path="/features" element={<Features />} />
    <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
