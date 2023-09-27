import React from 'react';
import img from "../../../assets/images/Pic.png"
import "./style.scss"
const index = () => {
    return (
        <section id='About' >
            <div className="container">
                <div className='w-full dark:bg-[#111827] md:block  flex-col    bg-[#F9FAFB] items-center  px-5 py-[80px]'>
                    <button className=' dark-[#ffff] rounded-xl  text-[#4B5563] mb-6  ml-[150px] md:ml-[500px]  font-medium text-base font-[Inter] bg-[#E5E7EB] py-1 px-5'>About me</button>
                    <div className="past px-7 py-[20px] flex flex-col md:flex-row  gap-y-[80px]">
                    <div className="md:w-1/3">
                        <div class="vv px-10">
                            <img className="top-image" src={img} alt="Base Image" />
                            <div className="bottom-image"></div>
                        </div>
                    </div>
                        
                        <div className="past_texts  px-5">
                            <h3 className='font-semibold font-[Inter] max-w-[600px] mt-[150px] md:mt-0  mb-5 text-[#111827] text-2xl md:text-3xl'>Curious about me? Here you have it:</h3>

                            <div className="texgs">

                                <p className=' dark:text-white font-normal max-w-[584px] mb-5 font-[Inter] text-base text-[#4B5563 ]'>I'm a passionate, software engineer who specializes in full stack development (Vue.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me. <br></br></p>
                                <p className='dark:text-white font-normal  max-w-[584px]  mb-5 font-[Inter] text-base text-[#4B5563 ]'>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                                <p className='dark:text-white font-normal max-w-[584px] mb-5 font-[Inter] text-base text-[#4B5563 ]'>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                                <p className='dark:text-white font-normal max-w-[584px] mb-5 font-[Inter] text-base text-[#4B5563 ]'>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Linked where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                                <div className="ps dark:text-white max-w-[584px]">
                                    <p className='font-normal font-[Inter] mb-5 text-base text-[#4B5563 ]'>Finally, some quick bits about me:</p>
                                    <div className="zzzzztexts flex gap-x-10 mb-8">
                                        <div className="be block">
                                            <p className='font-normal  mb-2 font-[Inter] text-base text-[#4B5563 ]'> · B.E. in Computer Engineering</p>
                                            <p className='font-normal   font-[Inter] text-base text-[#4B5563 ]'> · Full time coding</p>
                                        </div>
                                        <div className="fe">
                                            <p className='font-normal  mb-2 font-[Inter] text-base text-[#4B5563 ]'> ·Leadership</p>
                                            <p className='font-normal  mb-1 font-[Inter] text-base text-[#4B5563 ]'> · Project managment</p>
                                        </div>
                                    </div>

                                  




                                </div>

                                <p className=' dark:text-white font-normal font-[Inter]  text-base text-[#4B5563 ] max-w-[590px]'>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;