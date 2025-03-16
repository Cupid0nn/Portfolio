"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  { src: "/hotelify.jpg", link: "https://proyecto-hoteleria.vercel.app" },
  { src: "/captura.jpg", link: "https://github.com/Cupid0nn/API-GEST" },
  { src: "/perfilmejor.jpg", link: "https://www.linkedin.com/in/mateo-acierno/" },
  
];

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 20000, disableOnInteraction: false }}
      loop={true}
      className="carousel"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img src={image.src} alt={`Slide ${index + 1}`} className="carousel-image" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
