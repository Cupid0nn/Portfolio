import Image from "next/image";
import "normalize.css";
import "./globals.css";
import ImageCarousel from "../components/ImageCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="caja1">
        <h1>Mateo Acierno</h1>
        <h1>Backend Dev</h1>
      </div>
      <div className="caja2">
      <ImageCarousel />
      </div>
      <div className="caja3">
        <Image
          src="/perfil.jpg"
          alt="Picture of me"
          width={1280}
          height={800}
          className="imagencaja3"
        />{" "}
      </div>
      <div className="caja4">
        <h1>
          I'm Mateo, a passionate backend developer dedicated to building robust
          and efficient web applications. With a deep curiosity for the
          mechanics behind the scenes, I have specialized in backend development
          since entering the tech world six months ago. Based in Argentina, I
          enjoy crafting seamless digital experiences and aspire to explore AI
          development in the future.
        </h1>
      </div>
      <div className="caja5">tecnologias</div>
      <div className="caja6">
        <h1>Some Questions?</h1>
        <a href="mailto:malaucierno@gmail">Know me better</a>
      </div>

      <div className="caja7">
  <a href="https://github.com/Cupid0nn" target="_blank" rel="noopener noreferrer">
    <Image
      src="/githubb.jpg"
      alt="Github"
      width={50}
      height={50}
      className="imagencaja7"
    />
  </a>
  <a href="https://www.linkedin.com/in/mateo-acierno/" target="_blank" rel="noopener noreferrer">
    <Image
      src="/linkedin.jpg"
      alt="Linkedin"
      width={50}
      height={50}
      className="imagencaja7"
    />
  </a>
  <a href="https://www.instagram.com/laureano.js/" target="_blank" rel="noopener noreferrer">
    <Image
      src="/instagram.jpg"
      alt="Instagram"
      width={50}
      height={50}
      className="imagencaja7"
    />
  </a>
</div>
    </div>
  );
}
