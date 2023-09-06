import React, { useState } from 'react';
import { motion } from "framer-motion";
import CustomCursor from '../components/CustomCursor';
import Footer from "../components/Footer";


const NotFound = () => {
    const [isOver, setIsOver] = useState(false);
    return (
        <div className='w-full'>
            <CustomCursor border={isOver ? "5px double white" : '5px double black'} />

            <motion.div
                className='relative parralax bg-black text-white flex w-full h-screenjustify-center items-center'
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                onHoverStart={() => setIsOver(true)}
                onHoverEnd={() => setIsOver(false)}
            >
                <div className="md:flex grid-cols-1 md:grid-cols-2  w-full h-1/2 justify-center items-center">
                    <div className="w-full mb-1 py-44  ">
                        <h3 className=" pb-0 mb-0  teko uppercase text-8xl font-bold text-center">Page Does Not Exist</h3>
                        <h3 className=" pt-0 mt-0 teko uppercase heading font-bold text-center">WE CALL IT 404</h3>
                        <p className="text-center pt-7 font-bold uppercase text-blue-500 text-3xl mb-5"><a href="/">Let's Go Home</a></p>
                        <p className="text-center  mt-7 font-light text-4xl mb-5">Tel: +237 651 076 194</p>
                        <p className="text-center  mt-7 font-light text-4xl mb-5">Email: contact@immonivo.com</p>
                        <p className="text-center  mt-7 font-light text-4xl mb-5">Location: Bokwai, Quebec</p>
                    </div>

                </div>
            </motion.div>
            <motion.div className="w-full m-0 text-white bg-black py-36"
                onHoverStart={() => setIsOver(true)}
                onHoverEnd={() => setIsOver(false)} >
                <Footer />
            </motion.div>

        </div >
    );
}

export default NotFound;