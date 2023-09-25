import "./style.scss";
import React from "react";

import Logo from "../../assets/icons/logo.svg"
import iconButton from "../../assets/icons/Icon Button.svg"


const index = () => {

 
    return (
        <header className="w-full absolute top-0 ">
            <div className="container">
                <nav className="flex justify-between items-center px-[-20px] py-[32px]">
                <img src={Logo} alt="" />
                        
                        <ul className="flex text-center items-center gap-x-[24px] text-[#4B5563]  hover:text-blue-700 font-medium md:text-base" >
                            <li className="text-[#4B5563]  hover:text-blue-700 font-medium md:text-base">
                               About
                            </li>

                            <li className="text-[#4B5563]  hover:text-blue-700 font-medium md:text-base">
                               Work
                            </li>

                            <li className="text-[#4B5563]  hover:text-blue-700 font-medium md:text-base ">
                               Testimonals
                            </li>

                            <li className="text-[#4B5563]  hover:text-blue-700 font-medium md:text-base ">
                               Contact
                            </li>
                                
                            <div class="vl"></div>
                            <div className="buttons  flex gap-x-5">
                                 <img src={iconButton} alt="" />
                                 <button className="buttoncv   hover:text-blue-700  md:text-base bg-[#111827] py-[6px] px-[16px] gap-2 rounded-xl  text-[#F9FAFB] font-[Inter] font-medium">
                                    Download Cv
                                 </button>
                            </div>
                     
                        </ul>

                  

                
                </nav>
                <div>

                </div>

            </div>
        </header>
    );
};

export default index;



