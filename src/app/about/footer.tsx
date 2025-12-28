"use client";
import React from 'react';  
import Image from 'next/image';

export default function Footer() {
    return (
        <section className="relative w-full overflow-hidden" style={{backgroundImage: "linear-gradient(180deg, #454545 0%, #1F1F1F 100%)"}}>
             <div className="absolute inset-0 w-full h-screen mt-[-350px] sm:mt-[-450px] md:mt-[-550px] lg:mt-[-650px] bg-[#1f1f1f] mask-[url('/images/about_content_bg.svg')] mask-no-repeat mask-center mask-contain" ></div>
             <div className="relative z-10 h-full flex flex-col px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 mt-70">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8vh] font-bold text-[#B0B0B0] mb-4 sm:mb-6" >ABOUT <span className='text-[#EB0028]'>TEDX</span></h2>
                <p className="text-[#B0B0B0] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] font-normal break-words mb-6 sm:mb-8 leading-relaxed">
                    TEDx began as an extension of the TED conference, which was founded in California in 1984. TED's mission was to share "ideas worth spreading" across technology, entertainment, and design. In 2009, TEDx was created to allow independent, locally organized events to bring the TED experience to communities worldwide. Each TEDx event follows TED's format and values, offering inspiring talks and fostering meaningful discussions. From its roots in California, TEDx has grown into a global movement. Today, thousands of TEDx events take place around the world. This initiative continues to empower communities to engage with diverse ideas and voices.
                </p>
                
                <div className="mt-6 sm:mt-8 md:mt-10 relative z-10 ">
                    <div className="container mx-auto px-4 sm:px-6">
                        <p className="text-xs sm:text-sm text-center text-gray-500 leading-relaxed">
                            © {new Date().getFullYear()}{' '}
                            <span className="font-semibold text-white">TEDxCITBengaluru</span>.
                            This independent TEDx event is operated under license from TED.
                        </p>
                    </div>
                </div>
             </div>
        </section>
    )
}