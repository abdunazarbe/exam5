import "./style.scss";
import React from "react";
import { useState, useEffect } from "react";
import Logo from "../../assets/icons/logo.svg"
import iconButton from "../../assets/icons/Icon Button.svg"


const index = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true" || false
    );

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem("darkMode", newDarkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <header className="w-full absolute top-0  dark:bg-[#030712]">
            <div className="container">
                <nav className="flex justify-between items-center px-[-20px] py-[32px]">
                    <img src={Logo} alt="" />

                    <ul className="md:flex text-center items-center gap-x-[24px] text-[#4B5563]  hover:text-blue-700 font-medium " >
                        <li className="text-[#4B5563]  hover:text-blue-700 font-medium md:text-base dark:text-[#FFFFFF]">
                            <a href="#About">About</a>

                        </li>

                        <li className="dark:text-[#FFFFFF] text-[#4B5563]  hover:text-blue-700 font-medium md:text-base">
                            <a href="#work">Work</a>

                        </li>

                        <li className="dark:text-[#FFFFFF] text-[#4B5563]  hover:text-blue-700 font-medium md:text-base ">
                            <a href="#Feedback"></a>
                            Testimonals
                        </li>

                        <li className="dark:text-[#FFFFFF] text-[#4B5563]  hover:text-blue-700 font-medium md:text-base ">
                            Contact
                        </li>

                        <div class="vl"></div>
                        <div className="buttons  flex gap-x-5">

                             <i className={`${darkMode ? " moon-icon" : "sun-icon"} bx ${darkMode ? "bx-moon" : "bx-sun"}`} onClick={() => toggleDarkMode()}></i> 
                            <button className="buttoncv dark:text-[#FFFFFF]  hover:text-blue-700  md:text-base bg-[#111827] py-[6px] px-[16px] gap-2 rounded-xl  text-[#F9FAFB] font-[Inter] font-medium">
                                Download Cv
                            </button>
                        </div>




                    </ul>

                    <i class='bx bx-menu md:hidden text-2xl dark:text-[#FFFFFF]'></i>
                </nav>
                <div>

                </div>

            </div>
        </header>
    );
};

export default index;



