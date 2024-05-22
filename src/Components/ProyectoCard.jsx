export default function ProyectoCard({
  imgRuta,
  tect,
  titulo,
  descript,
  link,
}) {
  const handleClick = (ruta) => {
    window.open(ruta, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      onClick={() => handleClick(link)}
      className="cursor-pointer border border-gray-500 p-4 rounded-xl flex flex-col gap-5 hover:border-secondaryColor transition duration-300 group md:gap-3 relative"
    >
      <img
        className="rounded-xl w-full h-52 object-cover"
        src={imgRuta}
        alt={titulo}
      />
      <div>
        {/* <h3 className="text-center mb-2 font-semibold text-lg text-secondaryColor lg:group-hover:text-secondaryColor transition duration-300 lg:text-white">Tecnologías</h3> */}
        <div className="flex gap-2 flex-wrap mb-4 md:mb-3 justify-center text-md font-bold">
          {tect.map((tecnologia) => {
            let icon;
            if (tecnologia === "html") {
              icon = "bxl-html5 text-[#E5532D]";
            } else if (tecnologia === "Css") {
              icon = "bxl-css3 text-[#1AA3DE]";
            } else if (tecnologia === "Js") {
              icon = "bxl-javascript text-[#FEDE27]";
            } else if (tecnologia === "Boots") {
              icon = "bxl-bootstrap text-[#6E2CF3]";
            } else {
              icon = "bx-code";
            }
            return (
              <span key={tecnologia}>
                <i className={`bx ${icon}  text-2xl`}></i>
              </span>
            );
          })}
        </div>
        <h3 className="font-bold text-lg text-secondaryColor lg:group-hover:text-secondaryColor transition duration-300 lg:text-white lg:text-center">
          {titulo}
        </h3>
        <i className="text-secondaryColor text-xl bi bi-box-arrow-up-right absolute right-10 top-[245px] md:top-[238px] lg:hidden"></i>
        <p className="my-2 font-semibold ">{descript}</p>
      </div>
    </div>
  );
}
