import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import FeaturedProduct from './FeaturedProduct';
import LatestProduct from './LatestProduct';
import Detail from './Product/Detail';

export default function App() {
    const featuredProducts = [
        {
            category_name: 'Steel Wall Mount Enclosures',
            name: 'Steel 300(H)x 200(W)x 150(D) IP66',
            price: '$59.00',
            featured: true,
			img:"https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png",
        },
        {
            category_name: 'Steel Wall Mount Enclosures',
            name: 'Steel 600(H)x 400(W)x 200(D) IP66',
            price: '$118.00',
            featured: true,
			img:"https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png",
        },
        {
            category_name: 'GRP Wall Mount Enclosures',
            name: 'GRP 300(H)x250(W)x140(D) IP65 enclosure',
            price: '$82.00',
            featured: true,
			img:"https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png",
        },
        {
            category_name: 'Din Rail Enclosures',
            name: '1x14 POLES',
            price: '$73.00',
            itemsLeft: 4,
			img:"https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png",
        },
    ];

    return (
        <Router>
            <Routes>
                {/* Home Page */}
                <Route
                    path="/"
                    element={
                        <>
                            <FeaturedProduct featuredProducts={featuredProducts} />
                            <LatestProduct latestProducts={featuredProducts} />
                        </>
                    }
                />
                {/* Detail Page */}
                <Route path="/detail/:productName" element={<Detail />} />
            </Routes>
        </Router>
    );
}
