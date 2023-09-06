import React  from "react";
import { motion } from "framer-motion";
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';




function Services() {
    const slides = [
        { src: './images/web.webp', text: 'Text for slide 1', link: 'https://www.google.com', id: 1, description: 'This is a description' },
        { src: './images/social.webp', text: 'Text for slide 2', link: 'https://www.google.com', id: 2, description: 'This is a description' },
        { src: './images/web.webp', text: 'Text for slide 1', link: 'https://www.google.com', id: 3, description: 'This is a description' },
        { src: './images/social.webp', text: 'Text for slide 2', link: 'https://www.google.com', id: 4, description: 'This is a description' },
        { src: './images/web.webp', text: 'Text for slide 1', link: 'https://www.google.com', id: 5, description: 'This is a description' },
        { src: './images/social.webp', text: 'Text for slide 2', link: 'https://www.google.com', id: 6, description: 'This is a description' },
    ];
    // Add more slides as needed

    const [activeId, setActiveId] = React.useState<number>(1);

    const onClick = (id: number) => setActiveId(id);

    return (
        <div className="py-8">
             <motion.h1 className=" ml-36 text-start underline teko  title-font my-6 text-8xl md:text-8xl font-bold "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }} >featured products</motion.h1>
            <div className="containers  mx-auto h-auto" >
                
                {slides.map(service => (
                    <div
                        key={service.id}
                        className={`panel ${activeId === service.id ? "active" : ""}`}
                        onClick={() => onClick(service.id)}
                        style={{ backgroundImage: `url(${service.src})` }}
                    >
                        <motion.div
                            className={`absolute inset-0 rounded-2xl  bg-opacity-25 flex items-center justify-center ${activeId === service.id ? "bg-gradient-to-t from-black" : ""}`}
                        >
                            <h3>{service.text}</h3>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default Services;