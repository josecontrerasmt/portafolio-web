export default function HabilidadItem({imgHabilidad,nombreHabilidad}) {
  return (
    <div className=" text-white font-semibold py-2 px-4 text-lg rounded-3xl border-2 flex items-center gap-1 border-secondaryColor lg:border lg:border-gray-500 lg:hover:border-secondaryColor lg:hover:scale-125 transition-all duration-300 select-none">
      <img className="w-5 h-5 object-cover" src={imgHabilidad} alt={nombreHabilidad} />
      <span>{nombreHabilidad}</span>
    </div>
  );
}
