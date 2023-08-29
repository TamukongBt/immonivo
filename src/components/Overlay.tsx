import React from "react";

const Overlay = ({ navbarOpen, setNavbarOpen }: { navbarOpen: boolean; setNavbarOpen: (value: boolean) => void }) => {

    return (
        <nav
            className={`bg-dark fixed flex top-0 left-0 w-full px-10 infront h-screen pt-24 bg-white transform delay-100 transition-all duration-300 ${navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                }`}
            onClick={() => {
                setNavbarOpen(false);
            }}
        >
            <ul className="w-full flex flex-col  ps-6  items-start text-dark ">
                <li className=" flex w-50 leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
                    <a
                        href="/"
                        className=" h-full w-full py-4 subpixel-antialiased text-7xl .text-gray-900"
                        onClick={() => {
                            setNavbarOpen(false);
                        }}
                    >
                        Home
                    </a>
                </li>
                <li className="flex w-50 leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
                    <a
                        href="/"
                        className=" h-full w-full py-4 text-7xl .text-gray-900"
                        onClick={() => {
                            setNavbarOpen(false);
                        }}
                    >
                        Our Services
                    </a>
                </li>
                <li className="flex w-50 leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
                    <a
                        href="/"
                        className=" h-full w-full py-4 text-7xl .text-gray-900"
                        onClick={() => {
                            setNavbarOpen(false);
                        }}
                    >
                        About Us
                    </a>
                </li>
                <li className="flex w-50 leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
                    <a
                        href="/"
                        className=" h-full w-full py-4 text-7xl .text-gray-900"
                        onClick={() => {
                            setNavbarOpen(false);
                        }}
                    >
                        Contact Us
                    </a>
                </li>
            </ul>
            <span className="underline ">menu</span>
            {/* COPYRIGHT TEXT AT FOOTER  */}
            <div className="absolute bottom-0 left-0 w-full py-4 px-10 text-center text-gray-700 text-xs font-medium tracking-wider">
                <p>© 2023 Immonivo</p>
            </div>


        </nav>

    );
}

export default Overlay;