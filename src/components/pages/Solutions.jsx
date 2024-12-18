import React from "react";

const SolutionPage = () => {
  return (
   <div>
<section className="relative h-[700px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.trenditen.com/wp-content/uploads/2024/01/1920-%E8%83%8C%E6%99%AF01.jpg')",
        }}
      ></div>

      {/* Overlay với nội dung */}
      <div className="absolute inset-0 bg-opacity-25 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Dynamic Versatility: Flexibility and Multifunctionality of Hemipay
          Mobile Payment Solution
        </h1>
        <p className="text-white text-sm md:text-base max-w-3xl">
          Hemipay's mobile payment solution is a flexible and adaptable payment
          solution suitable for various scenarios. It encompasses multiple
          product forms, providing convenient and swift integration methods,
          along with robust functionality expansion capabilities.
        </p>
      </div>
    </section>
    <section className="py-10 bg-white">
      {/* Title and Description */}
      <div className="text-center px-4 mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Various Product Forms
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          The mobile payment solution encompasses various product forms, allowing selection
          based on different mobile payment scenarios such as retail shopping, food delivery, 
          public transportation, and more. This diversity enables the solution to flexibly 
          meet the requirements of different industries and business models.
        </p>
      </div>
      <div className="px-4 max-w-6xl mx-auto">
        <img
          src="http://www.hemiiot.com/uploads/allimg/20240430/1-24043015323Q06.jpg"
          alt="Solution"
          className="rounded-lg w-full object-cover"
        />
      </div>
    </section>
    <section
      className="flex justify-end bg-cover bg-center py-48 h-[650px]"
      style={{
        backgroundImage: "url('http://www.hemiiot.com/template/pc/skin/static/images/11tu.jpg')",
      }}
    >
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Rapid Integration
          </h2>
          <p className="text-gray-600 text-sm md:text-base w-2/3">
            The solution is designed with user-friendly features, facilitating quick integration
            into various mobile payment environments. This helps merchants swiftly enable mobile
            payment services, enhancing payment efficiency, and providing users with a more
            convenient payment experience.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16">
        <div className="text-center px-4 mb-8">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
          Payment Process Overview
          </h2>
          <p className="text-gray-600 text-sm md:text-xl max-w-3xl mx-auto">
          Gain insights into the workflow of the Hemipay mobile payment solution, effortlessly achieving a secure and efficient payment experience. From selecting the payment method to completing the transaction, every step is seamlessly covered.
          </p>
        </div>
        <img src ="http://www.hemiiot.com/uploads/allimg/20240521/1-240521053550127.png" alt="Solution" className="rounded-lg w-2/3 object-cover mx-auto" />
    </section>
    <section className="relative h-[1000px]">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://www.trenditen.com/wp-content/uploads/2023/12/banner-5.jpg')",
    }}
  ></div>

  {/* Overlay với nội dung */}
  <div className="absolute inset-0 bg-opacity-25 flex flex-col justify-start items-center text-center px-4 py-12">
    <h1 className="text-white text-3xl md:text-[45px] font-bold mb-4">
      Strong Expandability In Functionality
    </h1>
    <p className="text-white text-sm md:text-[20px] max-w-3xl mx-auto">
      Each solution is customized based on the actual needs of the customer,
      enabling the solution to adapt to the ever-changing market and business
      requirements, maintaining the system’s sophistication and
      competitiveness.
    </p>
  </div>

  {/* Hai ảnh nằm dưới phần chữ */}
  <div className="absolute inset-x-0 flex justify-center space-x-4 px-4 w-[1400px] top-1/3 left-32">
    <div className="w-full md:w-2/3">
      <img
        src="http://www.hemiiot.com/template/pc/skin/static/images/12tu.png"
        alt="Solution"
        className="w-full h-auto rounded-lg shadow-lg object-contain ml-32"
      />
    </div>
    <div className="w-full md:w-[400px]">
      <img
        src="http://www.hemiiot.com/template/pc/skin/static/images/14tu.png"
        alt="Solution"
        className="w-full h-1/2 rounded-lg shadow-lg object-contain"
      />
    </div>
  </div>
</section>
<section className="py-16">
        <div className="text-center px-4 mb-8">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
          Support For FOTA (Firmware Over-The-Air)

</h2>
          <p className="text-gray-600 text-sm md:text-xl w-3/4 mx-auto">
          By supporting FOTA, the mobile payment solution can remotely update firmware, ensuring that the system always maintains the latest features and security. 
