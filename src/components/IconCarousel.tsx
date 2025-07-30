'use client';

import React from 'react';

// As importações de ícones permanecem as mesmas
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
    // A função que renderiza os ícones foi revertida para o estilo original.
    const renderIcons = () =>
        icons.map((icon) => (
            <div key={icon.id} className={`mx-8 text-gray-500 ${icon.color} transition-colors text-6xl`}>
                {icon.component}
            </div>
        ));

    return (
        <div className="relative w-full overflow-hidden bg-transparent py-8 bottom-0">
            {/* As sombras nas laterais (fade out) continuam as mesmas */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

            {/* O container da animação usa a classe 'animate-slide' que está no globals.css */}
            <div className="flex animate-slide">
                {/* A estrutura de duplicação para o efeito de loop infinito foi restaurada */}
                <div className="flex flex-shrink-0 items-center justify-around w-full">
                    {renderIcons()}
                </div>
                <div className="flex flex-shrink-0 items-center justify-around w-full" aria-hidden="true">
                    {renderIcons()}
                </div>
            </div>
        </div>
    );
};

export default IconCarousel;