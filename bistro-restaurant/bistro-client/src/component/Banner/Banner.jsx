import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import image1 from "../../assets/home/01.jpg"
import image2 from "../../assets/home/02.jpg"
import image3 from "../../assets/home/03.png"
import image4 from "../../assets/home/04.jpg"
import image5 from "../../assets/home/05.png"
import image6 from "../../assets/home/06.png"

const baseUrl = [image1, image2, image3, image4, image5, image6]

export default function Banner() {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={baseUrl[i]} />
        </a>
      )
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image4} />
        </div>
        <div>
          <img src={image5} />
        </div>
        <div>
          <img src={image6} />
        </div>
      </Slider>
    </div>
  )
}
