import { useParams } from 'react-router-dom';
import { useState } from 'react';
import data from "../../data.json";

const ProductDetail = () => {
    const { id } = useParams();
    const product = data.products.find(product => product.id === parseInt(id));
    const [mainImage, setMainImage] = useState(product.main_image);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1));
        setMainImage(product.images[currentIndex === 0 ? product.images.length - 1 : currentIndex - 1]);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === product.images.length - 1 ? 0 : prevIndex + 1));
        setMainImage(product.images[currentIndex === product.images.length - 1 ? 0 : currentIndex + 1]);
    };

    const handleImageClick = (index) => {
        setMainImage(product.images[index]);
        setCurrentIndex(index);
    };
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div>
                            <img
                                src={`/public/images/${mainImage}`}
                                alt={product.name}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                        <div className="flex items-center space-x-4 overflow-x-auto bg-gray-100">
                            <button
                                onClick={handlePrev}
                                className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={`/public/images/${image}`}
                                    alt={`product-image-${index}`}
                                    className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 transition-all ${currentIndex == index ? "border-orange-500" : "border-gray-300"
                                        }`}
                                    onClick={() => handleImageClick(index)}
                                />
                            ))}

                            <button
                                onClick={handleNext}
                                className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right side: Product details */}
                    <div className="space-y-6 ml-8">
                        <h2 className="text-3xl font-semibold">
                            <span className="text-7xl text-red-500">{product.name.charAt(0)}</span>
                            <span className="text-5xl text-blue-600">{product.name.slice(1)}</span>
                        </h2>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">Features:</h3>
                            <ul className="list-disc pl-5 space-y-1 list-inside">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="text-gray-600 text-lg marker:text-2xl">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-lg text-gray-700">{product.description}</p>
                        <div className="text-xl font-semibold">Function</div>
                        <div className="gap-4 items-center flex flex-wrap justify-space-between">
                            {product.function.map((feature, index) => (
                                <div key={index} className="text-center flex-shrink-0 w-1/5 flex flex-col items-center justify-start h-24">
                                    <img
                                        src={feature.icon}
                                        alt={feature.name}
                                        className="mx-auto w-24 h-10 object-contain mb-2 border-2 p-2"
                                    />
                                    <p className="text-gray-600 mt-2 text-sm text-center break-words">{feature.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-8 w-full bg-[#231D5D] py-36">
                <div className="w-full lg:w-4/5 mx-auto">
                    <h3 className="text-[40px] text-white font-semibold mb-4 text-left">
                        {product.name} Technical Specifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {product.technical_info.map((spec, index) => (
                            <div key={index} className="flex items-center justify-start space-x-4 text-white">
                                <img
                                    src={spec.icon}
                                    alt={spec.technical_ico}
                                    className="w-12 h-12 object-contain"
                                />
                                <div className="flex flex-col text-left justify-center">
                                    <p className="text-base">{spec.technical_ico}: {spec.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ProductDetail;
