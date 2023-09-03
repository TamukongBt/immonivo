import React, { useState, useEffect } from "react";
import { motion, AnimateSharedLayout, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";
import CustomCursor from './components/CustomCursor';

// Style Imports
import "./scss/main.scss";
// Component Imports
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";
import Back2Top from "./components/Back2Top";
import Section from "./components/Section";
import Services from "./components/Services";
import Newsletter from "./components/Newsltter";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);


  useEffect(() => {
    loading
      ? document.querySelector("body")?.classList.add("loading")
      : document.querySelector("body")?.classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <div
              style={{
                cursor: 'none',
              }}

            >
              <Back2Top />
              <CustomCursor />
              <Header />
              <Banner />
              {!loading && (
                <div className="transition-image final">
                  <motion.img
                    transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.0 }}
                    src={process.env.PUBLIC_URL + `/images/image-3.jpg`}
                    layoutId="main-image-1"
                    style={{ scale }}

                  />
                </div>
              )}
              <div className="w-full bg-gray-900 py-20">
                <Services />
              </div>
              <Section image={'url( )'} />
              <div className="relative"></div>
              <div className="w-full bg-gray-900 py-20">
              <Newsletter />
              <Footer />
              </div>
              
            </div>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
    
  );
}

export default App;
