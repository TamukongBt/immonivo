import React from "react";

const Button = ({ navbarOpen, setNavbarOpen }: { navbarOpen: boolean; setNavbarOpen: (value: boolean) => void }) => {

  return (
    <>
      <div
        className=" flex top-0 right-0 z-20 relative w-20 h-20 text-white focus:outline-none"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Button;