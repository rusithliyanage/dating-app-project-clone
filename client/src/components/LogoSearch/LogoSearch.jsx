import React from "react";
//import Logo from "../../images/slider/slide_1.jpg";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      {/* <img src={Logo} alt="" /> */}
      <div className="Search">
          <input type="text" placeholder="#Find Chats"/>
          <div className="s-icon">
                <UilSearch/>
          </div>
      </div>
    </div>
  );
};

export default LogoSearch;
