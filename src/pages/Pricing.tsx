import React, { useState } from 'react';
import { motion } from "framer-motion";
import CustomCursor from '../components/CustomCursor';
import Footer from "../components/Footer";
import PricingTable from '../components/PricingTable';
import Banner from '../components/Banner';


const Contact = () => {
    const [isOver, setIsOver] = useState(false);
    return (
        <div className='w-full'>
            <CustomCursor border={isOver ? "5px double white" : '5px double black'} />

            <motion.div
                className='relative w-full h-screen justify-center items-center'
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div >
                    <div className=" w-full mb-1 ">
                        <section className="">
                            <div className="px-8 mx-auto  text-center ">
                                <h2 className="mb-4 text-8xl tracking-tight font-extrabold text-center text-slate-900">Website Design</h2>
                                <p className="mb-16 font-light text-center text-2xl/loose">We have a price for all websites just tell us what you are in search of and we got you covered</p>
                                <PricingTable />
                            </div>
                        </section>
                    </div>
                </div>
            </motion.div>
            <div className='md:block'>
                < motion.div
                    className='absolute  top-0 right-10 -z-20 flex items-center justify-center' initial={{ rotate: 30 }}>
                    <Banner />
                </motion.div>
                < motion.div
                    style={{ right: "-200px" }}
                    className='absolute w-1/2  overflow-hidden bottom-0 -right-0  -z-10 flex items-center justify-center' initial={{ rotate: 90 }}>
                    <Banner />
                </motion.div>
            </div>

            <motion.div className="w-full m-0 text-white bg-black py-36"
                onHoverStart={() => setIsOver(true)}
                onHoverEnd={() => setIsOver(false)} >
                <Footer />
            </motion.div>

        </div >
    );
}

export default Contact;