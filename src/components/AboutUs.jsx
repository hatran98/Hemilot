const AboutUs = () => {
  return (
    <div className="relative text-white py-16">
      <div className="container mx-auto px-6 flex">
        {/* Phần video */}
        <div className="relative w-3/5 h-64 md:h-96 rounded-xl overflow-hidden mb-8 left-24 top-16">
          <video
            className="absolute inset-0 w-full h-full object-cover z-20"
            src="/video.mp4"
            autoPlay
            loop
            muted
            controls
          />
          <div className="absolute inset-0 opacity-40"></div> 
        </div>

        {/* Phần About Us */}
        <div className="w-[700px] pl-8 bg-[#3A62AD] p-8 h-[500px] relative z-10 ml-auto right-3">
         <div className = "flex justify-between">
            <div className="w-1/5"></div>
            <div className="mt-12 w-4/5">
            <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
          <hr className="border-t-1 border-white mb-4" />
          <p className="text-lg mb-4">
            Shenzhen Hemipay Technology Co., Ltd. is a dynamic enterprise at the
            forefront of the software and information technology service industry.
            Headquartered in Shenzhen, China, we are rooted in innovation and driven
            by a passion for technological advancement. We offer a diverse range of
            services and products focused on delivering innovative solutions to meet
            the ever-changing needs of businesses around the world.
          </p>
          <a href="/about-us" className="text-white absolute right-10 bottom-20">MORE →</a> 
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
