import { MdOutlineMessage } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";

const Nav =() => {
return (
  <nav className=" flex justify-between">
    <div className="flex items-center gap-4">
      <div className="bg-gray-800 p-5 rounded-full" >
      <MdOutlineMessage />
      </div>
        <span>Get in touch</span>
    </div>
    <ul>
      <li><FaInstagram />      </li>
      <li><CiFacebook />      </li>
      <li><IoLogoYoutube />      </li>
    </ul>
  </nav>
 );

};

export default Nav;
