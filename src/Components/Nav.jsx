import { MdOutlineMessage } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";

const Nav =() => {
return (
  <nav className=" flex justify-between border-b-2 border-b-gray-800 py-4">
    <div className="flex items-center gap-4">
      <div className="bg-gray-800 p-5 rounded-full" >
      <MdOutlineMessage className="text-xl"/>
      </div>
        <span>Get in touch</span>
    </div>
    <ul className="flex items-center gap-4 text-2xl">
      <li className="md:hidden"><FaInstagram />      </li>
      <li className="md:hidden"><CiFacebook />      </li>
      <li className="md:hidden"><IoLogoYoutube />      </li>
        <li className="hidden md:block md:text-sm">INSTGRAM</li>
        <li className="hidden md:block md:text-sm">FACEBOOK</li>
        <li className="hidden md:block md:text-sm">YOUTUBE</li>
    </ul>
  </nav>
 );

};

export default Nav;
