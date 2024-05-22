import { useRef, useState } from "react";
import copy from "clipboard-copy";
export default function Footer() {
  const inputRef = useRef(null);
  const [copyIcon, setCopyIcon] = useState(false);

  const handleCopyClick = () => {
    if (inputRef.current) {
      copy(inputRef.current.outerText)
        .then(() => {
          setCopyIcon(true);
          setInterval(() => {
            setCopyIcon(false);
          }, 2000);
        })
        .catch((err) => {
          alert("Error al copiar texto al portapapeles:", err);
        });
    }
  };
  return (
    <footer
      id="contacto"
      className="w-full  pb-28 px-6 flex items-center flex-col text-white gap-6 md:pb-16"
    >
      <h2 className="font-bold text-3xl text-secondaryColor md:text-4xl">
        Contacto
      </h2>
      <div className="flex justify-center gap-2 items-center">
        <span
          ref={inputRef}
          className="text-xl font-semibold group-hover:text-secondaryColor"
        >
          josecontrersmt@gmail.com
        </span>
        <button
          onClick={handleCopyClick}
          className="text-3xl hover:text-secondaryColor transition duration-300 p-2  rounded-lg"
        >
          <i
            className={`bx ${
              copyIcon
                ? "bi-clipboard-check-fill text-secondaryColor"
                : "bxs-copy-alt"
            }`}
          ></i>
        </button>
      </div>
      {/* Redes  */}
      <div className="flex gap-8 justify-center">
        <a
          className="text-3xl hover:text-secondaryColor transition-all duration-300"
          href="https://github.com/josecontrerasmt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          className="text-3xl hover:text-secondaryColor transition-all duration-300"
          href="https://www.linkedin.com/in/jose-contreras-martinez-34a4bb2ab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <h1 className="font-bold text-2xl text-center">
        Cuéntame tu <span className="text-secondaryColor">idea</span> y juntos
        lo haremos <span className="text-secondaryColor">posible.</span>
      </h1>
    </footer>
  );
}
