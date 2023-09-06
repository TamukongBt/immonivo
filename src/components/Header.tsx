import React, { useState } from "react";
import { motion } from "framer-motion";
import Overlay from "./Overlay";
import Button from "./Button";
// import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";

function Header() {
  // const location = useLocation(); 
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
        <div className="logo teko">Immonivo</div>
        <nav className="nav  ">
          <ul className="flex flex-row font-medium p-4 md:p-0 mt-4 border right-0   md:flex-row md:space-x-8  ">
            <li className={window.location.pathname === "/"? 'contact':''} >
              {/* <Link to="/">Home</Link> */}
              <a href="/"  >Home</a>
              
            </li>
            <li className={window.location.pathname === "/services"? 'contact':''}>
              <a href="/services">Our Services and Products</a>
            </li>
            <li className={window.location.pathname === "/partners"? 'contact':''}>
              <a href="/partners">Our Models</a>
            </li>
            <li className={window.location.pathname === "/about"? 'contact':''}>
              <a href="/about">About Us</a>
            </li>
            <li className={window.location.pathname === "/contact"? 'contact':''}>
              <a href="/contact">Contact Us</a>
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
