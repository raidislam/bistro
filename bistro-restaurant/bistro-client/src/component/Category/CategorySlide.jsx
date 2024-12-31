import Slider from "react-slick"
import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"
import SectionTitle from "../sectionTitle/SectionTitle"
export default function CategorySlide() {
  const cardItem = [slide1, slide2, slide3, slide4, slide5]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  }
  return (
    <section>
      <SectionTitle
        subheading={"From 11.0am to 10.00pm"}
        mainheading={"Order Online"}
      />
      <div className="slider-container ">
        <Slider {...settings}>
          {cardItem?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center overflow-hidden" // Flexbox container styles
            >
              <img
                src={item}
                alt={`Card item ${index}`}
                className="object-cover w-full h-full" // CSS for image sizing
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
