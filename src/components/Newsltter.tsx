// import necessary packages
import React from 'react';

const Newsletter: React.FC = () => {
    return (
        <div className="w-4/5 text-ceter mx-auto transform translate-y-full transition-transform duration-500 ease-in-out">
            <div className="px-4 py-6 text-white">
                <h3 className="mb-4 text-3xl font-bold text-center">Subscribe to our newsletter</h3>
                <form className="flex">
                    <input className="w-full px-3 py-3 mr-4 my-3 text-gray-700 bg-white rounded-md" type="email" placeholder="Your email address" />
                    <button className="px-5 py-2 text-white bg-red-500 rounded-md" type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
}

// export the component
export default Newsletter;