import { FaPhoneAlt, FaTelegramPlane, FaArrowUp } from 'react-icons/fa'; // Import các icon

const LiveChat = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
<div className="fixed bottom-0 right-0 p-6 space-y-6 z-50">
  {/* Zalo Icon */}
  <div className="flex flex-col items-center border-2 border-gray-300 bg-white rounded-md w-20 justify-center cursor-pointer">
    <a
      href="https://zalo.me/0943668996"
      target="_blank"
      rel="noopener noreferrer"
      className="block border-2 rounded-full hover:text-white transition-colors mt-2 border-blue-600"
    >
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
<path fill="#2962ff" d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"></path><path fill="#eee" d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"></path><path fill="#2962ff" d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"></path><path fill="#2962ff" d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"></path><path fill="#2962ff" d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"></path><path fill="#2962ff" d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"></path>
</svg>
    </a>
    <span className="mt-2 text-sm text-gray-700">Zalo</span>
  </div>

  {/* Call Phone Icon */}
  <div className="flex flex-col items-center border-2 border-gray-300 bg-white rounded-md w-20 justify-center cursor-pointer">
    <a
      href="tel:+84943668996"
      className="block border-2 border-green-500 text-green-500 rounded-full shadow-lg hover:bg-green-500 hover:text-white transition-colors mt-2"
    >
      <FaPhoneAlt size={24} />
    </a>
    <span className="mt-2 text-sm text-gray-700">Call</span>
  </div>

  {/* Telegram Icon */}
  <div className="flex flex-col items-center border-2 border-gray-300 bg-white rounded-md w-20 justify-center cursor-pointer">
    <a
      href="https://t.me/tuanna0703"
      target="_blank"
      rel="noopener noreferrer"
      className="block border-2 border-blue-400 text-blue-400 rounded-full shadow-lg hover:bg-blue-400 hover:text-white transition-colors mt-2"
    >
      <FaTelegramPlane size={24} />
    </a>
    <span className="mt-2 text-sm text-gray-700">Telegram</span>
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
