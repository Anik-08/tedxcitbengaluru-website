"use client"
import React from 'react'
import Image from 'next/image'
import ImageHolder from './imageholder'

export default function AboutUs() {
    return(
        <section className='relative w-full h-screen overflow-hidden bg-[#1F1F1F]'>
            <div className="absolute inset-0">
                <Image
                    src="/images/about_content_bg.svg"
                    alt="graphics background"
                    fill
                    className="object-cover object-bottom w-full h-full"
                    priority
                    sizes="100vw"
                />
            </div>
            <div className="relative z-10 h-full flex flex-col px-8 lg:px-16 py-8">
                <h2 className="text-[8vh] font-bold text-black mb-4" >ABOUT <span className='text-[#EB0028]'>US</span></h2>
                <p className="text-[#1F1F1F] text-lg md:text-xl lg:text-[26px] font-normal break-words mb-6">
                    TEDxCITBengaluru is an independently organized TED event based in Cambridge Institute of Technology, Bangalore. We are a team who strive to bring to you, top notch TEDx events. We firmly believe that ideas have the power to change the world. Therefore, here we are, giving you an experience odf different types of TED events, all of them, unique and a means to share ideas worth spreading!
                </p>
                <div className="flex-1 flex items-center justify-center w-[1200px] m-auto">
                    <ImageHolder images={['/about/image1.jpg','/about/image1.jpg','/about/image1.jpg','/about/image1.jpg','/about/image1.jpg','/about/image1.jpg','/about/image1.jpg','/about/image1.jpg',]} />
                </div>
            </div>  
        </section>
    )
}