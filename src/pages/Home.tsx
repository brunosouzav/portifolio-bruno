import React, { useState, useEffect } from 'react';
import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { CometCursor } from "@/components/ui/comet-cursor";
import { Navbar } from "@/components/ui/navbar";
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const words = ["Software Engineer", "Designer", "Editor de Videos"];

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const typeEffect = () => {
      const currentWordText = words[currentWord];
      
      if (isDeleting) {
        setDisplayText(currentWordText.substring(0, currentIndex - 1));
        currentIndex--;
      } else {
        setDisplayText(currentWordText.substring(0, currentIndex + 1));
        currentIndex++;
      }

      if (!isDeleting && currentIndex === currentWordText.length) {
        isDeleting = true;
        timeout = setTimeout(typeEffect, 1000);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentWord((prev) => (prev + 1) % words.length);
        timeout = setTimeout(typeEffect, 500);
      } else {
        const speed = isDeleting ? 50 : 100;
        timeout = setTimeout(typeEffect, speed);
      }
    };

    timeout = setTimeout(typeEffect, 100);

    return () => clearTimeout(timeout);
  }, [currentWord]);

  return (
    <div className="h-full w-full relative">
      <Navbar />
      <CometCursor />
      <Spotlight
        className="fixed inset-0"
        fill="white"
      />
      <Card className="w-full h-full bg-black/[0.96] relative overflow-hidden border-0">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left content */}
          <div className="flex-1 p-4 md:p-8 relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4"
            >
              Bruno Souza
            </motion.h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
              <span className="inline-block min-w-[200px] h-8">
                <span className="text-white font-semibold text-transition text-glow">
                  {displayText}
                  <span className="inline-block w-1 h-6 bg-white animate-pulse ml-1"></span>
                </span>
              </span>
            </p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative min-h-[300px] md:min-h-0">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home; 