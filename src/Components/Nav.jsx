import  { useState, useEffect, useRef } from 'react';
import { MdOutlineMessage } from 'react-icons/md';
import { IoMdMenu } from 'react-icons/io';

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownOpen]);

  
  return (
    <nav className="flex justify-between border-b-2 border-b-gray-800 py-4 relative">
      <div className="flex items-center gap-4">
        <div className="bg-gray-800 p-5 rounded-full hover:text-yellow-400">
          <MdOutlineMessage className="text-xl" />
        </div>
        <span className="hover:text-yellow-400">Get in touch</span>
      </div>
      <ul className="flex items-center gap-4 text-2xl">
        <li className="md:hidden">
          <button onClick={toggleDropdown} className="hover:text-yellow-400 focus:outline-none">
            <IoMdMenu />
          </button>
        </li>
        <li className="hidden md:block md:text-sm">
          <nav className="flex space-x-4">
            <a href="#" className="text-white hover:text-yellow-400 text-lg">Home</a>
            <a href="#" className="text-white hover:text-yellow-400 text-lg">Services</a>
            <a href="#" className="text-white hover:text-yellow-400 text-lg">History</a>
            <a href="#" className="text-white hover:text-yellow-400 text-lg">About Us</a>
            <a href="#" className="text-white hover:text-yellow-400 text-lg">Contact Us</a>
          </nav>
        </li>
      </ul>
      {dropdownOpen && (
        <div ref={dropdownRef} className="dropdown-menu absolute top-16 right-0 w-full bg-gray-800 z-50 p-4">
          <nav className="flex flex-col items-center space-y-4 bg-yellow-300 py-8 drop-shadow-lg border-gray-400">
            <a href="#" className="text-white font-bold text-lg">Home</a>
            <a href="#" className="text-white font-bold text-lg">Services</a>
            <a href="#" className="text-white font-bold text-lg">About Us</a>
            <a href="#" className="text-white font-bold text-lg">History</a>
            <a href="#" className="text-white font-bold text-lg">Contact Us</a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Nav;
