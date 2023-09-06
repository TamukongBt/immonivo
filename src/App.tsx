import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { motion, AnimateSharedLayout, AnimatePresence, } from "framer-motion";

// Style Imports
import "./scss/main.scss";
// Component Imports
import Header from "./components/Header";
import Loader from "./components/Loader";
import Back2Top from "./components/Back2Top";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";


function App() {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        loading
            ? document.querySelector("body")?.classList.add("loading")
            : document.querySelector("body")?.classList.remove("loading");
    }, [loading]);

    return (
        <AnimateSharedLayout>
            <AnimatePresence>
                {loading ? (
                    <motion.div key="loader">
                        <Loader setLoading={setLoading} />
                    </motion.div>
                ) : (
                    <div
                        style={{
                            cursor: 'none',
                        }}>
                        <Back2Top />
                        <Header />
                        <Router>
                            <Routes>
                                <Route path="/"  Component={Home} />
                                <Route path="/about" Component={About} />
                                <Route path="/contact" Component={Contact} />
                                <Route path="/services" Component={Services} />
                                <Route path="/pricing" Component={Pricing} />
                                <Route path="*" Component={NotFound} />
                            </Routes>
                        </Router>
                       
                    </div>
                )}
            </AnimatePresence >
        </AnimateSharedLayout >
    );
}

export default App;