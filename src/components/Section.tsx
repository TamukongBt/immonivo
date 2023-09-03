import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


function Section({ image }: {  image: string }) {
  const services = [
    { name: "Business Folders", icon: "🌐", image: "./images/folder.jpg" },
    { name: "Websites", image: "./images/web.webp" },
    { name: "Customized Professional Websites", image: "./images/web.jpg" },
    { name: "Photography", image: "./images/photo.jpg" },
    { name: "Digital Marketing", image: "./images/social.webp" },
    { name: "Video Editing", image: "./images/video.jpg" },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true, // Change to false if you want the animation to trigger again whenever it comes into view
  });


  return (
    <div className="relative">
      <motion.div
        style={{
          backgroundImage: image,
          backgroundSize: 'cover',
          height: '100vh',
          width: '80%',
          margin: '0 auto',
          marginTop: '8em',
        }}
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <motion.h1 className=" text-end underline  title-font my-6 text-5xl md:text-7xl font-bold "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }} >featured products</motion.h1>
        <div className="flex flex-wrap -m-4">
          {services.map((service, index) => (
            <motion.div
              ref={ref}
              className="lg:w-1/3 sm:w-1/2 p-8 w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3, delay: 0, ease: "easeInOut" } }} >
              <div className="flex relative">
                <div className="z-10 w-full border-4 border-gray-200 bg-white text-center rounded-lg  overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full  mb-4 rounded object-cover h-80" />
                  <div className="px-8 py-10 ">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">PRODUCT</h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{service.name}</h1>
                    {/* <p className="leading-relaxed">Card content goes here...</p> */}
                    <motion.button
                      // whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      className="px-9 py-3 bg-gray-900 text-white  cursor-pointer hover:bg-slate-700 transition-colors duration-100  text-xl"
                    >
                      Order Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
}





export default Section;
