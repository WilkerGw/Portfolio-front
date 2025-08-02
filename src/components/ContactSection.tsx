import React from "react";
import {
  PiInstagramLogoFill,
  PiWhatsappLogoFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-8 py-20">
      <h1 className="text-3xl tracking-tight md:text-4xl text-gray-300 font-special-gothic">
        FALE COMIGO!
      </h1>
      
      {/* Container dos Ícones:
        - Corrigido 'itens-center' para 'items-center'.
        - Adicionado 'gap-x-6' para um espaçamento consistente entre os ícones.
        - 'rounded-full' para uma forma de pílula perfeita.
        - Padding ajustado para ser maior em telas médias (md:px-8).
      */}
      <div className="flex items-center justify-center gap-x-6 rounded-full bg-white/5 px-6 py-3 shadow shadow-green-100/20 text-gray-400 md:gap-x-8 md:px-8 md:py-4">
        
        {/* Links Individuais:
          - A propriedade 'size' foi removida dos ícones.
          - Usamos classes do Tailwind ('h-8 w-8') para controlar o tamanho, permitindo responsividade.
          - Em telas médias (md:), o tamanho dos ícones aumenta para 'h-9 w-9'.
          - Adicionada uma transição suave no hover para a cor e a escala.
        */}
        <Link 
          href="https://www.instagram.com/dev.wilker/" 
          target="_blank" 
          aria-label="Instagram de Wilker Martins"
          className="transition-all duration-300 hover:text-green-400 hover:scale-110"
        >
          <PiInstagramLogoFill className="h-8 w-8 md:h-9 md:w-9" />
        </Link>
        
        <Link 
          href="https://wa.me/5534993210534" 
          target="_blank" 
          aria-label="WhatsApp de Wilker Martins"
          className="transition-all duration-300 hover:text-green-400 hover:scale-110"
        >
          <PiWhatsappLogoFill className="h-8 w-8 md:h-9 md:w-9" />
        </Link>
        
        <Link
          href="https://www.linkedin.com/in/wilker-martins-22238a370/"
          target="_blank" 
          aria-label="LinkedIn de Wilker Martins"
          className="transition-all duration-300 hover:text-green-400 hover:scale-110"
        >
          <PiLinkedinLogoFill className="h-8 w-8 md:h-9 md:w-9" />
        </Link>
        
      </div>
    </section>
  );
};

export default ContactSection;