// src/components/IconCarousel.tsx

'use client';

import React from 'react';
// **CORREÇÃO:** Removidos os ícones não utilizados (FaVuejs, FaFigma, FaHtml5).
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiVercel } from 'react-icons/si';
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
        component: <RiNextjsLine />
    },
    {
        id: 6,
        title: "Vercel",
        color: "hover:text-gray-100",
        component: <SiVercel />
    }
];

const IconCarousel = () => {
    // **CORREÇÃO:** O código `useEffect` foi removido para uma melhor prática,
    // já que a animação foi movida para o arquivo globals.css.
    
    const renderIcons = () =>
        icons.map((icon) => (
            <div key={icon.id} className="flex-shrink-0 mx-8">
                <div
                  className={`
                    aurora-text bg-clip-text text-transparent
                    text-6xl ${icon.color} transition-colors duration-300
                  `}
                >
                  {icon.component}
                </div>
            </div>
        ));

    return (
        <div className="relative w-full overflow-hidden bg-transparent py-8 shadow-lg rounded-xl bottom-0">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
            <div className="flex animate-slide">
                <div className="flex flex-shrink-0 items-center justify-around">
                    {renderIcons()}
                </div>
                <div className="flex flex-shrink-0 items-center justify-around" aria-hidden="true">
                    {renderIcons()}
                </div>
            </div>
        </div>
    );
};

export default IconCarousel;