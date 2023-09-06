// import necessary packages
import React from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (

        <motion.div className="w-full absolute bottom-auto bg-black " >
            <div className=" container w-4/5 text-ceter mx-auto transform ">
                <div className="grid-cols-2  flex  mx-auto  text-white">
                    <div className="w-1/2 text-4xl md:text-8xl md:p-24">
                        <h3 className="mb-1 pb-2 te teko uppercase  font-bold text-center">Get To US Now </h3>
                        <p className="text-center  mb-5">We are here to answer your queries </p>
                        <form className="text-center">
                            <input className="w-1/2  mr-4 my-3 text-gray-700 bg-transparent border p-8 border-stone-50 md:rounded-full text-3xl" type="email" placeholder="Your email address" />
                            <button className="w-100 px-8 text-3xl py-8 text-white bg-red-500 rounded-md" type="submit">GO</button>
                        </form>
                    </div>
                    <div className="w-1/2">
                        <div className="grid grid-cols-2 justify-items-start">
                            <div>
                                <h3 className="mb-4 text-3xl md:text-6xl teko">Where We Are</h3>
                                <div className="flex space-x-4 text-white">
                                    {/* You'll need to replace these with your actual social media links */}
                                    <a href="https://www.faceebook.com"><i className="text-white fab fa-facebook"></i></a>
                                    <a href="https://www.twitter.com"><i className="text-white fab fa-twitter"></i></a>
                                    <a href="https://www.instagram.com"><i className="text-white fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-4 text-3xl md:text-6xl teko">Quick Links</h3>
                                <ul className='list-none'>
                                    {/* You'll need to replace these with your actual page links */}
                                    <li className='mb-3'><a className='text-3xl font-light' href="/about">About Us</a></li>
                                    <li className='mb-3'><a className='text-3xl font-light' href="/contact">Contact Us</a></li>
                                    <li className='mb-3'><a className='text-3xl font-light' href="/privacy">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-stone-100 w-4/5 mx-auto' />
            <div className="  mx-auto px-20 py-7 md:grid-cols-2  text-white flex justify-between">
                <div>
                    <h3 className="mb-4 text-xl uppercase">Follow us</h3>
                    <div className="flex space-x-12">
                        {/* You'll need to replace these with your actual social media links */}
                        <a href="https://www.faceebook.com"><FontAwesomeIcon icon={faFacebook} className='text-3xl md:text-7xl' /> </a>
                        <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} className='text-3xl md:text-7xl' /></a>
                        <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} className='text-3xl md:text-7xl' /></a>
                    </div>
                </div>
                <div className='flex text-center items-center '>
                   <motion.span className="md:text-4xl">© {new Date().getFullYear()} Immonivo. All rights reserved.</motion.span>
                </div>

            </div>
        </motion.div>
    );
}

// export the component
export default Footer;