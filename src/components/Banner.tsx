import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Prop Types
interface AnimatedLetterProps {
  title: string;
  disabled?: boolean;
}

interface BannerProps {
  title: string;
  playMarquee?: boolean;
}

// Framer-Motion Variants
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

// Main Export React Component
function Banner() {
  const [, setPlayMarquee] = useState(false);
  

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  });

  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title={"Nous"} />
      <BannerRowCenter title={"Sommes"} playMarquee={true} />
      <BannerRowBottom title={"Immonivo"} />
    </motion.div>
  );
}

// AnimatedLetters Sub-Component
const AnimatedLetters = ({ title, disabled }: AnimatedLetterProps) => (
  <motion.span
    className="row-title -z-10"
    variants={disabled ? {} : banner}
    initial="initial"
    animate="animate"
  >
    {title.split("").map((letter) => (
      <motion.span className="row-letter" variants={disabled ? {} : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

// BannerRowTop Sub-Component
const BannerRowTop = ({ title }: BannerProps) => {
  return (
    <div className="banner-row">
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className="row-col"
      >
        <span className="row-message">
          We are a centralized platform for real estate and construction with a multiple of oyther exciting goods and services
        </span>
      </motion.div>
    </div>
  );
};

// BannerRowBottom Sub-Component
const BannerRowBottom = ({ title }: BannerProps) => {
  return (
    <div className="banner-row center border-3 border-s-white" >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
      >
      
      </motion.div>
      <AnimatedLetters title={title}  />
    </div>
  );
};

// BannerRowCenter Sub-Component
const BannerRowCenter = ({ title, playMarquee }: BannerProps) => {
  return (
    <div className={`banner-row marquee ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className="marquee__inner"
      >
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

export default Banner;
