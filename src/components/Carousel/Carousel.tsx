"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProject from "../Card/CardProject";
import { useState, useEffect } from "react";

export default function Carousel() {
  const [slidesToShow, setSlidesToShow] = useState(1.1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2.2);
      } else {
        setSlidesToShow(1.1);
      }
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize on initial render
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <div className="relative h-full">
      <Slider {...settings}>
        <CardProject
          image={"https://picsum.photos/200"}
          tags={["WordPress", "PHP", "ACF"]}
        />
        <CardProject
          image={"https://picsum.photos/200"}
          tags={["WordPress", "PHP", "ACF"]}
        />
        <CardProject
          image={"https://picsum.photos/200"}
          tags={["WordPress", "PHP", "ACF"]}
        />
        <CardProject
          image={"https://picsum.photos/200"}
          tags={["WordPress", "PHP", "ACF"]}
        />
        <CardProject
          image={"https://picsum.photos/200"}
          tags={["WordPress", "PHP", "ACF"]}
        />
      </Slider>
    </div>
  );
}
