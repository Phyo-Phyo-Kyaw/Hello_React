import React from 'react';
import "./index.css"
import FeaturedProduct from './FeaturedProduct';
import LatestProduct from './LatestProduct';

export default function App() {
	const featuredProducts= [
		{
		  category_name: 'Steel Wall Mount Enclosures',
		  name: 'Steel 300(H)x 200(W)x 150(D) IP66',
		  price: '$59.00',
		  featured: true,
		},
		{
		  category_name: 'Steel Wall Mount Enclosures',
		  name: 'Steel 600(H)x 400(W)x 200(D) IP66',
		  price: '$118.00',
		  featured: true,
		},
		{
		  category_name: 'GRP Wall Mount Enclosures',
		  name: 'GRP 300(H)x250(W)x140(D) IP65 enclosure',
		  price: '$82.00',
		  featured: true,
		},
		{
		  category_name: 'Din Rail Enclosures',
		  name: '1x14 POLES',
		  price: '$73.00',
		  itemsLeft: 4,
		},
	  ];
	return (
		<>
			<FeaturedProduct featuredProducts={featuredProducts} />
			<LatestProduct latestProducts={featuredProducts} />
		</>
	);
}