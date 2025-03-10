"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  { src: "/hotelify2.jpg", link: "https://proyecto-hoteleria.vercel.app" },
  { src: "/js.png", link: "https://personal-page-c1.vercel.app" },
  { src: "/perfilmejor.jpg", link: "https://www.linkedin.com/in/mateo-acierno/" },
  
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
            <img src={image.src} alt={`Slide ${index + 1}`} className="carousel-image" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
