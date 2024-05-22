import './header.css' 

export default function Header() {
  return (
    <header id='inicio' className="md:container md:max-w-5xl m-auto flex flex-col md:flex-row gap-10 md:gap-12 justify-center items-center pt-8 md:pt-0 text-white text-center lg:h-screen md:h-[60vh]">
      <img
        className="borderImg opacity-90 w-52 h-60 md:w-[280px] md:h-[350px] object-top object-cover md:object-center "
        src="perfil.png"
        alt="Foto Perfil"
      />
      <div className="flex flex-col gap-12 w-96 md:border-y-2 md:pt-7 md:pb-10 ">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold md:text-5xl">
            Jose Contreras Martínez
          </h1>
          <h2 className="text-xl text-secondaryColor font-bold">
            Desarrollador Web Frontend
          </h2>
          <p className="text-sm font-semibold italic">
            Enfocado en mejorar constantemente<br /> y seguir aprendiendo.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-10">
          <a href='Jose-Felix-Trinidad-Contreras-Martínez-CV.pdf' className="bg-secondaryColor text-primaryColor font-semibold py-2 px-4 rounded-md hover:shadow-boxShadow transition duration-300 w-40 m-auto md:m-0 cursor-pointer" download>
            Descargar CV
          </a>
          {/* Redes  */}
          <div className="flex gap-8 justify-center">
            <a
              className="text-3xl hover:text-secondaryColor transition-all duration-300"
              href="https://github.com/josecontrerasmt" target='_blank' rel='noopener noreferrer'
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              className="text-3xl hover:text-secondaryColor transition-all duration-300"
              href="https://www.linkedin.com/in/jose-contreras-martinez-34a4bb2ab/" target='_blank' rel='noopener noreferrer'
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
