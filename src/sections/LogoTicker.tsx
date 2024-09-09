'use client';
import React from 'react';
import { motion } from 'framer-motion';
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";

const logos = [acmeLogo, apexLogo, celestialLogo, quantumLogo, pulseLogo, echoLogo];

export const LogoTicker = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mt-20">
        <div className="flex items-center">
          <h2 className="px-2 flex-shrink-0">Trusted by Innovative Teams</h2>
          <div className="flex-1 overflow-hidden">
            <motion.div 
              className="flex gap-14"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 20, 
                ease: "linear", 
                repeat: Infinity,
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <img src={logo.src} key={`${logo.src}-${index}`} className="h-6 w-auto" alt="Company logo" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};