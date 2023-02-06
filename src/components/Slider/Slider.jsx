import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./SliderData";
import { Arrow, ButtonSlide, Content, Description, Heading, Slide, SliderSection } from "./SliderStyles";

const Slider = () => {
const [currentSlide, setCurrentSlide] = useState(0);
const slideLength = sliderData.length;
//   console.log(slideLength);

const autoScroll = true;
let slideInterval;
let intervalTime = 5000;

const nextSlide = () => {
  setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
};

const prevSlide = () => {
  setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
};

useEffect(() => {
  setCurrentSlide(0);
}, []);


useEffect(() => {
  if (autoScroll) {
    const auto = () => {
      slideInterval = setInterval(nextSlide, intervalTime);
    };
    auto();
  }
  return () => clearInterval(slideInterval);
}, [currentSlide, slideInterval, autoScroll]);

return (
  <SliderSection>
    <Arrow left onClick={prevSlide}>{console.log("button left")}<AiOutlineArrowLeft className="left"></AiOutlineArrowLeft></Arrow>
    <Arrow right onClick={nextSlide}>{console.log("button right")}<AiOutlineArrowRight className="right"></AiOutlineArrowRight></Arrow>
    {sliderData.map((slide, index) => {
      const { image, heading, desc } = slide;
      return (
        <Slide
          key={index}
          className={index === currentSlide ? "slide current" : "slide"}
        >
          {index === currentSlide && (
            <>
              <img src={image} alt="slide" />
                <Content>
                    <Heading>{heading}</Heading>
                    <Description>{desc}</Description>
                    <hr></hr>
                    <a href="#product"><ButtonSlide>Comprar ahora</ButtonSlide></a>
                </Content>
            </>
          )}
        </Slide>
      );
    })}
  </SliderSection>
);
};


export default Slider