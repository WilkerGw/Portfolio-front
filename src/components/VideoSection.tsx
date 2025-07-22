import {
  SiCanva,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiGimp,
  SiGithub,
  SiMongodb,
  SiGooglegemini,
  SiVercel,
  SiRender,
} from "react-icons/si";

export function VideoSection() {
  return (
    <section className="relative flex w-full h-screen items-start  justify-center overflow-hidden">
      <div className="z-10 text-center md:text-left my-5">
        <h1 className=" w-full text-center text-4xl font-bold md:text-4xl text-green-300">
          Site Óticas Vizz
        </h1>
        <p className=" w-full text-center text-sm md:text-base text-white opacity-80">
          Site com call actions e sistema de agendamento de exame.
        </p>
      </div>
      <div className="absolute bottom-12 flex between-0 w-full h-1/2 md:w-1">
        <div className="absolute left-0 bottom-15 md:bottom-0 flex flex-col md:flex-row justify-center items-center rounded-2xl z-10 text-white">
          <SiNextdotjs size={30} className="m-4" title="Next.js" />
          <SiTypescript size={30} className="m-4" title="TypeScript" />
          <SiNodedotjs size={30} className="m-4" title="Node.js" />
          <SiMongodb size={30} className="m-4" title="MongoDb" />
        </div>
        {/* Contêiner da Direita */}
        <div className="absolute right-0 bottom-15 md:bottom-0 flex flex-col md:flex-row justify-center items-start rounded-2xl z-10 text-white">
          <SiVercel size={30} className="m-4" title="Vercel" />
          <SiRender size={30} className="m-4" title="Render" />
          <SiCanva size={30} className="m-4" title="Canva" />
          <SiGimp size={30} className="m-4" title="Gimp" />
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-screen h-screen object-cover"
        poster="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
      >
        <source
          src="/videos/background-desk.mp4"
          media="(min-width: 630px)"
          type="video/mp4"
        />
        <source
          src="/videos/background-mob.mp4"
          media=""
          type="video/mp4"
        />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className="absolute w-full bottom-0 flex items-center place-content-between  md:place-content-center p-4 md:gap-8">
        <button className="bg-transparent text-xs text-green-300 border border-green-300 font-bold py-2 px-3 rounded-lg z-10">
          Repositório
        </button>
        <button className="bg-transparent text-xs text-green-300 border border-green-300 font-bold py-2 px-3 rounded-lg z-10">
          Ver Projeto
        </button>
      </div>
    </section>
  );
}
