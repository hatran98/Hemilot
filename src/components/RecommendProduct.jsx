const RecommendedProducts = () => {
  // Dữ liệu sản phẩm giả lập (có thể thay đổi theo dữ liệu thực tế của bạn)
  const products = [
    { id: 1, name: "Y90B", description: "", description_2: "", image: "http://www.hemiiot.com/uploads/allimg/20240816/1-240Q6152PQ49.jpg" },
    { id: 2, name: "Y90A", description: "", description_2: "", image: "http://www.hemiiot.com/uploads/allimg/20240816/1-240Q6152PQ49.jpg" },
    { id: 3, name: "MD711", description: "QR Code Payment Speaker" , description_2: "Desktop tabletop, LCD screen", image: "http://www.hemiiot.com/uploads/allimg/20240528/1-24052PH555533.png" },
    { id: 4, name: "MD760D", description: "2.4, Double-sided screen, External keyboard", description_2: "The most full-featured QR code payment speaker", image: "http://www.hemiiot.com/uploads/allimg/20240528/1-24052PH612K2.png" },
    { id: 5, name: "Y30", description: "Static QR Code Payment Speaker", description_2: "Ultra-convenient ID Card Type", image: "http://www.hemiiot.com/uploads/allimg/20240528/1-24052PH63Y50.png" },
    { id: 6, name: "Y86", description: "Aggregate Payment Terminal", description_2: "Convenient Scanning QR Code Cash Receiving Equipment", image: "http://www.hemiiot.com/uploads/allimg/20240816/1-240Q6140041404.png" },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-[#E2E2E2] font-bold mb-8 text-[50px]">RECOMMENDED PRODUCT</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all relative group bg-[#E2E2E2]"
            >
              {/* Khi hover, chữ sẽ bên trái, ảnh sẽ bên phải */}
              <div className="relative w-full flex flex-col group-hover:flex-row p-4">
                {/* Thông tin sản phẩm bên trái khi hover */}
                <div className="relative w-full group-hover:w-1/2 flex justify-start items-start mt-4 group-hover:mt-0">
                </div>

                {/* Ảnh sản phẩm bên phải khi hover */}
                <div className="relative w-full group-hover:w-1/2 flex justify-center items-center mt-4 group-hover:mt-0">
                  <img
                    className={`object-cover border-2 bg-white ${
                      index === products.length - 1 ? 'w-42 h-36' : 'w-30 h-56'
                    }`} // Điều chỉnh kích thước ảnh ở đây
                    src={product.image}
                    alt={product.name}
                  />
                </div>
              </div>

              {/* Overlay đen khi hover */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-0 transition-all"></div>

              {/* Thông tin sản phẩm sẽ xuất hiện khi hover */}
              <div className="absolute inset-0 p-4 flex items-start justify-start opacity-0 group-hover:opacity-100 transition-all">
                <div className="text-black w-1/3">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-sm">{product.description}</p>
                  <p className="text-sm">{product.description_2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
