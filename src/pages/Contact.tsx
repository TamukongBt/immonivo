import React, { useState  } from 'react';
import { motion } from "framer-motion";
import CustomCursor from '../components/CustomCursor';
import Footer from "../components/Footer";


const Contact = () => {
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
                    <div className="md:w-1/2 mb-1 py-44  ">
                        <h3 className=" pb-0 mb-0  teko uppercase text-8xl font-bold text-center">We Are A Phone </h3>
                        <h3 className=" pt-0 mt-0 teko uppercase heading font-bold text-center">CALL AWAY </h3>
                        <p className="text-center pt-7 font-bold uppercase text-red-500 text-3xl mb-5">Book An Appointment</p>
                        <p className="text-center  mt-7 font-light text-4xl mb-5">Tel: +237 651 076 194</p>
                        <p className="text-center  mt-7 font-light text-4xl mb-5">Email: contact@immonivo.com</p>
                        <p className="text-center  mt-7 font-light text-4xl mb-5">Location: Bokwai, Quebec</p>
                    </div>

                    <div style={{ borderLeft: '1px solid #fff', height: "70%" }}></div>
                    <div className=" md:w-1/2 mb-1 py-16  ">
                        <section className="">
                            <div className="py-8  px-32 text-5xl mx-auto max-w-screen-md">
                                <h2 className="mb-4 teko text-8xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
                                <p className="mb-16 font-light text-center text-2xl/loose">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                                <form action="#" className="space-y-8">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                        <input type="email" id="email" className="shadow-sm bg-transparent  border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="briantbrian4@gmail.com" required/>
                                    </div>
                                    <div>
                                        <label htmlFor='subject' className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                        <input type="text" id="subject" className="block p-3 w-full text-2xl text-gray-900 bg-transparent  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                        <textarea id="message" rows={5} className="block p-2.5 w-full text-2xl text-gray-900 bg-transparent  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                    </div>
                                    <button type="submit" className="py-3 px-5 text-2xl font-medium text-center text-white rounded-full border w-full  border-stone-50 bg-red-600 ">Send message</button>
                                </form>
                            </div>
                        </section>
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

export default Contact;