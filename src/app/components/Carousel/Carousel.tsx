import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProject from "../Card/CardProject";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1.05,
    slidesToScroll: 1,
    centerPadding: "50px",
  };

  return (
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
    </Slider>
  );
}
