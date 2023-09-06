import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import CustomCursor from '../components/CustomCursor';
// Style Imports
import "../scss/main.scss";
// Component Imports
import Banner from "../components/Banner";
import Section from "../components/Section";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home() {
  const [loading, setLoading] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const [isOver, setIsOver] = useState(true);


  useEffect(() => {
    loading
      ? document.querySelector("body")?.classList.add("loading")
      : document.querySelector("body")?.classList.remove("loading");
  }, [loading]);

  return (
    <>

      <CustomCursor border={isOver ? "5px double white" : '5px double black'} />
      {!loading && (
        <div className="transition-image final">
          <motion.img
            transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.0 }}
            src={process.env.PUBLIC_URL + `../images/landing.jpg`}
            layoutId="main-image-1"
            style={{ scale }}
          />
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.4,
            }}
            className="absolute  top-0 left-0 w-full h-full  flex flex-col justify-center items-center text-center text-dark text-4xl md:text-6xl"
          >
            <h2
              className=" font-bold text-4xl md:text-8xl"
            >Welcome To Immonivo</h2>
            <span >
              We are a centralized platform for real estate and construction with a multiple of oyther exciting goods and services
            </span>
          </motion.div>
        </div>
      )}
      <motion.div className="w-full m-0 text-white bg-black pT-36"
        onHoverStart={() => setIsOver(true)}
        onHoverEnd={() => setIsOver(false)}
        whileHover={{}}>
        <Banner />
      </motion.div>

      <div className="w-full bg-dark py-20">
        <Services />
      </div>
      <Section image={'url( )'} />
      <motion.div className="w-full m-0 text-white bg-black py-36"
        onHoverStart={() => setIsOver(true)}
        onHoverEnd={() => setIsOver(false)} >
        <Footer />
      </motion.div>


    </ >

  );
}

export default Home;
