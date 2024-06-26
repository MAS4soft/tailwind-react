// src/components/NavBar.jsx
import  { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';

const NavMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="text-white text-2xl">
            <IoMdMenu />
          </button>
        </div>
        
        <div className="hidden md:flex space-x-4">
          <a href="Home" className="text-white text-lg">Home</a>
          <a href="Projects" className="text-white text-lg">Projects</a>
          <a href="Services" className="text-white text-lg">Services</a>
          <a href="About Us" className="text-white text-lg">About Us</a>
          <a href="Contact US" className="text-white text-lg">Contact Us</a>
          
        </div>
      </div>
    </nav>
  );
};

export default NavMenu ;
