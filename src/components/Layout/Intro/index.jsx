import React from 'react';
import Location from "../../../assets/icons/Icon.svg"
import Github from "../../../assets/icons/github.svg"
import Yashil from "../../../assets/icons/icon-dot-emerald-500.svg"
import Twitter from "../../../assets/icons/twitter.svg"
import Nimabu from "../../../assets/icons/nimabu.svg"
import Img from "../../../assets/images/Pic.png"
const index = () => {
    return (
        <section id="intro  ">
            <div className="container">
                <div className="div flex w-full  absolute mt-[120px] gap-x-5">
                    <div className="intro_texts mt-[45px] block w-[75%]">
                        <h2 className='intro_title'>
                            Hi, I’m Mukhriddin 👋
                        </h2>
                        <p className="textss">
                            I'm a full stack developer (React.js & Vue.js and Node.js & Laravel ) with a focus on creating  exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
                        </p>

                        <div className="iconc">
                            <div>
                                <img src={Location} alt="" />
                                <p>Tashkent, Chilonozor</p>
                            </div>

                            <div>
                                <img src={Yashil} alt="" />
                                <p>Available for new projects</p>
                            </div>
                        </div>

                        <div className="apps">
                            <img src={Github} alt="" />
                            <img src={Twitter} alt="" />
                            <img src={Nimabu} alt="" />
                        </div>
                    </div>

                    <div className="img">
                        <img src={Img} alt="" />
                    </div>
                </div>

            </div>
        </section>


    );
};

export default index;