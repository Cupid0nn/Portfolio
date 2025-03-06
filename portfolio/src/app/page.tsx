import Image from "next/image";
import "normalize.css";
import "./globals.css";

export default function Home() {
  return (
    <div className="container">
      <div className="caja1">
        <h1>Mateo Acierno</h1>
        <h1>Backend Dev</h1>
      </div>
      <div className="caja2">carrusel</div>
      <div className="caja3"><Image src="/perfil.jpg" alt="Picture of me" width={1280} height={490} className="imagencaja3" /> </div>
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
      <div className="caja6">contacto</div>
      <div className="caja7">
        <Image src="/githubb.jpg" alt="Github" width={50} height={50} className="imagencaja7" />
        <Image src="/linkedin.jpg" alt="Linkedin" width={50} height={50} className="imagencaja7" />
        <Image src="/instagram.jpg" alt="Gmail" width={50} height={50} className="imagencaja7" />
      </div>
    </div>
  );
}
