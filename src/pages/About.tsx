import React, { useState, useEffect } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";
import CustomCursor from '../components/CustomCursor';
import CountUp from '../components/CountUp';
import Footer from "../components/Footer";


const About = () => {
    const [isOver, setIsOver] = useState(false);
    return (
        <div className='w-full'>
            <CustomCursor border={isOver ? "5px double white" : '5px double black'} />
            <motion.div className='h-auto py-16'>
                <div className="flex grid-cols-2 w-full h-1/2 justify-center items-center">
                    <div className=" w-1/2 mb-1 py-16  ">
                        <h3 className=" pb-0 mb-0  teko uppercase text-6xl md:heading font-bold text-center">Our Goal Is </h3>
                        <h3 className=" pt-0 mt-0 teko uppercase heading font-bold text-center">Excellence </h3>
                        <p className="text-center pt-0 mt-0 text-3xl mb-5">Grow your business with our agency</p>
                    </div>
                    <div className=" w-1/2">
                        <motion.img
                            src='../images/about1.png'
                            animate={{ x: ["0px", "8px", "0px"] }}  // Add this line
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        <motion.img

                            className='absolute top-64 z-50 w-2/5'
                            src='../images/about2.png'
                            animate={{ x: ["0px", "8px", "0px"] }}  // Add this line
                            transition={{ duration: 1, repeat: Infinity, ease: 'easeIn' }} />
                    </div>
                </div>
            </motion.div>

            <motion.div
                className='relative parralax flex w-full h-1/2 justify-center items-center'
                style={{
                    backgroundImage: "url('../images/image-1.jpg')",
                    height: '60em'
                }}
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                onHoverStart={() => setIsOver(true)}
                onHoverEnd={() => setIsOver(false)}
            >
                <motion.div
                    className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center"


                >
                    <div className="text-center text-white px-4">
                        <h2 className="text-5xl md:text-9xl font-bold">Grow your business with our agency</h2>
                        <p className='text-3xl pt-8  md:pt-16 md:font-bold md:text-4xl'> For more than 5 years, Immonivo has been helping companies achieve their goals and brand image.</p>
                        <p className='text-xl/normal md:text-3xl/relaxed md:w-3/4  mx-auto text-center'> Over the years, we've worked with companies and brand new startups. We help ambitious businesses like yours
                            generate more profits by building brand awareness, driving web traffic, connecting with customers, and increasing overall sales. Call.</p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div className='h-auto py-16 countup text-center w-full h-1/2 justify-center items-center'>
                <motion.h1
                    className='text-7xl teko text-blue-600 py-10 font-bold'>We Are Reliable</motion.h1>
                <div className="flex grid-rows-3 py-8 text-slate-600">
                    <div className="w-1/4">
                        <CountUp end={87} time={2000} />
                        <p className='md:font-bold md:text-4xl text-lg'>Ambassadors</p>
                    </div>
                    <div className="w-1/4">
                        <CountUp end={64} time={2000} />
                        <p className='md:font-bold md:text-4xl text-lg' >Happy Clients</p>
                    </div>
                    <div className="w-1/4">
                        <CountUp end={50} time={2000} />
                        <p className='md:font-bold md:text-4xl text-lg' >Team Advisors</p>
                    </div>
                    <div className="w-1/4">
                        <CountUp end={65} time={2000} />
                        <p className='md:font-bold md:text-4xl text-lg' >Completed Projects</p>
                    </div>

                </div>

            </motion.div>

            <motion.div className='relative parralax flex w-full h-1/2 justify-center items-center'
                style={{
                    backgroundImage: "url('../images/image-1.jpg')",
                    height: '60em'
                }}
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                onHoverStart={() => setIsOver(true)}
                onHoverEnd={() => setIsOver(false)}
            >
                <motion.div
                    className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center"
                >
                    <div className="text-center text-white px-4">
                        <h2 className="text-9xl font-bold teko">Its Nothing But The Best</h2>
                        <p className='md:pt-16 font-bold md:text-4xl text-2xl'> For more than 5 years, Immonivo has been helping companies achieve their goals and brand image.</p>
                        <p className=' py-7 text-3xl/relaxed w-3/4  mx-auto text-center'> Over the years, we've worked with companies and brand new startups. We help ambitious businesses like yours
                            generate more profits by building brand awareness, driving web traffic, connecting with customers, and increasing overall sales. Call.</p>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div className="w-full m-0 text-white bg-black py-36"
                onHoverStart={() => setIsOver(true)}
                onHoverEnd={() => setIsOver(false)} >
                <Footer />
            </motion.div>

        </div >
    );
}

export default About;