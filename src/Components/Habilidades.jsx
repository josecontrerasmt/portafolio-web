import EspecialidadItem from "./EspecialidadItem";
import HabilidadItem from "./HabilidadItem";

export default function Habilidades() {
  return (
    <section className="mt-20 pt-5 md:pt-16" id="habilidades">
      <h2 className="text-center font-bold text-3xl text-secondaryColor md:text-4xl mb-10">
        Habilidades
      </h2>
      <div className="border border-gray-500 p-5 rounded-xl flex flex-col gap-10 md:flex-row md:gap-5 md:items-center md:w-5/6 md:m-auto">
        <div className="flex flex-wrap gap-4 ">
          <HabilidadItem imgHabilidad={"react.png"} nombreHabilidad={"React"} />
          <HabilidadItem imgHabilidad={"css.png"} nombreHabilidad={"CSS3"} />
          <HabilidadItem
            imgHabilidad={"js.png"}
            nombreHabilidad={"JavaScript"}
          />
          <HabilidadItem imgHabilidad={"html.png"} nombreHabilidad={"HTML5"} />
          <HabilidadItem
            imgHabilidad={"next.jpg"}
            nombreHabilidad={"Next Js"}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <HabilidadItem
            imgHabilidad={"bootstrap.png"}
            nombreHabilidad={"Bootstrap"}
          />
          <HabilidadItem
            imgHabilidad={"tailwind.jpg"}
            nombreHabilidad={"Tailwind CSS"}
          />
          <HabilidadItem imgHabilidad={"Sass.png"} nombreHabilidad={"Sass"} />
          <HabilidadItem imgHabilidad={"figma.png"} nombreHabilidad={"Figma"} />
        </div>
        <div className="flex flex-wrap gap-4">
          <HabilidadItem
            imgHabilidad={"github.png"}
            nombreHabilidad={"GitHub"}
          />
          <HabilidadItem imgHabilidad={"git.png"} nombreHabilidad={"Git"} />
          <HabilidadItem imgHabilidad={"mysql.png"} nombreHabilidad={"MySql"} />
          <HabilidadItem imgHabilidad={"php.png"} nombreHabilidad={"PHP"} />
          <HabilidadItem
            imgHabilidad={"wordpress.png"}
            nombreHabilidad={"Wordpress"}
          />
        </div>
      </div>
      <section className="mt-10 grid grid-cols-1 gap-6 lg:gap-4 md:grid-cols-2">
        <EspecialidadItem
          titulo={"Desarrollo de sitios web"}
          descripcion={
            "Soy un desarrollador de sitios web con experiencia en la creación de soluciones digitales personalizadas. Diseño y desarrollo páginas web atractivas, funcionales y de alta calidad que se adaptan a necesidades específicas."
          }
        />
        <EspecialidadItem
          titulo={"Diseño UI / UX"}
          descripcion={
            "Como diseñador de UI/UX, mi enfoque es crear experiencias digitales atractivas y funcionales para los usuarios. Me especializo en el diseño de interfaces de usuario (UI) y en la creación de experiencias de usuario (UX) que sean intuitivas, accesibles y agradables."
          }
        />
      </section>
    </section>
  );
}
