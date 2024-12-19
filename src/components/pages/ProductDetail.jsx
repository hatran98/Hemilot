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

    const handleInquiry = () => {
        alert("Inquiry Now clicked");
    };
    
    const handleDownloadPDF = () => {
        alert("Download PDF clicked");
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
                src={`/images/${mainImage}`}
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
                    src={`/images/${image}`}
                    alt={`product-image-${index}`}
                    className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 transition-all ${currentIndex == index ? "border-orange-500" : "border-gray-300"}`}
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
                        src={`/images/${feature.icon}`}
                        alt={feature.name}
                        className="mx-auto w-24 h-10 object-contain mb-2 border-2 p-2"
                    />
                    <p className="text-gray-600 mt-2 text-sm text-center break-words">{feature.content}</p>
                </div>
            ))}
        </div>

        {/* Buttons for Inquiry and PDF Download */}
        <div className="flex space-x-4 mt-6">
            {/* Inquiry Now Button */}
            <button
                onClick={handleInquiry}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
<svg t="1716195057682" class="icon w-6 h-6 mr-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6220" width="200" height="200"><path d="M868.1 932H155.9c-77.4 0-140.3-62.9-140.3-140.3V232.3c0-77.4 63-140.3 140.3-140.3H868c77.4 0 140.3 62.9 140.3 140.3v559.4c0.1 77.4-62.9 140.3-140.2 140.3zM155.9 146.5c-47.3 0-85.8 38.5-85.8 85.8v559.4c0 47.3 38.5 85.8 85.8 85.8H868c47.3 0 85.7-38.5 85.7-85.8V232.3c0-47.3-38.5-85.8-85.7-85.8H155.9z" p-id="6221"></path><path d="M511.9 557.7c-3.3 0-6.5-1-9.4-2.9l-467.6-326c-7.4-5.2-9.2-15.4-4.1-22.8 5.2-7.4 15.4-9.2 22.8-4.1l458.3 319.4L970.4 202c7.4-5.2 17.6-3.3 22.8 4.1 5.2 7.4 3.3 17.6-4.1 22.8L521.3 554.8a16.8 16.8 0 0 1-9.4 2.9z" p-id="6222"></path></svg>
Inquiry Now
            </button>

            {/* Download PDF Button */}
            <button
                onClick={handleDownloadPDF}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                <svg t="1716195029769" class="icon h-6 w-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5209"><path d="M531.3 574.4l0.3-1.4c5.8-23.9 13.1-53.7 7.4-80.7-3.8-21.3-19.5-29.6-32.9-30.2-15.8-0.7-29.9 8.3-33.4 21.4-6.6 24-0.7 56.8 10.1 98.6-13.6 32.4-35.3 79.5-51.2 107.5-29.6 15.3-69.3 38.9-75.2 68.7-1.2 5.5 0.2 12.5 3.5 18.8 3.7 7 9.6 12.4 16.5 15 3 1.1 6.6 2 10.8 2 17.6 0 46.1-14.2 84.1-79.4 5.8-1.9 11.8-3.9 17.6-5.9 27.2-9.2 55.4-18.8 80.9-23.1 28.2 15.1 60.3 24.8 82.1 24.8 21.6 0 30.1-12.8 33.3-20.5 5.6-13.5 2.9-30.5-6.2-39.6-13.2-13-45.3-16.4-95.3-10.2-24.6-15-40.7-35.4-52.4-65.8zM421.6 726.3c-13.9 20.2-24.4 30.3-30.1 34.7 6.7-12.3 19.8-25.3 30.1-34.7z m87.6-235.5c5.2 8.9 4.5 35.8 0.5 49.4-4.9-19.9-5.6-48.1-2.7-51.4 0.8 0.1 1.5 0.7 2.2 2z m-1.6 120.5c10.7 18.5 24.2 34.4 39.1 46.2-21.6 4.9-41.3 13-58.9 20.2-4.2 1.7-8.3 3.4-12.3 5 13.3-24.1 24.4-51.4 32.1-71.4z m155.6 65.5c0.1 0.2 0.2 0.5-0.4 0.9h-0.2l-0.2 0.3c-0.8 0.5-9 5.3-44.3-8.6 40.6-1.9 45 7.3 45.1 7.4z" p-id="5210"></path><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326z m1.8 562H232V136h302v216c0 23.2 18.8 42 42 42h216v494z" p-id="5211"></path></svg>
                Download PDF
            </button>
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
                                    src={`/images/${spec.icon}`}
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
