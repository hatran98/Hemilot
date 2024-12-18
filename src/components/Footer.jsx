import { FaPhone, FaFacebook, FaInstagram, FaTelegramPlane } from 'react-icons/fa'; // Import các icon từ React Icons

const Footer = () => {
  return (
    <footer className="bg-[#3A62AD] text-white p-6">
      <div className="text-center mb-6 flex justify-center">
        {/* Thông tin liên lạc */}
        <div className="flex space-x-20 mb-4 text-lg justify-space-around">
  <div>
    <span className="font-semibold">Phone: </span>
    <span>+85266491585</span>
  </div>
  <div>
    <span className="font-semibold">E-mail: </span>
    <span>hemipay@gmail.com</span>
  </div>
  <div>
    <p>Monday-Friday: 9am to <br></br>
    11.00pm; Sunday: Closed</p>
  </div>
</div>
      </div>
      <div className="flex justify-center space-x-6">
          <a href="tel:+85266491585" className="text-white hover:text-gray-300">
            <FaPhone size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaTelegramPlane size={24} />
          </a>
        </div>

    </footer>
  );
};

export default Footer;
