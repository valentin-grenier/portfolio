"use client";

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProject from "../Card/CardProject";
import { useState, useEffect } from "react";

interface ICarousel {
  projects: IProjectCard;
}

interface IProjectCard {
  map: any;
  id: number;
  acf: {
    thumbnail: {
      url: string;
      alt: string;
    };
    stacks: string[];
  };
}

export default function Carousel({ projects }: ICarousel) {
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
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <div className="relative h-full">
      <Slider {...settings}>
        {projects.map((item: IProjectCard) => (
          <CardProject
            image={item.acf.thumbnail.url}
            tags={item.acf.stacks.slice(0, 2)}
            slug={`/projets/${item.id}`}
            key={item.id}
          />
        ))}
      </Slider>
    </div>
  );
}
