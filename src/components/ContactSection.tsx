import React from "react";
import {
  PiInstagramLogoFill,
  PiWhatsappLogoFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-8 py-20">
      <h1 className="text-3xl tracking-tight md:text-4xl text-gray-300 font-special-gothic">
        FALE COMIGO!
      </h1>
      <div className="flex itens-center justify-evenly p-2 rounded-l-4xl rounded-r-4xl shadow shadow-green-100/20 text-gray-500 w-100">
        <Link href="https://www.instagram.com/dev.wilker/" target="_blank" className="hover:text-green-900">
          <PiInstagramLogoFill size={30} className="cursor-pointer" />
        </Link>
        <Link href="https://wa.me/5534993210534" target="_blank" className="hover:text-green-900">
          <PiWhatsappLogoFill size={30} className="cursor-pointer" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/wilker-martins-22238a370/"
          target="_blank" className="hover:text-green-900">
          <PiLinkedinLogoFill size={30} className="cursor-pointer" />
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