This remote upgrade method avoids the hassle of manual updates, enhancing the system’s  maintainability and reliability.          </p>
        </div>
        <img src ="http://www.hemiiot.com/template/pc/skin/static/images/13tu.png" alt="Solution" className="rounded-lg w-3/4 object-cover mx-auto" />
    </section>
    <section className="relative bg-cover bg-center h-[800px]" style={{ backgroundImage: "url('https://www.trenditen.com/wp-content/uploads/2024/01/1920-%E8%83%8C%E6%99%AF05.jpg')" }}>
  <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay để làm mờ ảnh nền */}
  
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">
    <h2 className="absolute text-3xl md:text-[45px] font-bold text-gray-800 top-24">
    Customization According To Customer Needs
    </h2>
    {/* 2 Cột dọc với các icon và text */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
  <div className="flex flex-col items-start text-white text-left py-10">
    {/* Icon */}
    <div className="w-16 h-16 mb-4 bg-blue-500 rounded-full flex justify-center items-center">
      <img src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050P95R0E7.png" className="text-white text-2xl"/>
    </div>
    <h3 className="font-semibold text-xl mb-2">Optimization For User Experience</h3>
    <p>Through customized services, not only does it enhance the adaptability of the solution, but it also improves user experience, ensuring a continuous increase in satisfaction.</p>
  </div>

  <div className="flex flex-col items-start text-white text-left py-10">
    {/* Icon */}
    <div className="w-16 h-16 mb-4 bg-green-500 rounded-full flex justify-center items-center">
    <img src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050P95F0V6.png" className="text-white text-2xl"/>
    </div>
    <h3 className="font-semibold text-xl mb-2">Real-Time Adjustments</h3>
    <p>As business requirements evolve, merchants can make real-time adjustments to custom settings, ensuring that the solution always aligns with the latest demands.</p>
  </div>

  <div className="flex flex-col items-start text-white text-left py-10">
    {/* Icon */}
    <div className="w-16 h-16 mb-4 bg-red-500 rounded-full flex justify-center items-center">
      <img src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050P95613442.png" className="text-white text-2xl"/>
    </div>
    <h3 className="font-semibold text-xl mb-2">Comprehensive Support</h3>
    <p>Providing multidimensional support, including business processes and interface design, to meet merchants' personalized needs on various levels.</p>
  </div>

  <div className="flex flex-col items-start text-white text-left py-10">
    {/* Icon */}
    <div className="w-16 h-16 mb-4 bg-yellow-500 rounded-full flex justify-center items-center">
      <img src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050P95524945.png" className="text-white text-2xl"/>
    </div>
    <h3 className="font-semibold text-xl mb-2">Flexible Customization</h3>
    <p>Merchants can freely choose and adjust system functionalities based on specific business requirements, achieving personalized customization.</p>
  </div>
</div>
  </div>
</section>
<section className="bg-white h-[700px]">
  <div className="max-w-[1400px] mx-auto px-4 py-12">
    <h2 className="text-3xl md:text-[45px] font-bold text-center my-16">Secure Real-Time Communication</h2>    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">      
      <div className="flex flex-col items-center text-center p-6 transition-shadow duration-300">
        <img src="https://www.trenditen.com/wp-content/uploads/2024/01/%E5%AE%9E%E6%97%B6%E9%80%9A%E4%BF%A1.png" alt="Solution" className="w-32 h-32 mb-4" />
        <h3 className="text-xl font-bold mb-2">Ensuring Transaction Integrity And Traceability
        </h3>
        <p className="text-gray-600">
        Through secure real-time communication, the system ensures the integrity of every transaction, allowing for accurate traceability and auditing, providing mercha...
        </p>
      </div>
      <div className="flex flex-col items-center text-center p-6 transition-shadow duration-300">
        <img src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050Q04K5b9.png" alt="Solution" className="w-32 h-32 mb-4" />
        <h3 className="text-xl font-bold mb-2">Preventing Message Loss
        </h3>
        <p className="text-gray-600">
        The system features robust message management capabilities, effectively preventing message loss, ensuring the integrity and traceability of payment transactions...
        </p>
      </div>
      <div className="flex flex-col items-center text-center p-6 transition-shadow duration-300">
        <img src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050Q04H1248.png" alt="Solution" className="w-32 h-32 mb-4" />
        <h3 className="text-xl font-bold mb-2">Enhancing Payment System Security
        </h3>
        <p className="text-gray-600">
        This encryption mechanism not only prevents potential data leaks but also effectively enhances the overall security of the payment system, safeguarding sensitiv...
        </p>
      </div>
      <div className="flex flex-col items-center text-center p-6 transition-shadow duration-300">
        <img src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050Q04145606.png" alt="Solution" className="w-32 h-32 mb-4" />
        <h3 className="text-xl font-bold mb-2">Encrypted Data Transmission
        </h3>
        <p className="text-gray-600">
        By employing a secure real-time communication mechanism, ensuring encrypted data transmission during the payment process, providing additional security safeguar...
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#f6f6f7] h-[700px]">
  <div className="max-w-[1400px] mx-auto px-4 py-12">
    <h2 className="text-3xl md:text-[45px] font-bold text-center my-16">Suitable For Various Mobile Payment Scenarios
    </h2>    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">      
      <div className="flex flex-col p-6 transition-shadow duration-300 border-2 border-[#f6f6f7] rounded-lg text-left items-start bg-white">
        <img src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050Q05125O9.png" alt="Solution" className="w-44 h-44 mb-4" />
        <h3 className="text-[30px] font-bold mb-2">Secure And Reliable
        </h3>
        <p className="text-gray-600 text-[20px]">
        By implementing security measures such as data encryption, identity authentication, and access control, a secure and reliable solution reduces risks for users a...
        </p>
      </div>
      <div className="flex flex-col p-6 transition-shadow duration-300 border-2 border-[#f6f6f7] rounded-lg text-left items-start bg-white">
        <img src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050Q05044528.png" alt="Solution" className="w-44 h-44 mb-4" />
        <h3 className="text-[30px] font-bold mb-2">Integrated Solution
        </h3>
        <p className="text-gray-600 text-[20px]">
        An integrated solution simplifies operational processes, enhances overall performance, and reduces the complexity of management and maintenance.
        </p>
      </div>
    
    </div>
  </div>
</section>
<section className="relative bg-cover bg-center h-[800px]" style={{ backgroundImage: "url('https://www.trenditen.com/wp-content/uploads/2023/12/banner-7.jpg')" }}>
  <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay để làm mờ ảnh nền */}
  
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">
    <h2 className="absolute text-3xl md:text-[90px] font-bold text-white top-24">
    What We Provide?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    <div className="flex flex-col items-start text-white text-left py-10">
  <div className="w-48 h-48 mb-4 flex justify-start items-start">
    <img 
      src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050Q23102A3.png" 
      className="w-32 h-32" 
      alt="Software Services"
    />
  </div>
  <h3 className="font-semibold text-[30px] mb-2">Software Services</h3>
  <p className="text-[20px]">
    Hemipay supports de-cashier slicker payments, ordering, selling, inventory, stocking, membership, etc. It connects people, product and store together to make seamless transactions.
  </p>
