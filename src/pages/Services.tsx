import React, { useState } from 'react';
import { motion } from "framer-motion";
import CustomCursor from '../components/CustomCursor';
import Footer from "../components/Footer";
import ProductTable from '../components/ProductTable';
import Banner from '../components/Banner';


const Services = () => {
    const [isOver, setIsOver] = useState(false);
    return (
        <div className='w-full'>
            <CustomCursor border={isOver ? "5px double white" : '5px double black'} />

            <motion.div
                className='relative  flex w-full  justify-center items-center'
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className=" w-full h-1/2 justify-center items-center">
                    <div className=" mb-1   ">
                        <h3 className=" pb-0 mb-0  teko uppercase text-8xl font-bold text-center">Our Services </h3>
                        <p className="text-center py-7 font-light text-3xl mb-5">Take a look at the services we offer and the prices per service</p>

                        <div className="w-4/5 text-4xl mx-auto pb-5">
                            <ProductTable />
                        </div>
                        <div className='text-center upperccase mb-5'>* All Services are subject to tax and subsidiees and fluctuation in price changes </div>

                    </div>
                </div>
            </motion.div>
            <div className='md:block sm:hidden'>
                < motion.div
                    className='absolute sm:hidden top-0 right-10 -z-20 flex items-center justify-center' initial={{ rotate: 30 }}>
                    <Banner />
                </motion.div>
                < motion.div
                    style={{ right: "-300px" }}
                    className='absolute w-1/2 sm:hidden overflow-hidden bottom-0 -right-0  -z-10 flex items-center justify-center' initial={{ rotate: 90 }}>
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

export default Services;