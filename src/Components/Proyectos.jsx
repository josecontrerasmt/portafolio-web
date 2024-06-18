import DiseñoCard from "./DiseñoCard";
import ProyectoCard from "./ProyectoCard";

export default function Proyectos() {
  return (
    <section id="proyectos" className="pt-5 md:pt-16">
      <div className="text-center mb-10">
        <h2 className="font-bold text-3xl text-secondaryColor md:text-4xl mb-4">
          Proyectos
        </h2>
        <p className="font-semibold text-lg italic mt-2">
          "Si puedes <span className="text-secondaryColor">imaginarlo</span>{" "}
          puedes <span className="text-secondaryColor">programarlo</span>"
        </p>
      </div>
      <div>
        <h2 className="mb-5 text-xl font-semibold text-secondaryColor">
          Desarrollo web
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProyectoCard
            imgRuta={"ProyectosImgs/rick and morty API.png"}
            tect={["html", "Css", "Js"]}
            titulo={"Rick-and-Morty-Api"}
            descript={
              "Personajes de Rick y Morty utilizando API con fetch y async/await."
            }
            link={"https://josecontrerasmt.github.io/Rick-and-Morty-Api/"}
          />
          <ProyectoCard
            imgRuta={"ProyectosImgs/Peliculas-Series-Populares.png"}
            tect={['React',"html","Css","Js","tailwind"]}
            titulo={"Películas y Series Populares"}
            descript={
              'Aplicación personal para guardar películas y series populares utilizando los datos proporcionados por "The Movie db", interactiva e informativa.'
            }
            link={
              "https://josecontrerasmt.github.io/Peliculas-y-Series-Populares/"
            }
          />
          <ProyectoCard
            imgRuta={"ProyectosImgs/Galeria.png"}
            tect={["html", "Css", "Js"]}
            titulo={"Galería"}
            descript={
              "Pequeña galería utilizando vanilla JavaScript para la interacción con las imágenes."
            }
            link={"https://josecontrerasmt.github.io/Galeria/"}
          />
          <ProyectoCard
            imgRuta={"ProyectosImgs/Tienda-tennis.png"}
            tect={["html", "Css", "Js", "Boots"]}
            titulo={"Tienda Tenis"}
            descript={
              "Se proporciona como un ejemplo de demostración únicamente para PC, donde cuenta con un carrito de compras, reseñas, características y envió."
            }
            link={"https://josecontrerasmt.github.io/Tienda-de-Tenis/"}
          />
          <ProyectoCard
            imgRuta={"ProyectosImgs/Game-Rock-Paper-Scissors.png"}
            tect={["html", "Css", "Js"]}
            titulo={"Game-Rock-Paper-Scissors"}
            descript={
              "Pequeño juego donde se tomó de inspiración un desafió de frontend mentor. Puedes elegir 2 maneras de jugar."
            }
            link={"https://josecontrerasmt.github.io/Game-Rock-Paper-Scissors/"}
          />
          <ProyectoCard
            imgRuta={"ProyectosImgs/Challenge-ONE-Encriptador-de-Texto.png"}
            tect={["html", "Css", "Js"]}
            titulo={"Challenge-ONE-Encriptador-de-Texto"}
            descript={
              "Desafió para un curso de Alura Latam donde se realizó un encriptador de texto."
            }
            link={
              "https://josecontrerasmt.github.io/Challenge-ONE-Encriptador-de-Texto/"
            }
          />
        </div>
      </div>
      <div className="mt-5">
        <h2 className="mb-5 text-xl font-semibold text-secondaryColor">
          Diseño UI/UX
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <DiseñoCard
            titulo={"Dashboard Gamer"}
            rutas={[
              "ProyectosDiseño/Dashboard/dashMobile.png",
              "ProyectosDiseño/Dashboard/dashTablet.png",
              "ProyectosDiseño/Dashboard/dashPC.png",
            ]}
          />
          <DiseñoCard
            titulo={"Landing Page"}
            rutas={[
              "ProyectosDiseño/LandingPage/pageMobile.png",
              "ProyectosDiseño/LandingPage/pageTablet.png",
              "ProyectosDiseño/LandingPage/pagePC.png",
            ]}
          />
          <DiseñoCard
            titulo={"Tienda de Comida"}
            rutas={[
              "ProyectosDiseño/Tienda/tiendaMobile.png",
              "ProyectosDiseño/Tienda/tiendaTablet.png",
              "ProyectosDiseño/Tienda/tiendaPC.png",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
