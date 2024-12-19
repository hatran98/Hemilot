import { useState, useEffect } from "react";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Danh sách hình ảnh cho các slide
  const slides = [
    "images/banner/home.jpg", 
    "images/banner/home2.jpg", 
   "images/banner/home3.jpg", 
  ];

  // Chuyển slide tự động mỗi 3 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Hàm chuyển slide khi click vào nút
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
<div className="relative w-full h-[300px] md:w-full md:h-[600px] overflow-hidden">
<div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[currentIndex]})`,
        }}
      ></div>

      {/* Các nút điều khiển slide */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
