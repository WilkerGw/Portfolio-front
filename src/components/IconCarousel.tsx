'use client';

import React, { useEffect } from 'react';

import { FaReact, FaNodeJs, FaVuejs, FaFigma, FaHtml5  } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiVercel  } from 'react-icons/si';
import { RiNextjsLine } from "react-icons/ri";


const icons = [
    {
        id: 1,
        title: "React",
        color: "hover:text-blue-500",
        component: <FaReact />
    },
    {
        id: 2,
        title: "Tailwind CSS",
        color: "hover:text-cyan-500",
        component: <SiTailwindcss />
    },
    {
        id: 3,
        title: "JavaScript",
        color: "hover:text-yellow-500",
        component: <SiJavascript />
    },
    {
        id: 4,
        title: "Node.js",
        color: "hover:text-green-500",
        component: <FaNodeJs />
    },
    {
        id: 5,
        title: "Next.js",
        color: "hover:text-gray-100",
        component: <RiNextjsLine  />
    },
    {
        id: 6,
        title: "Vercel",
        color: "hover:text-gray-100",
        component: <SiVercel />
    }
];

const IconCarousel = () => {
    useEffect(() => {
        const css = `
            @keyframes slide {
                from { transform: translateX(0); }
                to { transform: translateX(-100%); }
            }
            .animate-slide { animation: slide 40s linear infinite; }
            .animate-slide:hover { animation-play-state: paused; }
        `;
        const style = document.createElement('style');
        style.id = 'carousel-animation';
        
        if (!document.getElementById('carousel-animation')) {
            style.appendChild(document.createTextNode(css));
            document.head.appendChild(style);
        }

        return () => {
            const styleTag = document.getElementById('carousel-animation');
            if (styleTag) {

            }
        };
    }, []);

    const renderIcons = () =>
        icons.map((icon) => (
            <div key={icon.id} className={`mx-8 text-gray-500 ${icon.color} transition-colors text-6xl`}>
                {icon.component}
            </div>
        ));

    return (
        <div className="relative w-full overflow-hidden bg-transparent py-8 shadow-lg rounded-xl bottom-0">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
            <div className="flex animate-slide">
                <div className="hidden md:flex flex-shrink-0 items-center justify-around w-full">
                    {renderIcons()}
                </div>
                <div className="flex-shrink-0 flex items-center justify-around w-full" aria-hidden="true">
                    {renderIcons()}
                </div>
            </div>
        </div>
    );
};

export default IconCarousel;
