export default function NavItem({titulo,item,link}) {
  return (
    <li>
      <a
        className="flex font-bold flex-col md:flex-row items-center gap-1 md:gap-2 pb-1 border-b-2 border-transparent hover:border-[#17d9fc] hover:text-[#17d9fc] transition duration-300"
        href={"#"+link}
      >
        <i className={`${item} text-xl md:text-sm`}></i><span className="text-[0.9em]">{titulo}</span>
      </a>
    </li>
  );
}
