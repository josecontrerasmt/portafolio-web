export default function EspecialidadItem({titulo,descripcion}) {
  return (
    <div className="border border-gray-500 p-5 py-7 rounded-xl flex flex-col gap-5 relative hover:border-secondaryColor transition duration-300 group">
      <h3 className="text-lg uppercase font-semibold group-hover:text-secondaryColor transition duration-300 text-secondaryColor lg:text-white">
        {titulo}
      </h3>
      <i className="bx bx-user-check text-2xl absolute top-1 right-1 text-secondaryColor lg:text-3xl"></i>
      <p className="font-medium text-sm md:text-md lg:text-[1em] text-while">
        {descripcion}
      </p>
    </div>
  );
}
