import React, { useState, useEffect, FC } from "react";
import { motion } from "framer-motion";


function Section() {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  });
  // Define the services as an array of objects
  const services = [
    { name: "Web Design", icon: "🌐" },
    { name: "Graphic Design", icon: "🎨" },
    { name: "SEO", icon: "🔎" },
    { name: "Social Media", icon: "📱" },
    { name: "Content Writing", icon: "📝" },
    { name: "Video Editing", icon: "🎥" },
  ];

  // Define the animation variants for the grid items
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: any) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3, // stagger the animation by index
        type: "spring", // use a spring animation
        stiffness: 100, // adjust the stiffness
        damping: 10, // adjust the damping
      },
    }),
  };

  return (
    <motion.div className="banner container mx-auto my-8 h-full" >
      <div className="text-7xl text-center font-bold"> Our Services</div>
      {/* grid with hover effect */}
      <div className="flex flex-wrap ">

        {services.map((service, i) => (
          <motion.div
            key={i}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
            custom={i} // pass the index as a custom prop
            initial="hidden" // set the initial state to hidden
            animate="visible" // set the animate state to visible
            variants={variants} // pass the variants object
          >
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
        ))}
      </div>



    </motion.div>
  );
}





export default Section;
