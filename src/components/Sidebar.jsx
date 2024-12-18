import React, { useState } from 'react';

const Sidebar = () => {
  // State để điều khiển việc mở/đóng sidebar trên mobile
  const [isOpen, setIsOpen] = useState(false);

  // Hàm để toggle sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Nút mở sidebar trên màn hình nhỏ */}
      <button
        className="md:hidden p-4 text-white"
        onClick={toggleSidebar}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 h-full p-4 fixed md:relative transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <ul>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-600 rounded">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-600 rounded">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-600 rounded">
              Users
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