</div>


<div className="flex flex-col items-start text-white text-left py-10">
  <div className="w-48 h-48 mb-4 flex justify-start items-start">
    <img 
      src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050Q12K4164.png" 
      className="w-32 h-32" 
      alt="Hardware Devices"
    />
  </div>
  <h3 className="font-semibold text-[30px] mb-2">Hardware Devices</h3>
  <p className="text-[20px]">
    Hemipay provides a wide series of smart terminals for handheld, tablet, counter, financial and non-financial use which are applicable to diverse retail scenarios.
  </p>
</div>
</div>
  </div>
</section>
<section class="bg-gray-100 py-16 relative h-[700px] bg-cover bg-center" style={{backgroundImage: "url('https://www.trenditen.com/wp-content/uploads/2023/12/banner-8.jpg')"}}>
  <div className="flex items-center justify-end absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 pr-8 text-black">
    <div>
      <h3 className="text-[45px] font-semibold mb-4">Payment Services</h3>
      <div>
        <h4 className="text-[28px] font-medium mb-2">Payment Services</h4>
        <p className="text-[20px] w-2/3">
          Hemipay offers a cloud-based payment platform with unified payment gateway, tailored merchant applications and operation platforms which can provide major payment services to merchants.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#f6f6f7] h-[700px]">
  <div className="max-w-[1400px] mx-auto px-4 py-12">
    <h2 className="text-3xl md:text-[45px] font-bold text-center mt-16 mb-6">Elevating The Payment Experience
    </h2>    
    <p className="text-center mb-6 text-[20px] text-gray-400">Empowering all customers for a smoother and more convenient experience.
</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">      
      <div className="flex flex-col p-6 transition-shadow duration-300 text-left items-center">
        <img src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050Q443312B.png" alt="Solution" className="w-40 h-40 mb-4" />
        <h3 className="text-[30px] font-bold mb-2">Flexible
        </h3>
      </div>
      <div className="flex flex-col p-6 transition-shadow duration-300text-left items-center">
        <img src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050Q44252124.png" alt="Solution" className="w-40 h-40 mb-4" />
        <h3 className="text-[30px] font-bold mb-2">Efficient

        </h3>
      </div>
      <div className="flex flex-col p-6 transition-shadow duration-300 text-left items-center">
        <img src="http://www.hemiiot.com/uploads/allimg/20240508/1-24050Q4415b06.png" alt="Solution" className="w-40 h-40 mb-4" />
        <h3 className="text-[30px] font-bold mb-2">Secure

        </h3>
      </div>
    
    </div>
  </div>
  <p className="text-center text-[16px] text-gray-400">Choose secure, eficient, and flexible payment methods, tailor your payment experience to your heart’s content.
</p>
    
</section>

   </div>
  );
};

export default SolutionPage;
