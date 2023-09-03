import React, { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



function Services() {
    const [isHovered, setIsHovered] = useState(false);
    const slides = [
        { src: './images/web.webp', text: 'Text for slide 1' ,link: 'https://www.google.com'},
        { src: './images/social.webp', text: 'Text for slide 2', link: 'https://www.google.com' },];
    // Add more slides as needed
    return (
        <div style={{
            height: '100vh',
            width: '90%',
            margin: '0 auto',
            marginBottom: '5em',
            paddingBottom: '8em',
        }}>
            <motion.h1 className="text-start title-font my-6 ml-4 text-white underline pb-5 text-5xl md:text-7xl font-bold "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }} >featured services</motion.h1>
            <Carousel
                infiniteLoop
                autoPlay
                interval={5000}
                transitionTime={1000}
                dynamicHeight={false}
                swipeable={true}
                emulateTouch={true}
                showIndicators={false}
                showStatus={false}
            >
                {slides.map((slide) => (
                    <div>
                        <>
                            <motion.div
                                className="absolute w-full h-full bg-black opacity-40 z-10"
                                whileHover={{ opacity: 0, backgroundColor: "transparent" }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)} />
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                // whileHover={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative bg-cover bg-center h-screen"
                                style={{ backgroundImage: `url(${slide.src})` }}
                            >
                                <motion.div
                                    style={{
                                        opacity: isHovered ? 0 : 1,
                                    }}
                                    className="absolute bottom-0 mb-20 ml-10 text-white text-4xl z-10 text-start "
                                >
                                    <div className="text-start ">
                                        <h1 className="text-start text-5xl font-bold">{slide.text}</h1>
                                        {/* <h2 className="text-2xl font-bold">{slide.subtitle}</h2> */}
                                    </div>
                                    {slide.text}
                                </motion.div>
                                <motion.button
                                    className="absolute bottom-0 right-0 mb-20  z-10 px-32  py-8 bg-gray-900 text-white  cursor-pointer hover:bg-slate-700 transition-colors duration-100  text-3xl rounded-s-md"
                                >
                                    Order Now
                                </motion.button>
                            </motion.div>
                        </>
                        <motion.div
                            animate={{ x: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute right-10 z-20 bottom-20 text-white text-6xl z-50 h-full"
                        >
                            &#8594;
                        </motion.div>
                    </div>
                ))}
            </Carousel>
        </div>


    );
};

export default Services;