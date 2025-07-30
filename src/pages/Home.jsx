import { motion, AnimatePresence } from "framer-motion";
import Archer from "../images/uva_heesara_2.JPG";
import Archer2 from "../images/uva_heesara_1.JPG";
import Archer3 from "../images/test4.jpg";
import Archer4 from "../images/uva_heesara_3.JPG"; 
import Archer5 from "../images/uvahessara-group.JPG"; 

// Import portrait images for mobile
import ArcherMobile from "../images/test1-mobile.jpg"; // You'll need to add these mobile versions

import Archer3Mobile from "../images/test3-mobile.jpg"; // orientation (9:16 ratio ideally) // Add more as needed
import { useState, useEffect } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Desktop and Mobile image pairs
  const imageSet = [
    { desktop: Archer, mobile: Archer5 },
    { desktop: Archer2, mobile: Archer2 },
    { desktop: Archer3, mobile: Archer3Mobile },
    { desktop: Archer4, mobile: Archer4 },
    { desktop: Archer5, mobile: ArcherMobile },
  ];

  // Start autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === imageSet.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1.05,
      transition: {
        x: {
          type: "spring",
          stiffness: 200,
          damping: 25,
        },
        opacity: {
          duration: 0.5,
        },
        scale: {
          duration: 8,
          ease: "easeInOut",
        },
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
      transition: {
        x: { duration: 0.5 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === imageSet.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? imageSet.length - 1 : prevIndex - 1;
    });
  };

  const breathingAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.02, 1],
      opacity: [1, 0.9, 1],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Gradient Overlay - moved above content but below pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[2]" />

      {/* Background Carousel with zoom effect */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 25 },
            opacity: { duration: 0.5 },
            scale: { duration: 8, ease: "easeInOut" },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${
              isMobile
                ? imageSet[currentIndex].mobile
                : imageSet[currentIndex].desktop
            })`,
            backgroundSize: "cover",
            backgroundPosition: isMobile ? "center center" : "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </AnimatePresence>

      {/* Content Section - Adjusted for better mobile visibility */}
      <div className="relative z-[3] h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <motion.h1
            className="text-3xl md:text-7xl font-bold mb-4 md:mb-6"
            initial="initial"
            animate="animate"
            variants={breathingAnimation}
          >
            Welcome to Archery Club of Uva
          </motion.h1>

          <motion.p
            className="text-lg md:text-3xl max-w-2xl mx-auto px-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Discover the art of precision and discipline through archery
          </motion.p>
        </motion.div>        {/* Simple indicator without scroll animation */}
        <motion.div
          className="flex flex-col items-center absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="text-white/80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:w-8 md:h-8"
            >
              <path d="M7 13l5 5 5-5" />
              <path d="M7 6l5 5 5-5" />
            </svg>
          </div>
          <span className="text-xs md:text-sm text-white/80 mt-2">
            Let's Shoot
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
