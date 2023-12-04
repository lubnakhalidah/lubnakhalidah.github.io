import React from "react";
import Navbar from "../../components/Navbars";
import Footer from "../../components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-8xl font-bold mb-8 text-center">Coming Soon</h1>
      </div>

      <div className="absolute bottom-0 w-full text-center bg-gray-300">
        <Footer />
      </div>
    </div>
  );
}
