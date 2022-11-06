import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DetailDoctor from "./pages/DetailDoctorPage";

export default function App() {
  return (
    <Router>
      <div className="bg-secondary">
        <Navbar />
        <div className="mt-14 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail-doctor/:id" element={<DetailDoctor />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
