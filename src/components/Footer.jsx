import { FaPhone, FaFacebook, FaInstagram, FaTelegramPlane } from 'react-icons/fa'; // Import các icon từ React Icons

const Footer = () => {
  return (
    <footer className="bg-[#3A62AD] text-white p-6">
      <div className="flex justify-center mb-6 cursor-pointer" onClick={() => window.open('https://trueview.vn/', '_blank')}>
        <img
          src="/images/banner/trueview2.png"
          alt="TRUEVIEW Logo"
          className="w-auto h-8 max-h-10 object-contain"
        />
      </div>


      <div className="text-center mb-6 flex justify-center">
        <div className="flex space-x-20 mb-4 text-lg justify-space-around">
          <div>
            <span className="font-semibold">Phone: </span>
            <span>0943668996</span>
          </div>
          <div>
            <span className="font-semibold">E-mail: </span>
            <span>tuan.nguyen@attvietnam.vn</span>
          </div>
          <div>
            <p>Monday-Friday: 8.00am to <br /> 11.00pm; Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-6">
        <a href="tel:+84943668996" className="text-white hover:text-gray-300">
          <FaPhone size={24} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <FaInstagram size={24} />
        </a>
        <a href="https://t.me/tuanna0703" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <FaTelegramPlane size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
