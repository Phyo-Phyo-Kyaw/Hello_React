import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedProduct({ featuredProducts }) {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">FEATURED PRODUCTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProducts.map((product, index) => (
                    <div key={index} className="">
                        {product.featured && (
                            <span className="text-xs text-white bg-orange-500 px-2 py-1 mb-2 inline-block">
                                Featured
                            </span>
                        )}
                        {product.itemsLeft && (
                            <span className="text-xs text-white bg-red-500 px-2 py-1 mb-2 inline-block">
                                {product.itemsLeft} item{product.itemsLeft > 1 ? 's' : ''} left
                            </span>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:col-span-1">
                                <img
                                    src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png"
                                    alt=""
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="text-xl">{product.category_name}</h3>
                                <p className="text-gray-600">{product.name}</p>
                                <p className="text-xl font-bold mt-4">{product.price}</p>
                                <div className="mt-4 flex space-x-2 float-end">
                                    <Link to={`/detail/${product.name}`} className="text-black-800 px-4 py-2 rounded hover:bg-gray-300 border-2 border-gray-500 text-xs">
                                        More Details
                                    </Link>
                                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-xs">
                                        Enquire Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
