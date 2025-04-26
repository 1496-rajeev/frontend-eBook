import React from "react";
import Navbar from "../../components/navbar";
import HeroSection from "../../components/herosection";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
