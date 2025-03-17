"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image"; // Importa el componente Image de Next.js
import "swiper/css";

const images = [
  { src: "/hotelify.jpg", link: "https://proyecto-hoteleria.vercel.app" },
  { src: "/captura.jpg", link: "https://github.com/Cupid0nn/API-GEST" },
  {
    src: "/jssolvedtest.jpg",
    link: "https://github.com/Cupid0nn/JS-SOLVED-TESTS",
  },
];

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      className="carousel"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            {/* Reemplaza <img> con <Image /> */}
            <Image
              src={image.src}
              alt={`Slide ${index + 1}`}
              width={800} // Ajusta el ancho según tus necesidades
              height={600} // Ajusta la altura según tus necesidades
              className="carousel-image"
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
