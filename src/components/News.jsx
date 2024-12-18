import React from "react";

const News = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Header với tiêu đề và nút */}
        <div className="flex justify-between items-center mb-8">
          {/* Tiêu đề News */}
          <h2 className="text-5xl font-bold text-left text-[#E2E2E2]">NEWS</h2>

          {/* Các nút News */}
          <div className="flex space-x-4">
            <button className="py-2 px-6 text-lg font-medium text-white bg-blue-800 rounded-3xl hover:bg-blue-700 transition-all">
              Company News
            </button>
            <button className="py-2 px-6 text-lg font-medium text-[#3A62AD] bg-[#E9E9E9] rounded-3xl hover:bg-gray-700 transition-all">
              Industry News
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
