

import React from 'react';
import "./style.scss"
import Location from "../../../assets/icons/Icon.svg";
import Github from "../../../assets/icons/github.svg";
import Yashil from "../../../assets/icons/icon-dot-emerald-500.svg";
import Twitter from "../../../assets/icons/twitter.svg";
import Nimabu from "../../../assets/icons/nimabu.svg";
import Img from "../../../assets/images/Pic.png";

const Intro = () => {
    return (
        <section id="intro" className="md:px-4 py-10  dark:#030712 mt-[100px]">
            <div className="container mx-auto dark:#030712">
                <div className=" dark:bg-[#030712] flex flex-col-reverse md:flex-row gap-x-[80px]">
                    <div className="max-w-[768px] dark:text-white ">
                        <h2 className="dark:text-white text-3xl  max-w-[600px] text-[#111827] font-bold mt-[200px] mb-2 md:mt-[30px] md:mb-6">Hi, I’m Mukhriddin 👋</h2>
                        <p className="dark:text-white text-lg font-normal mb-8 max-w-[620px] text-[#4B5563] font-[Inter]">
                            I'm a full stack developer with a focus on creating exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
                        </p>
                        <div className="mt-5 mb-5 md:mt-[120px] ">    <div className="flex items-center mb-4">
                            <img src={Location} alt="" className="w-6 h-6 mr-2" />
                            <p className='dark:text-white text-base font-normal   text-[#4B5563] font-[Inter]'> Tashkent, Chilonozor</p>
                        </div>

                            <div className="flex items-center">
                                <img src={Yashil} alt="" className="w-6 h-6 mr-2" />
                                <p className='dark:text-white text-base font-normal  text-[#4B5563] font-[Inter]'>Available for new projects</p>
                            </div></div>

                    </div>

                    <div className="dark:bg-[#030712]md:w-1/3 mt-5 ml-10 ">
                        <div class="vv">
                            <img className="top-image" src={Img} alt="Base Image" />
                            <div className="bottom-image"></div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-x-4 mt-8 dark:[#030712]">
                    <img src={Github} alt="" className="w-6 h-6" />
                    <img src={Twitter} alt="" className="w-6 h-6" />
                    <img src={Nimabu} alt="" className="w-6 h-6" />
                </div>
            </div>
        </section>
    );
};

export default Intro;

