import { FaWhatsapp, FaSkype, FaArrowUp, FaFacebookMessenger } from 'react-icons/fa'; // Import các icon

const LiveChat = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-0 right-0 p-6 space-y-6 z-50">
      {/* WhatsApp Icon */}
      <div className="flex flex-col items-center border-2 border-gray-300 bg-white rounded-md w-20 justify-center cursor-pointer">
      <a
          href="https://wa.me/85266491585"
          target="_blank"
          rel="noopener noreferrer"
          className="block border-2 border-green-500 text-green-500 rounded-full shadow-lg hover:bg-green-500 hover:text-white transition-colors mt-2"
        >
          <FaWhatsapp size={16} />
        </a>
        <span className="mt-2 text-sm text-gray-700">WhatsApp</span>
      </div>

      {/* Skype Icon */}
      <div className="flex flex-col items-center border-2 border-gray-300 bg-white rounded-md w-20 justify-center cursor-pointer">
        <a
          href="skype:live:hemipay?chat"
          target="_blank"
          rel="noopener noreferrer"
          className="block border-2 border-blue-500 text-blue-500 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-colors mt-2"
        >
          <FaSkype size={24} />
        </a>
        <span className="mt-2 text-sm text-gray-700">Skype</span>
      </div>

      {/* Telegram Icon */}
      <div className="flex flex-col items-center border-2 border-gray-300 bg-white rounded-md w-20 justify-center cursor-pointer">
        <a
          href="https://t.me/hemipay"
          target="_blank"
          rel="noopener noreferrer"
          className="block border-2 border-blue-400 text-blue-400 rounded-full shadow-lg hover:bg-blue-400 hover:text-white transition-colors  mt-2"
        >
          <FaFacebookMessenger size={24} />
        </a>
        <span className="mt-2 text-sm text-gray-700">Message</span>
      </div>

      {/* Scroll to Top Icon */}
      <div className="flex flex-col items-center border-2 border-gray-300 bg-white rounded-md w-20 justify-center cursor-pointer" 
          onClick={scrollToTop}
      >
        <button
          className="block border-2 border-gray-800 text-gray-800 rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition-colors mt-2"
        >
          <FaArrowUp size={24} />
        </button>
        <span className="mt-2 text-sm text-gray-700">Scroll Top</span>
      </div>
    </div>
  );
};

export default LiveChat;
