import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from "../data.json";

const Header = () => {
  const [isProductHovered, setIsProductHovered] = useState(false);
  const navigate = useNavigate(); 

  const renderProductsForCategory = (categoryId) => {
    return data.products
      .filter(product => product.category_id === categoryId)
      .map(product => (
        <a key={product.id} href={`/product/${product.id}`} className="px-4 py-2 text-gray-800 hover:bg-blue-100 flex items-center">
          <img src={product.icon} alt={product.name} className="w-16 h-16 object-cover mr-3" />
          {product.name}
        </a>
      ));
  };

  const handleCategoryClick = (categoryId) => {
    navigate({
      pathname: '/products', 
      search: `?category=${categoryId}`,
    });
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm p-4">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        <div className="logo">
          <a href="/">
            <img style={{ height: '50px' }} src="http://www.hemiiot.com/uploads/allimg/20240403/1-24040314033H36.png" alt="HEMIPAY Logo" />
          </a>
        </div>

        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium justify-center items-center">
          <a href="/" className="text-blue-600 text-[20px] p-2">Home</a>
          
          <div 
            className="relative group"
            onMouseEnter={() => setIsProductHovered(true)}
            onMouseLeave={() => setIsProductHovered(false)}
          >
            <a 
              href="/products" 
              className={`text-[20px] p-2 ${isProductHovered ? 'text-blue-600' : 'hover:text-blue-600'}`}
            >
              Product
            </a>

            <div 
              className={`absolute left-1/2 transform -translate-x-[40%] mt-2 space-y-2 bg-white shadow-lg ${isProductHovered ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300 ease-in-out w-[66vw] max-w-screen-2xl rounded-lg border border-gray-200 z-10`}
            >
              <div className="grid grid-cols-6 gap-0 p-4 border-collapse">
                {data.categories.map((category, index) => (
                  <div 
                    key={category.id} 
                    className={`col-span-1 border-b-2 border-gray-200 ${index === data.categories.length - 1 ? '' : 'border-r-2'}`}
                  >
                    <div 
                      onClick={() => handleCategoryClick(category.id)}
                      className="px-4 py-2 text-gray-800 w-full font-semibold text-base whitespace-normal h-16 border-b-2 cursor-pointer"
                    >
                      {category.name}
                    </div>

                    <div className="space-y-2">
                      {renderProductsForCategory(category.id)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a href="/solutions" className="hover:text-blue-600 text-[20px] p-2">Solution</a>
          <a href="/about-us" className="hover:text-blue-600 text-[20px] p-2">About Us</a>
          <a href="/contacts" className="hover:text-blue-600 text-[20px] p-2">Contact Us</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 10A7 7 0 1 1 3 10a7 7 0 0 1 14 0z"
              />
            </svg>
          </button>

          <div className="flex items-center space-x-2">
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="English"
              className="w-5 h-5"
            />
            <span className="text-gray-700">English</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
