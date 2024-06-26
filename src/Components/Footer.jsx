import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";

const Footer =() => {
return (

  <footer className="flex justify-between p-4 border-b-2 border-b-gray-800 py-4">
    <div>
        <span> Copyright © 2024 Aramedia Construction Company  </span>
    </div>

    <ul className="flex items-center gap-4 text-2xl">
      <li className="md:hidden"><FaInstagram />      </li>
      <li className="md:hidden"><CiFacebook />      </li>
      <li className="md:hidden"><IoLogoYoutube />      </li>
        <li className="hidden md:block md:text-sm">INSTGRAM</li>
        <li className="hidden md:block md:text-sm">FACEBOOK</li>
        <li className="hidden md:block md:text-sm">YOUTUBE</li>
    </ul>
   
   
  </footer>
)
};


export default Footer ;