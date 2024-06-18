export default function DiseñoCard({ titulo, rutas }) {
  return (
    <div className="w-full overflow-hidden border text-center border-secondaryColor rounded-xl p-4">
      <h3 className="mb-3  text-base font-semibold">{titulo}</h3>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-10 justify-center items-center">
        <img
          className="w-[180px] h-[260px] lg:h-[200px] md:h-[240px] lg:w-auto rounded-xl object-fill"
          src={`${rutas[0]}`}
          alt={titulo}
        />
        <img
          className="h-[260px] lg:h-[200px] md:h-[240px] rounded-xl object-fill"
          src={`${rutas[1]}`}
          alt={titulo}
        />
        <img
          className="h-[260px] lg:h-[200px] md:h-[240px] rounded-xl object-fill"
          src={`${rutas[2]}`}
          alt={titulo}
        />
      </div>
    </div>
  );
}
