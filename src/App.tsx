import React, { useState, useEffect } from "react";
import { motion, AnimateSharedLayout, AnimatePresence,  } from "framer-motion";

// Style Imports
import "./scss/main.scss";


// Component Imports
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";
import Section from "./components/Section";

function App() {
  const [loading, setLoading] = useState(true);


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
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                  layoutId="main-image-1"
                />
              </div>
            )}
            {/* <Section /> */}
            <motion.div className="banner container mx-auto my-8 h-full" >
              <div className="text-7xl text-center font-bold"> Our Services</div>
              {/* grid with hover effect */}
              <div className="flex flex-wrap ">

                <motion.div
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
                  initial="hidden" // set the initial state to hidden
                  animate="visible" // set the animate state to visible
                >
                  <div className="w-100 h-full">
                    <motion.img
                      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                      src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                      className="w-100"
                    />
                  </div>
                  <div className="mx-auto h-50">
                    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                      <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                          UI/UX Review Check
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                          The place is close to Barceloneta Beach and bus stop just 2 min by walk
                          and near to "Naviglio" where you can enjoy the main night life in
                          Barcelona.
                        </p>
                      </div>
                      <div className="p-6 pt-0">
                        <button
                          className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </div>



            </motion.div>



          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
