import React from 'react';
import {  FaCheckCircle } from 'react-icons/fa';

const PricingTable = () => {
    const plans = [
        {
            name: 'Basic',
            price: '10',
            features: ['Feature 1', 'Feature 2'],
        },
        {
            name: 'Premium',
            price: '50',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
        },
        {
            name: 'Pro',
            price: '30',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
        }
    ];

    return (
        <div className="w-4/5 mx-auto flex justify-center h-auto text-center">
            {
                plans.map((plan, index) => (
                    <div key={index} className={`w-2/5 p-8 ${plan.name === 'Premium' ? '-m-5 z-10 bg-gradient-to-t from-slate-800 to-blue-900  text-white' : 'bg-white border border-grey-200 text-gray-900'} shadow-md rounded-3xl`}>
                        <h3 className="text-6xl py-6 font-semibold mb-4">{plan.name}</h3>
                        <p className=" tracking-wide">
                            <span className="text-auto font-bold align-top">$ </span>
                            <span className="text-6xl font-semibold">{plan.price}</span>
                            <span className="text-auto text-2xl font-medium">/ User</span>
                        </p>
                        {/* <h2 className="text-4xl font-bold mb-4"></h2> */}
                        <hr className='my-5 w-3/4 mx-auto' />
                        <ul className="mb-6 space-y-2">
                            {
                                plan.features.map((feature, featureIndex) => (
                                    <li className='text-xl flex pb-3 items-center '><FaCheckCircle className='mr-8'/>{feature}</li>
                                ))
                            }
                        </ul>
                        <button className="w-1/2 p-5 bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold rounded-lg">
                            Purchase
                        </button>
                    </div>
                ))
            }
        </div>
    );
}

export default PricingTable;