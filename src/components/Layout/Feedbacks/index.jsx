import React from 'react';
import User from "../../../assets/icons/icon-avatar.svg"
import Uzum from "../../../assets/icons/akaxon.svg"
const index = () => {
    return (
        <section id='Feedback' >
            <div className="container">
                <div className='w-full dark:bg-[#1F2937] block   bg-[#F9FAFB] items-center  md:px-5   md:py-[80px]'>
                    <button  className='dark:text-white rounded-xl text-[#4B5563] mt-5 mb-6 ml-[120px] md:ml-[500px]  font-medium text-base font-[Inter] bg-[#E5E7EB] py-2 px-5'>Testimonials</button>
                    <h6 className='font-normal text-center  font-[Inter]  mb-5  text-xl text-[#4B5563 ]'>Nice things people have said about me:</h6>
                    <div className="past md:px-[100px] py-[20px] px-5 block md:flex gap-x-12">

                        <div className="user1 max-w-[380px] mb-5 block bg-[#FFFFFF]  items-center p-12 rounded-xl">
                            <div className="img ml-[100px] md:ml-[50px]">
                                <img src={User} alt="" />
                            </div>
                            <div className="texts  pt-5">
                                <p className='font-normal max-w-[276px]  font-[Inter]  mb-5  text-base text-gray-500'>“““Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>

                                <h5 className='font-semibold  text-center font-[Inter]  mb-2  text-xl text-gray-900'>Dilshod Buymurodov</h5>
                                <h6 className='font-normal  text-center  font-[Inter]  mb-5  text-sm text-gray-500'>Founder - Paymart.uz</h6>
                            </div>

                        </div>

                        <div className="user2 max-w-[380px] mb-5 block bg-[#FFFFFF]  items-center p-12 rounded-xl">
                            <div className="img  ml-[100px] md:ml-[50px]">
                                <img src={Uzum} alt="" />
                            </div>
                            <div className="texts  pt-5 ">
                                <p className='font-normal max-w-[280px] font-[Inter]  mb-5  text-base text-gray-500'>““Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.””</p>

                                <h5 className='font-semibold  text-center font-[Inter]  mb-2  text-xl text-gray-900'>Djasur Djumaev</h5>
                                <h6 className='font-normal  text-center  font-[Inter]  mb-5  text-sm text-gray-500'>Co-Founder - Uzum.uz</h6>
                            </div>

                        </div>

                        <div className="user1max-w-[380px] mb-5 block bg-[#FFFFFF]  items-center p-12 rounded-xl">
                            <div className="img ml-[100px] md:ml-[50px]">
                                <img src={User} alt="" />
                            </div>
                            <div className="texts  pt-5">
                                <p className='max-w-[280px] font-normal  font-[Inter]  mb-5  text-base text-gray-500'>““Mukhriddin was extremely easy and pleasant to work with and he truly cares about the project being a success. Mukhriddin has a high level of knowledge and was able to work on my Full stack application without any issues.”.”</p>

                                <h5 className='font-semibold  text-center font-[Inter]  mb-2  text-xl text-gray-900'>Avaz Aminov</h5>
                                <h6 className='font-normal  text-center  font-[Inter]  mb-5  text-sm text-gray-500'>PM - Solution Lab</h6>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;