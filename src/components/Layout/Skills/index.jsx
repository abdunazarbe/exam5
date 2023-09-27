import React from 'react';
import "./style.scss"
import Javascript from "../../../assets/icons/iconjavascript.svg"
import Typescipt from "../../../assets/icons/icontypescript.svg"
import Reactt from "../../../assets/icons/iconreact.svg"
import Nextjs from "../../../assets/icons/iconnextjs.svg"
import Nodejs from "../../../assets/icons/iconnodejs.svg"
import Express from "../../../assets/icons/iconexpress.svg"
import Nestjs from "../../../assets/icons/iconnest.svg"
import Socket from "../../../assets/icons/iconsocket.svg"
import PostgerelSqql from "../../../assets/icons/iconpostgresql.svg"
import Mongodb from "../../../assets/icons/iconmongodb.svg"
import Sass from "../../../assets/icons/iconsass.svg"
import Tailwindscss from "../../../assets/icons/icontailwindcss.svg"
import Laravelt from "../../../assets/icons/iconlaravel.svg"
import Vue from "../../../assets/icons/iconvue.svg"
import Nuxt from "../../../assets/icons/iconnuxt.svg"
import Git from "../../../assets/icons/GITr.svg"
const index = () => {
    return (
        <div>
            <section id="skills">
                <div className="container">
                    <div className="skillls dark:bg-[#030712] w-full block    items-center  px-5 py-[80px]">
                        <button className='rounded-xl  ml-[150px] mb-6 md:ml-[500px] text-[#4B5563]  font-medium text-base font-[Inter] bg-[#E5E7EB] py-1 px-5'>Skills</button>
                        <h3 className='font-normal text-center  font-[Inter]  mb-5  text-xl text-[#4B5563 ]'>The skills, tools and technologies I am really good at:</h3>
                        <div className="ikons justify-between mb-[60px]  flex-wrap flex gap-x-10 gap-y-5 md:gap-x-[70px]">
                      
                                <div className="javascript">
                                        <img src={Javascript} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Javascript</p>
                                    </div>
                                    <div className="typescript items-center">
                                        <img src={Typescipt} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>TypeScript</p>
                                    </div>

                                    <div className="reacts">
                                        <img src={Reactt} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>React</p>
                                    </div>
                                    <div className="nextjs">
                                        <img src={Nextjs} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Nextjs</p>
                                    </div>
                                    <div className="nodejs">
                                        <img src={Nodejs} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>NodeJs</p>
                                    </div>

                                    <div className="expressjs">
                                        <img src={Express} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>expressjs</p>
                                    </div>

                                    <div className="nestjs">
                                        <img src={Nestjs} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>NestJs</p>
                                    </div>

                                    <div className="socker">
                                        <img src={Socket} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>socket.io</p>
                                    </div>

                                <div className="Postgrelsql">
                                    <img src={PostgerelSqql} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>PostgreSQL</p>
                                </div>
                                <div className="MongoDB items-center">
                                    <img src={Mongodb} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>MongoDB</p>
                                </div>

                                <div className="Sass/Scss">
                                    <img src={Sass} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Sass/Scss</p>
                                </div>
                                <div className="Tailwindcss">
                                    <img src={Tailwindscss} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Tailwindcss</p>
                                </div>
                                <div className="Laravel pb-3">
                                    <img src={Laravelt} alt="" />
                                    <p className='font-normal text-center  font-[Inter]    text-lg text-[#4B5563 ]'>Laravel(PHP)</p>
                                </div>

                                <div className="vuejs mt-[10px]">
                                    <img src={Vue} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Vue.js</p>
                                </div>

                                <div className="Nuxt.js">
                                    <img src={Nuxt} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Nuxt.js</p>
                                </div>

                                <div className="Git">
                                    <img src={Git} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Git</p>
                                </div>

                                {/* <div className="posttogit  flex-wrap  gap-x-[40px]  gap-y-5 md:gap-x-[70px] flex ">

                                </div>
                                <div className="Postgrelsql">
                                    <img src={PostgerelSqql} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>PostgreSQL</p>
                                </div>
                                <div className="MongoDB items-center">
                                    <img src={Mongodb} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>MongoDB</p>
                                </div>

                                <div className="Sass/Scss">
                                    <img src={Sass} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Sass/Scss</p>
                                </div>
                                <div className="Tailwindcss">
                                    <img src={Tailwindscss} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Tailwindcss</p>
                                </div>
                                <div className="Laravel pb-3">
                                    <img src={Laravelt} alt="" />
                                    <p className='font-normal text-center  font-[Inter]    text-lg text-[#4B5563 ]'>Laravel(PHP)</p>
                                </div>

                                <div className="vuejs mt-[10px]">
                                    <img src={Vue} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Vue.js</p>
                                </div>

                                <div className="Nuxt.js">
                                    <img src={Nuxt} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Nuxt.js</p>
                                </div>

                                <div className="Git">
                                    <img src={Git} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Git</p>
                                </div> */}
                          
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default index;