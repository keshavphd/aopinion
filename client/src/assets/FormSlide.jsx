import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FormSlide = () => {
  const [isPaused, setIsPaused] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: !isPaused,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const handleMouseDown = () => {
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };

  const handleTouchMove = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  const slideData = [
    {
      textdesign: "https://turn2opinion.com/img/survey/welcome-1.png",
      title: "Your Survey",
      subtitle: "Take Survey",
    },
    {
      textdesign: "https://turn2opinion.com/img/survey/welcome-1.png",
      title: "Daily Survey",
      subtitle: "Take Survey",
    },
    {
      textdesign: "https://turn2opinion.com/img/survey/welcome-1.png",
      title: "Monthly Survey",
      subtitle: "Take Survey",
    },
  ];

  return (
    <div className="h-full">
      <div className="m-2">
        <Slider
          {...settings}
          onMouseDown={handleMouseDown} 
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove} 
          onTouchEnd={handleTouchEnd} 
          onTouchStart={handleTouchMove}
          onTouchCancel={handleTouchEnd} 
        >
          {slideData.map((slide, index) => (
            <div key={index} className="p-1.5 m-1 md:p-3">
              <div className="shadow-2xl bg-lime-100 rounded-3xl">
              <div className="p-3">
                <img src={slide?.textdesign} alt="" className="w-full p-0.5 md:p-3 mx-auto" />
              </div>
              <p className="text-center">{slide?.title}</p>
              <div className="p-2 mx-auto w-fit">
                <button className="w-full px-4 py-2 mx-auto text-sm text-blue-900 md:text-xl bg-amber-400 rounded-2xl">
                  Take Survey
                </button>
              </div>
              </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FormSlide;
