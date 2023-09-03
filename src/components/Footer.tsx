// import necessary packages
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="w-full relative  bg-slate-900 transform translate-y-full transition-transform duration-500 ease-in-out">
            <div className="px-4 py-5 text-white flex justify-between">
                <div>
                    <h3 className="mb-4 text-xl">Follow us</h3>
                    <div className="flex space-x-4">
                        {/* You'll need to replace these with your actual social media links */}
                        <a href="#"><i className="fab fa-facebook"></i></a> 
                        <a href="#"><i className="fab fa-twitter"></i></a> 
                        <a href="#"><i className="fab fa-instagram"></i></a> 
                    </div>
                </div>
                <div>
                    <h3 className="mb-4 text-xl">Quick Links</h3>
                    <ul>
                        {/* You'll need to replace these with your actual page links */}
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// export the component
export default Footer;