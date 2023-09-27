import React from 'react';
import "./style.scss"
import img from "../../../assets/images/Picture.png"
import icon from "../../../assets/icons/Icon2.svg"
import nasiya from "../../../assets/images/nasiya.png"
import cambly from "../../../assets/images/camply.png"
const index = () => {
    return (
        <section id='expereince dark:bg-[#1F2937]' >
            <div className="container dark:bg-[#1F2937]">
                <div className='w-full block  px-5  bg-[#FFFFFF]  dark:bg-[#1F2937] items-center   py-[100px] '>
                    <button className='rounded-xl  text-[#4B5563] mb-6 ml-[150px] md:ml-[500px]  font-medium text-base font-[Inter] bg-[#E5E7EB] py-2 px-5'>Work</button>

                    <h3 className='font-normal text-center md:mr-[80px] font-[Inter]  mb-5  text-xl text-[#4B5563 ]'>Some of the noteworthy projects I have built:</h3>
                    <div className="past  md:px-[130px] py-[20px] md:block ">
                        <div className="uzumm max-w-full block  md:mt-8 bg-[#FFFFFF] r md:p-8 md:flex md:gap-x-[130px]  flex-row  h-fit    gap-x-12 rounded-xl border-2">
                            <div className="img bg-[#F3F4F6] pt-24 p-3 ">
                                <img src={img} alt="" />
                            </div>
                            <div className="uzum_texts s  pt-2 flex-row  md:gap-y-1 md:pt-[15px] md:px-12 block  ">
                                <h2 className='text-xl text-[#111827]  font-[Inter] font-bold mt-[30px] mb-3'>Uzum.uz </h2>

                                <p className='max-w-[300px] text-lg font-normal mb-8 w-[620px] text-[#4B5563] font-[Inter]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante <br />ipsum primis in faucibus orci luctus et ultrices posuere cubilia <br /> curae.</p>



                                <div className="gals  block  gap-y-1 max-w-[250px] ">
                                    <div className="vuetonest flex gap-x-[10px]">
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Vue.js</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Nuxt.js</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Typescript</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Nest.js</p>
                                        </div>
                                    </div>
                                    <div className="sqltocypreus mr-5 flex gap-x-2 ">
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>PostgreSQL</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Tailwindcss</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Figma</p>
                                        </div>
                                    
                                      
                                    </div>
                                    <div className="git flex gap-x-2">
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Navie.UI</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Git</p>
                                        </div>

                                    </div>
                                </div>

                                <img src={icon} alt="" className='mb-6 ml-5' />

                            </div>


                        </div>

                        <div className="uzumnasiyauzumm mt-5 md:mt-8 max-w-full block  bg-[#FFFFFF] r md:p-8 md:flex md:gap-x-[130px]  flex-row  h-fit    gap-x-12 rounded-xl border-2">

                            <div className="uzumnasiya_texts  mt-4 pt-2 flex-row  md:gap-y-1 md:pt-[15px] md:px-12 block  ">
                                <h2 className='text-xl text-[#111827]  font-[Inter] font-bold mt-[30px] mb-3'>Uzum nasiya </h2>

                                <p className='text-lg font-normal mb-8 max-w-[620px] text-[#4B5563] font-[Inter]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante <br />ipsum primis in faucibus orci luctus et ultrices posuere cubilia <br /> curae.</p>



                                <div className=" block  gap-y-1 max-w-[250px]">
                                    <div className="vuetonest flex gap-x-[10px]">
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Vue.js</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Nuxt.js</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Typescript</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Nest.js</p>
                                        </div>
                                    </div>
                                    <div className="sqltocypreus flex gap-x-2">
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>PostgreSQL</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Tailwindcss</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Figma</p>
                                        </div>
                                       
                                    </div>
                                    <div className="git flex gap-x-2">
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Navie.UI</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Git</p>
                                        </div>

                                    </div>
                                </div>

                                <img src={icon} alt="" className='mb-6  ml-5' />

                            </div>

                            <div className="img bg-[#F3F4F6]   px-6 pt-12 h-[480px]  ">
                                <img src={nasiya} />
                            </div>


                        </div>

                        <div className="Camblycom  max-w-full block  bg-[#FFFFFF] mt-4 md:p-8 md:flex md:gap-x-[130px]  flex-row  h-fit    gap-x-12 rounded-xl border-2">
                            <div className="img bg-[#F3F4F6]   px-6 pt-16 h-[480px] ">
                                <img src={cambly} alt="" />
                            </div>
                            <div className=" mt-4 pt-2 flex-row  md:gap-y-1 md:pt-[15px] md:px-12 block ">
                                <h2 className='text-xl text-[#111827]  font-[Inter] font-bold mt-[30px] mb-3'>Cambly.com  </h2>

                                <p className='text-lg font-normal mb-8 max-w-[620px] text-[#4B5563] font-[Inter]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante <br />ipsum primis in faucibus orci luctus et ultrices posuere cubilia <br /> curae.</p>



                                <div className="gals block ">
                                    <div className="vuetonest flex gap-x-[10px]">
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Vue.js</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Nuxt.js</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Typescript</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Nest.js</p>
                                        </div>
                                    </div>
                                    <div className="sqltocypreus flex gap-x-2">
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>PostgreSQL</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Tailwindcss</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Figma</p>
                                        </div>
                                     
                                    </div>
                                    <div className="git flex gap-x-2">
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Navie.UI</p>
                                        </div>
                                        <div className="vue rounded-xl  text-[#4B5563] mb-6   font-medium text-sm font-[Inter] bg-[#E5E7EB] py-2 px-5">
                                            <p>Git</p>
                                        </div>

                                    </div>
                                </div>

                                <img src={icon} alt="" className='mb-6 ml-6' />

                            </div>


                        </div>
                    </div>





                </div>
            </div>

        </section >
    );
};

export default index;