import React from 'react';

const ProductTable = () => {
    const products = [
        
            {
              service: "Website Design",
              properties: ["Responsive", "SEO-friendly", "Customizable"],
              cost: 1000
            },
            {
              service: "Social Media Marketing",
              properties: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
              cost: 500
            },
            {
              service: "Content Writing",
              properties: ["Blog posts", "Articles", "E-books", "Press releases"],
              cost: 300
            },
            {
              service: "Email Marketing",
              properties: ["Newsletters", "Campaigns", "Automation", "Analytics"],
              cost: 400
            },
            {
              service: "Video Production",
              properties: ["Scripting", "Editing", "Animation", "Voice-over"],
              cost: 800
            },
            {
              service: "Graphic Design",
              properties: ["Logo design", "Flyer design", "Brochure design", "Banner design"],
              cost: 600
            },
            {
              service: "SEO Services",
              properties: ["Keyword research", "On-page optimization", "Off-page optimization", "Link building"],
              cost: 700
            }
          
          
        // Add more products as needed
    ];

    return (
        <table className="table-auto w-full rounded-lg border border-black mx-auto">

            <thead className=" text-2xl text-dark uppercase border border-solid rounded-lg dark:bg-black dark:text-white">
                <tr className='rounded-lg'>
                    <th scope="col" className="px-6 py-6">
                        <div className="flex items-center">
                            Service
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-6">
                        <div className="flex items-center">
                           
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-6">
                        <span className="sr-only">Action</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map( (product: { service: string; properties: string[]; cost: number; }, index: number) => (
                    <tr key={index} className="bg-white border-b text-black text-3xl">
                        <th scope="row" className=" text-start text-left px-6 py-6 font-bold uppercase text-gray-900 whitespace-nowrap">
                            {product.service}
                        </th>
                        <td className="px-6 py-6">
                            {product.properties.map(property => (<div>{property}</div>))}
                        </td>
                        <td className="px-6 py-6 text-center">
                            <a href="/pricing" className="font-medium hover:underline">View Pricing</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};



export default ProductTable;