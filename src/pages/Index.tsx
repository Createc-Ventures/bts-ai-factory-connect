
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Products from "@/components/Products";
import Careers from "@/components/Careers";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", revealElements);
    revealElements(); // Call once to check for elements in view on load
    
    return () => window.removeEventListener("scroll", revealElements);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <div className="reveal">
        <Products />
      </div>
      
      <div className="reveal">
        <Services />
      </div>
      
      <div className="reveal">
        <div className="py-12 bg-btsai-blue/5">
          <div className="container mx-auto px-4 text-center">
            <img 
              src="/lovable-uploads/5a3c2604-cf41-477d-bdb3-9404ae4cd5f0.png" 
              alt="BTS AI Logo" 
              className="h-20 mx-auto mb-6"
            />
            <h2 className="text-3xl font-bold text-btsai-blue mb-4">Transforming Manufacturing with AI</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              BTS AI combines cutting-edge technology with deep industry expertise to drive efficiency, 
              transparency, and innovation in manufacturing operations.
            </p>
          </div>
        </div>
      </div>
      
      <div className="reveal">
        <About />
      </div>
      
      <div className="reveal">
        <Careers />
      </div>
      
      <div className="reveal">
        <ContactSection />
      </div>
      
      <footer className="bg-btsai-blue text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <img 
                src="/lovable-uploads/5a3c2604-cf41-477d-bdb3-9404ae4cd5f0.png" 
                alt="BTS AI Logo" 
                className="h-10 mr-2"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">© {new Date().getFullYear()} BTS AI Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
