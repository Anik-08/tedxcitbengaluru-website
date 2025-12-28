"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface TeamMember {
    name: string;
    image: string;
}

interface EventTeam {
    organizers: TeamMember[];
    leads: TeamMember[];
}

const teamData: Record<string, EventTeam> = {
    EPOCH: {
        organizers: [
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
        ],
        leads: [
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
        ],
    },
    AETHER: {
        organizers: [
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
        ],
        leads: [
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
        ],
    },
    ZENITH: {
        organizers: [
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
        ],
        leads: [
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
        ],
    },
    ELIXIR: {
        organizers: [
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
        ],
        leads: [
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
        ],
    },
    THRIVE: {
        organizers: [
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
        ],
        leads: [
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
        ],
    },
    IRIDESCENCE: {
        organizers: [
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
        ],
        leads: [
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
            { name: "Name Here", image: "" },
        ],
    },
};

const events = ["EPOCH", "AETHER", "ZENITH", "ELIXIR", "THRIVE", "IRIDESCENCE"];

export default function Team() {
    const [selectedEvent, setSelectedEvent] = useState<string>("EPOCH");
    
    const currentTeam = teamData[selectedEvent];

    return (
        <section className='relative w-full overflow-hidden bg-[#1F1F1F]'>
            <div className="relative z-10 h-full flex flex-col px-8 lg:px-16 py-8">
                <h2 className="text-[8vh] font-bold text-[#B0B0B0] mb-0" >MEET OUR <span className='text-[#EB0028]'>CORE</span> TEAM</h2>
                <div className='w-[705px] h-[6.24px] bg-[#EB0028] mb-[54.24px] rounded-2xl'></div>
                <ul className="flex w-[715px] justify-around">
                    {events.map((event) => (
                        <li 
                            key={event}
                            onClick={() => setSelectedEvent(event)}
                            className={`cursor-pointer flex flex-col items-center text-center text-[16.71px] font-bold px-8 py-3 rounded-full transition-colors hover:[background:linear-gradient(99deg,#EB0028_38%,#860017_100%)] ${
                                selectedEvent === event 
                                    ? '[background:linear-gradient(99deg,#EB0028_38%,#860017_100%)]' 
                                    : ''
                            }`}
                        >
                            {event}
                        </li>
                    ))}
                </ul>
            </div>
            {/* content */}
            <div className='relative w-full min-h-screen bg-[#1f1f1f] pb-16'>
                <div className="absolute top-0 right-0 bottom-0 w-full md:w-1/2 pointer-events-none">
                    <Image
                        src="/images/X1.svg"
                        alt="Red X background"
                        fill
                        className="object-cover object-right rotate-180 ml-[250px]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-transparent to-transparent"></div>
                </div>
                
                {/* Organizers Section */}
                <h2 className="text-[4vh] font-semibold text-[#EB0028] mb-8 px-16">ORGANIZERS</h2>
                <div className="grid grid-cols-4 gap-6 px-16 mb-16 relative z-10">
                    {currentTeam.organizers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-[200px] h-[180px] bg-[#3A3A3A] rounded-2xl overflow-hidden mb-3">
                                {member.image ? (
                                    <Image 
                                        src={member.image} 
                                        alt={member.name}
                                        width={200}
                                        height={180}
                                        className="w-full h-full object-cover"
                                    />
                                ) : null}
                            </div>
                            <span className="text-[#B0B0B0] text-lg">{member.name}</span>
                        </div>
                    ))}
                </div>
                
                {/* Leads Section */}
                <h2 className="text-[4vh] font-semibold text-[#EB0028] mb-8 px-16">LEADS</h2>
                <div className="grid grid-cols-4 gap-6 px-16 relative z-10">
                    {currentTeam.leads.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-[200px] h-[180px] bg-[#3A3A3A] rounded-2xl overflow-hidden mb-3">
                                {member.image ? (
                                    <Image 
                                        src={member.image} 
                                        alt={member.name}
                                        width={200}
                                        height={180}
                                        className="w-full h-full object-cover"
                                    />
                                ) : null}
                            </div>
                            <span className="text-[#B0B0B0] text-lg">{member.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}