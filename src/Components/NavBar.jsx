import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <nav className="text-white bg-[#080508] fixed w-full bottom-0 left-0 md:top-0 md:bottom-auto px-5 z-50">
      <ul className="md:container md:max-w-5xl m-auto w-full  flex justify-center gap-4 md:gap-14 items-center py-4 md:pt-5 font-semibold overflow-hidden text-xs md:text-[1em]">
        <NavItem titulo={"Inicio"} item={"bi bi-house-fill"} link={'inicio'}/>
        <NavItem titulo={"Proyectos"} item={"bi bi-building-gear"} link={'proyectos'}/>
        <NavItem titulo={"Habilidades"} item={"bi bi-gear-fill"} link={'habilidades'}/>
        <NavItem titulo={"Sobre mi"} item={"bi bi-person-fill"} link={'about'}/>
        <NavItem titulo={"Contacto"} item={"bi bi-envelope-at-fill"} link={'contacto'}/>
      </ul>
    </nav>
  );
}
