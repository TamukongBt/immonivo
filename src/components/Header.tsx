import React, { useState } from "react";
import { motion } from "framer-motion";
import Overlay from "./Overlay";
import Button from "./Button";
// import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="header w-full"
    >
      <TopHeader />
      <div className="header-inner">
        <div className="logo">Imonivo</div>
        <nav className="nav  ">
          <ul className="flex flex-row font-medium p-4 md:p-0 mt-4 border right-0   md:flex-row md:space-x-8  ">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/services">Our Services and Products</a>
            </li>
            <li>
              <a href="/partners">Our Models</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li className="contact">
              <a href="/about">Contact Us</a>
            </li>
          </ul>
        </nav>


        <Button navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Overlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      </div>
    </motion.div>
  );
}

export default Header;
