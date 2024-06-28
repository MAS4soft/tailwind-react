import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";

const Footer =() => {
return (

  <footer className="flex justify-between p-4 border-b-2 border-b-gray-800 py-4">
    <div>
        <span> Copyright © 2024 Aramedia Construction Company  </span>
    </div>

    <ul className="flex items-center justify-center  gap-2 px-4 text-2xl">
      <li className="hover:text-yellow-400 md:hidden"><FaInstagram />      </li>
      <li className="hover:text-yellow-400 md:hidden"><CiFacebook />      </li>
      <li className="hover:text-yellow-400 md:hidden"><IoLogoYoutube />      </li>
        <li className="hidden hover:text-yellow-400 md:block md:text-sm">INSTGRAM</li>
        <li className="hidden hover:text-yellow-400 md:block md:text-sm">FACEBOOK</li>
        <li className="hidden hover:text-yellow-400 md:block md:text-sm">YOUTUBE</li>
    </ul>
   
   
  </footer>
)
};


export default Footer ;