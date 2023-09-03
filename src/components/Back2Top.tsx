import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Back2Top = () => {
    const [isAtTop, setIsAtTop] = useState(true);

    const checkScrollPosition = () => {
        if (window.pageYOffset > 10) {
            setIsAtTop(false);
        } else {
            setIsAtTop(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);
        return () => window.removeEventListener('scroll', checkScrollPosition);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <motion.button
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                fontSize: '2.5em'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={isAtTop ? scrollToBottom : scrollToTop}
            
        >
            <motion.div className='bg-white rounded-full p-5 z-10'>
                {isAtTop ? <FaChevronDown /> : <FaChevronUp />}
            </motion.div>
            {/* {isAtTop ? 'Scroll Down' : 'Back to Top'} */}
        </motion.button>
    );
};

export default Back2Top;