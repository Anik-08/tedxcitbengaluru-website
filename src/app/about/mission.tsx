"use client";
import React from 'react'
import Image from 'next/image'

export default function Mission() {
    return(
        <section className='relative w-full h-screen overflow-hidden bg-[#1F1F1F]'>
            <div className="relative z-10 h-full flex flex-col px-8 lg:px-16 py-8">
                <h2 className="text-[8vh] font-bold text-[#B0B0B0] mb-4" ><span className='text-[#EB0028]'>OUR </span>MISSION</h2>
                <div className='w-[302px] h-[6.24px] bg-[#EB0028] mb-[54.24px]'></div>
                <div className='mb-[110px]'>
                    <div className="space-y-10">
                        <div className="flex items-start gap-4">
                            <div className="w-1 h-[28.57px] bg-[#EB0028] flex-shrink-0 mt-1"></div>
                            <p className="text-white text-lg md:text-xl lg:text-[28.57px] font-normal break-words">
                                To build a community of like-minded individuals  who are eager to learn, share and grow.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-1 h-[28.57px] bg-[#EB0028] flex-shrink-0 mt-1"></div>
                            <p className="text-white text-lg md:text-xl lg:text-[28.57px] font-normal break-words">
                                To create a culture that can be carried forward and can continue inspiring the community.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-1 h-[28.57px] bg-[#EB0028] flex-shrink-0 mt-1"></div>
                            <p className="text-white text-lg md:text-xl lg:text-[28.57px] font-normal break-words">
                                To touch upon different aspects fo life and society through our carefully created events.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-1 h-[28.57px] bg-[#EB0028] flex-shrink-0 mt-1"></div>
                            <p className="text-white text-lg md:text-xl lg:text-[28.57px] font-normal break-words">
                                To nurture and spread ideas on a large scale as possible.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-1 h-[28.57px] bg-[#EB0028] flex-shrink-0 mt-1"></div>
                            <p className="text-white text-lg md:text-xl lg:text-[28.57px] font-normal break-words">
                                To make every event, one worth remembering and looking up to.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-[#eb0028] w-screen h-[230px] text-black -mx-8 lg:-mx-16 items-center justify-around px-8 lg:px-16">
                    <div className="text-center items-center flex">
                        <div className="text-[33.11px] text-left font-normal mr-5">Minutes<br/>Of Talks</div>
                        <div className="text-[96px] font-bold">3<span className='text-[78.92px]'>00+</span></div>
                    </div>
                    <div className="w-px h-25 bg-black"></div>
                    <div className="text-center items-center flex">
                        <div className="text-[33.11px] text-left font-normal mr-5">Speakers</div>
                        <div className="text-[96px] font-bold">3<span className='text-[78.92px]'>0+</span></div>
                    </div>
                    <div className="w-px h-25 bg-black"></div>
                    <div className="text-center items-center flex">
                        <div className="text-[33.11px] text-left font-normal mr-5">Ted Circles</div>
                        <div className="text-[96px] font-bold">1<span className='text-[78.92px]'>2+</span></div>
                    </div>
                    <div className="w-px h-25 bg-black"></div>
                    <div className="text-center items-center flex">
                        <div className="text-[33.11px] text-left font-normal mr-5">Social<br/>Followers</div>
                        <div className="text-[96px] font-bold">8<span className='text-[78.92px]'>50+</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}