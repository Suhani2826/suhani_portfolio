
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Home } from "lucide-react";

export default function SuhaniMakkarPortfolio() {
  const [page, setPage] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(introTimer);
  }, []);

  const handleNext = () => setPage((prev) => (prev === 3 ? 1 : prev + 1));
  const handlePrevious = () => setPage((prev) => (prev === 1 ? 3 : prev - 1));

  if (showIntro) {
    return (
      <div className="bg-black flex items-center justify-center min-h-screen">
        <h1 className="text-red-600 text-6xl font-bold animate-pulse">SUHANI MAKKAR</h1>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-[#141414]">
        <div className="flex items-center space-x-4">
          <Home className="text-white w-6 h-6" />
          <h1 className="text-red-600 text-3xl font-bold">SUHANI MAKKAR</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="text-white w-6 h-6" />
          <Button className="bg-red-600 text-white hover:bg-red-700" onClick={handlePrevious}>Previous</Button>
          <Button className="bg-red-600 text-white hover:bg-red-700" onClick={handleNext}>Next</Button>
        </div>
      </header>

      <footer className="text-center text-gray-400 mt-6 pb-4">Contact: suhani2826@gmail.com | +91 9877836217</footer>
    </div>
  );
}
