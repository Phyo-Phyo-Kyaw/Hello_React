import React, { useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, Divider } from '@mui/material';

const Detail = ({  }) => {
    const featuredProducts = [
        {
            category_name: 'Steel Wall Mount Enclosures',
            name: 'Steel 300(H)x 200(W)x 150(D) IP66',
            description: "Tailwind CSS uses a lot of custom CSS at-rules like @tailwind, @apply, and @config, and in many editors this can trigger warnings or errors where these rules aren’t recognized.The solution to this is almost .",
            price: '$59.00',
            featured: true,
			images:"https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png",
        },
       
    ];
    const product = featuredProducts[0];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png");

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <nav className="text-sm mb-4">
                <Link to="/" className="text-gray-600 hover:text-orange-500">Shop</Link> &gt;
                <Link to="/" className="text-gray-600 hover:text-orange-500"> Steel Wall Mount Enclosures</Link> &gt;
                <span className="text-gray-800"> {product.name}</span>
            </nav>

            <div className="flex flex-col md:flex-row gap-8 ">
                {/* Product Images */}
                <div className="flex-1 ">
                <Card className="shadow-lg me-5">
                    <CardActionArea onClick={() => openModal(selectedImage)}>
                        <CardMedia
                            component="img"
                            image={selectedImage}
                            alt={product.name}
                            className="w-full h-auto object-cover"
                        />
                    </CardActionArea>
                    <CardContent className="flex space-x-2">
                        {/* {product.images.map((image, index) => ( */}
                            <img
                                // key={index}
                                src={selectedImage}
                                alt={`Thumbnail `}
                                className="w-20 h-20 object-cover border border-gray-300 cursor-pointer"
                                onClick={() => setSelectedImage(selectedImage)}
                            />
                        {/* ))} */}
                    </CardContent>
                </Card>
                </div>

                {/* Product Details */}
                <div className="flex-1 mx-auto px-5">
                    {/* Product Details Card */}
                    <Card className="shadow-lg mb-8">
                        <CardContent>
                            <Typography variant="h5" component="h1" className="font-bold mb-4">
                                {product.name}
                            </Typography>
                            <Typography variant="h6" component="p" className="text-orange-600 font-semibold mb-2">
                                ${product.price}
                            </Typography>
                            <Typography variant="body1" className="text-gray-600 mb-4">
                                {product.description}
                            </Typography>

                            <div className="mb-4">
                                <Typography variant="body2"><strong>Dimension:</strong> {product.dimension}</Typography>
                                <Typography variant="body2"><strong>Material:</strong> {product.material}</Typography>
                                <Typography variant="body2"><strong>Weight:</strong> {product.weight}</Typography>
                                <Typography variant="body2"><strong>Certifications:</strong> {product.certifications}</Typography>
                                <Typography variant="body2"><strong>Applicable temperature:</strong> {product.temperatureRange}</Typography>
                            </div>

                            <Button variant="contained" color="warning">
                                Enquire Now
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Product Description Card */}
                    <Card className="shadow-lg">
                        <CardContent>
                            <Typography variant="h5" component="h2" className="font-bold mb-4">
                                Description
                            </Typography>
                            <Divider className="border-5 mb-4" />
                            <Typography variant="body1 mt-5">
                                {product.description}
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                        Enquire Now
                    </button> */}
                </div>

                
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg w-[90%] md:w-[600px] h-[90%] md:h-[600px] relative">
                        <button
                            className="absolute top-2 right-2 text-red-500"
                            onClick={closeModal}
                        >
                            <RxCross2 size={24} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Enlarged view"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detail;
