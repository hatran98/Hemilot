import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import data from "../../data.json";

const Products = () => {
    const navigate = useNavigate();  // Thay vì useHistory, sử dụng useNavigate
    const location = useLocation();

    // Khởi tạo state cho danh mục được chọn
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Hàm để xử lý khi người dùng chọn danh mục
    const handleCategoryClick = (categoryId) => {
        // Cập nhật state và URL
        setSelectedCategory(categoryId);
        navigate({
            pathname: location.pathname,
            search: `?category=${categoryId}`, // Thêm category vào URL
        });
    };

    // Lọc các sản phẩm theo danh mục
    const filteredProducts = selectedCategory === 'all' 
        ? data.products 
        : data.products.filter(product => product.category_id == selectedCategory);

    // Đọc tham số category từ URL khi component mount
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get('category');
        if (category) {
            setSelectedCategory(category);
        }
    }, [location.search]); // Chạy lại mỗi khi search trong URL thay đổi

    return (
        <div>
            {/* Image Section */}
            <img 
                src="http://www.hemiiot.com/uploads/allimg/20240527/1-24052F92S1U9.jpg" 
                alt="Product Image" 
                className="w-full h-auto object-cover" 
            />

            {/* Main Content Section */}
            <div className="flex mt-6 container">
                {/* Left Side: Categories */}
                <div className="w-1/4">
                    <div className="w-full p-4 bg-gray-200">
                        <ul className="space-y-4 mt-4">
                            <li 
                                className={`text-lg cursor-pointer ${selectedCategory == 'all' ? 'text-blue-500' : 'hover:text-blue-500'}`}
                                onClick={() => handleCategoryClick('all')}
                            >
                                All Products
                            </li>
                            {data.categories.map((category, index) => (
                                <li 
                                    key={index} 
                                    className={`text-lg cursor-pointer ${selectedCategory == category.id ? 'text-blue-500' : 'hover:text-blue-500'}`}
                                    onClick={() => handleCategoryClick(category.id)}
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Merchant Recommendations Section */}
                    <div className="w-full mt-6 p-4 bg-gray-100">
                        <h2 className="text-xl mb-4 text-center border border-blue-500 bg-blue-500 text-white">Merchant Recommendations</h2>
                        <div className="grid grid-cols-1 gap-6 border-white">
                            {/* Displaying example recommended products */}
                            {data.products.slice(0, 4).map((product, index) => (
                                <Link to={`/product/${product.id}`} key={index}>
                                    <div className="p-4 flex justify-start border-b-2 bg-white">
                                        <img 
                                            src={product.main_image} 
                                            alt={product.name} 
                                            className="h-40 w-24 object-cover mb-4" 
                                        />
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-3/4 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product, index) => ( 
                            <div key={index} className="border p-4">
                                <img 
                                    src={product.main_image} 
                                    alt={product.name} 
                                    className="w-full h-40 object-cover mb-4" 
                                />
                                <div className='flex justify-between items-center mt-4'>
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <Link 
                                        to={`/product/${product.id}`} 
                                        className="text-blue-500 hover:text-blue-700 flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 12h14M12 5l7 7-7 7"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
