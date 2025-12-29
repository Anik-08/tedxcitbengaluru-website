"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/header'

const Page = () => {
    const [activeTab, setActiveTab] = useState('events');

    // Array of event data to keep the code clean and avoid repetition
    const events = [
        { name:  'Epoch', date: '6th MAY 2024', src: '/events/Epoch.jpg' },
        { name:  'Aether', date:  '6th MAY 2024', src: '/events/Aether.jpg' },
        { name: 'Zenith', date: '6th MAY 2024', src: '/events/Zenith.jpg' },
        { name: 'Elixir', date: '6th MAY 2024', src:  '/events/Elixir.jpg' },
        { name:  'Thrive', date:  '6th MAY 2024', src: '/events/Thrive.jpg' },
        { name: 'Iridescence', date: '6th MAY 2024', src: '/events/Iridescence.jpg' },
    ];

    // Array of circles data (example)
    const circles = [
        { name: 'Agree to Disagree',  src: '/circles/Agree to Disagree.jpg' },
        { name: 'Beginnings', src: '/circles/Beginnings.jpg'},
        { name: 'Brave it Out', src: '/circles/Brave it Out.jpg'},
        { name: 'Countdown', src: '/circles/Countdown.jpg'},
        { name: 'Criticism', src: '/circles/Criticism.jpg'},
        { name: 'Happiness', src: '/circles/Happiness.jpg'},
        { name: 'Humour', src: '/circles/Humour.jpg'},
        { name: 'Imagination', src: '/circles/Imagination.jpg'},
        { name: 'Irrational', src: '/circles/Irrational.jpg'},
        { name: 'Optimism', src: '/circles/Optimism.jpg'},
        { name: 'Our Bodies', src: '/circles/Our Bodies.jpg'},
        { name: 'Procrastination', src: '/circles/Procrastination.jpg'},
        { name: 'Teamwork', src: '/circles/Teamwork.jpg'},
    ];

    return (
        <section className="relative w-full h-full bg-gradient-to-b from-gray-900 via-gray-900 to-black">
            <Header />

            {/* IMAGE SECTION — The Background */}
            <div className="relative w-full h-full bg-white md:bg-white sm:bg-white">
                <Image
                    src="/images/Group 222.png"
                    alt="Mountain background"
                    width={1920}
                    height={1080}
                    priority
                    className="w-full h-auto object-contain overflow-clip"
                />
                {/* Gradient overlay to help text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
            </div>

            {/* CONTENT SECTION — Now overlapping the image above */}
            <div className="relative z-20 container mx-auto px-6 mt-[-80vh] md:mt-[-120vh] sm:mt-[-100vh] lg:mt-[-350vh] w-full md:w-1/2 sm:w-2/3 flex flex-col items-start pb-20">
                
                {/* Toggle Buttons Section */}
                <div className="mb-12 w-full flex justify-center">
                    <div className="inline-flex backdrop-blur-md rounded-full shadow-xl bg-gray-600 border border-white/20">
                        <button
                            onClick={() => setActiveTab('events')}
                            className={`px-6 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-full text-sm sm:text-base font-semibold uppercase border-none ${
                                activeTab === 'events'
                                    ? 'bg-gradient-to-r from-[#fd0202] via-[#a8000f] to-[#770215] text-white rounded-full'
                                    : 'text-gray-300 hover:text-white bg-transparent'
                            }`}
                        >
                            Events
                        </button>
                        <button
                            onClick={() => setActiveTab('circles')}
                            className={`px-6 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-full text-sm sm:text-base font-semibold uppercase border-none ${
                                activeTab === 'circles'
                                    ? 'bg-gradient-to-r from-[#fd0202] via-[#a8000f] to-[#770215] text-white rounded-full'
                                    : 'text-gray-300 hover:text-white bg-transparent'
                            }`}
                        >
                            Circles
                        </button>
                    </div>
                </div>

                {/* Conditional Content based on Active Tab */}
                {activeTab === 'events' ?  (
                    // EVENTS CONTENT
                    <>
                        {events.map((event, index) => (
                            <div key={index} className="relative w-full rounded-4xl overflow-hidden group mb-12 shadow-2xl">
                                <Image
                                    src={event.src}
                                    alt={`${event.name} background`}
                                    width={1920}
                                    height={1080}
                                    priority
                                    className="w-full h-auto object-contain rounded-4xl grayscale-100 group-hover:grayscale-0 transition-all duration-700"
                                />

                                {/* Glass Effect Date Button - Top Left */}
                                <div className="absolute top-0 left-0">
                                    <button className="bg-[#ff00004d] backdrop-blur-md text-white text-[10px] font-bold px-6 py-3 rounded-br-3xl border-b border-r border-white/20 uppercase tracking-wider shadow-lg">
                                        {event.date}
                                    </button>
                                </div>

                                {/* "Know More" Button - Bottom Center */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-4 sm:bottom-6">
                                    <button className="bg-[#EB0028] hover:bg-[#c4001f] py-2 text-white text-xs font-bold px-4 rounded-full shadow-xl sm:py-3 sm:px-6 sm:text-md md:px-4 md:py-2 md:text-sm transition-all duration-300 hover:scale-105">
                                        Know more
                                    </button>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    // CIRCLES CONTENT
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                      {circles.map((circle, index) => (
                          <div 
                              key={index} 
                              className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden group shadow-xl border border-white/10"
                          >
                              {/* Background Image */}
                              <Image
                                  src={circle.src} // Ensure your circles array has valid image paths
                                  alt={circle.name}
                                  fill
                                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                              />

                              {/* Overlay Gradient (Optional: helps button stand out) */}
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                              {/* "Know More" Button - Centered */}
                              {/* <div className="absolute inset-0 flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pb-4">
                                  <button className="bg-[#EB0028] text-white text-xs font-bold px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition-transform uppercase tracking-widest whitespace-nowrap">
                                      Know more
                                  </button>
                              </div> */}
                              
                          </div>
                      ))}
                  </div>
                )}

            </div>
                                        <footer className="w-full z-50 relative bottom -0 text-center pt-4 text-[14px] text-gray-600">
            Copyright 2023 &copy; TEDxCITBengaluru. This independent TEDx event is operated under license from TED 
        </footer>  
        </section>
    )
}

export default Page