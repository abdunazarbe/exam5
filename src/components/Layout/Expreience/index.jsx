import React from 'react';
import Uzum from "../../../assets/icons/uzum.svg"
import Najottalim from "../../../assets/icons/najottalim.svg"
import Itransition from "../../../assets/icons/itransation.svg"
const index = () => {
    return (
        <section id='work' >
            <div className="container">
                <div className='w-full block  dark:bg-[#030712]  bg-[#F9FAFB] items-center  px-10 md:px-5 py-[80px]'>
                  
                    <button className='rounded-xl  text-[#4B5563] mb-6 ml-[120px] md:ml-[500px]  font-medium text-base font-[Inter] bg-[#E5E7EB] py-2 px-5'>Experience</button>
                    <h6 className='font-normal text-center  font-[Inter]  mb-5  text-xl text-[#4B5563 ]'>Here is a quick summary of my most recent experiences:</h6>
                    <div className="past md:px-[130px] py-[20px] block">
                        <div className="uzum dark:bg-[#1F2937] block p-2 bg-[#FFFFFF] rounded-xl md:p-8 md:flex gap-x-[130px]  flex-row max-w-[800px]">
                            <div className="logo">
                                <img src={Uzum} alt="uzm" />
                            </div>

                            <div className="uzum_texts  dark:text-white pt-2   md:gap-y-1  ">
                                <h3 className="textss_title  font-semibold font-[Inter] text-[#111827] text-xl md:mb-5 md:ml-2 block">
                                    Team Lead (Senior Software engineer)
                                </h3>
                                <p className='text-[#4B5563] text-base font-[Inter] font-normal w-[300px] mb-4'>·  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p className='text-[#4B5563] text-base font-[Inter] font-normal w-[300px] mb-4'>·  Ut pretium arcu et massa semper, id fringilla leo semper..</p>
                                <p className='text-[#4B5563] text-base font-[Inter] font-normal w-[300px] mb-4'>·  Sed quis justo ac magna.</p>
                                <p className='text-[#4B5563] text-base font-[Inter] font-normal w-[300px] mb-4'> ·Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div><p className='text-[#4B5563] text-base font-[Inter] font-normal  mb-4'>May 2023 - Present</p></div>
                            </div>







                        </div>

                        <div className="najottalim dark:bg-[#1F2937] mt-4 block p-2 bg-[#FFFFFF] rounded-xl md:p-8 md:flex gap-x-[130px]  flex-row max-w-[800px]">
                            <div className="logo">
                                <img src={Najottalim} alt="uzm" />
                            </div>

                            <div className="uzum_texts  pt-2   md:gap-y-1 ">
                                <h3 className="textss_title  font-semibold font-[Inter] text-[#111827] text-xl mb-5 ml-2">
                                    Head Teacher & Tech Interviewer
                                </h3>
                                <p className='text-[#4B5563] text-base font-[Inter] font-normal w-[300px] mb-4'>·Sed quis justo ac magna.</p>
                                <p className='text-[#4B5563] text-base font-[Inter] font-normal w-[300px] mb-4'>·Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p className='text-[#4B5563] text-base font-[Inter] font-normal w-[300px] mb-4'>·Sed quis justo ac magna.</p>
                                <p className='text-[#4B5563] text-base font-[Inter] font-normal w-[300px] mb-4'> ·Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p className='text-[#4B5563] text-base font-[Inter] font-normal  mb-4'>Apr 2022 - Persent</p>
                            </div>



                        </div>


                        <div className="itransationblock dark:bg-[#1F2937] mt-3 p-2 bg-[#FFFFFF] rounded-xl md:p-8 md:flex gap-x-[130px]  flex-row max-w-[800px]">
                            <div className="logo">
                                <img src={Itransition} alt="uzm" />
                            </div>

                            <div className="uzum_texts dark:text-white   gap-y-1  ">
                                <h3 className="textss_title  font-semibold font-[Inter] text-[#111827] text-xl mb-5 ml-2">
                                    Head Teacher & Tech Interviewer
                                </h3>
                                <p className='text-[#4B5563] text-base font-[Inter] font-normal w-[300px] mb-4'>·Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>

                            </div>

                            <p className='text-[#4B5563] text-base font-[Inter] font-normal  mb-4'>Jul 2021 - 2022 Oct</p>


                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
};

export default index;