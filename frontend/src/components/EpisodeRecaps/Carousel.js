import React, { useState, useEffect } from "react";
import slider0 from "../assets/episode_shot.svg";
import slider1 from "../assets/episode_shot2.svg";
import slider2 from "../assets/episode_shot3.svg";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

const images = [
  {
    src: slider0,
    title: "Hierarchy: Episodes 1-2",
    date: "Jun 07, 2024",
    text: "Hierarchy opens, as an edgy teen drama is wont to do, with a gruesome incident. High school student KANG IN-HAN (Kim Min-chul) stalks down an alleyway, ranting over the phone that he’ll expose the insanity that takes place on school grounds. Predictably, In-han is hit by a car, and no one comes to his aid as he bleeds out. Kang Ha enters Jooshin High and quickly ruffles some feathers. He soon attends a rowdy part and partakes in a provocative game of truth or dare. After Kang Ha’s daring stunt at the party, he faces the vengeful Kim Ri an at school. Later, at a retreat, Kang Ha and Jung Jae-i begin to get closer.",
  },
  {
    src: slider2,
    title: "Title 2",
    date: "Date 2",
    text: "Once rivals in school, two brilliant doctors reunite by chance — each facing life’s worst slump and unexpectedly finding solace in each other.",
  },
  {
    src: slider1,
    title: "Title 3",
    date: "Date 3",
    text: "The mysterious disappearance of a girl brings together seven people from all different walks of life. They all have an intertwined connection to her disappearance in the most horrific, unfathomable, and despicable way. As money drives them to their greed, lies, and delirium, they face divine retribution as they struggle for their lives in a picturesque revenge. How far will they go to claim their innocence, and will anyone make it out alive?",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("slide-in");

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 20000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setAnimationClass("slide-out");
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
      setAnimationClass("slide-in");
    }, 50);
  };

  const prevSlide = () => {
    setAnimationClass("slide-out");
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      setAnimationClass("slide-in");
    }, 50);
  };

  return (
    <div className="relative w-full font-sans mt-10">
      <div className="relative w-full md:h-[521px] h-[300px] overflow-hidden bg-black bg-opacity-57">
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 p-4 m-4 bg-opacity-50 rounded-full hover:bg-opacity-75 z-30"
          >
            <img
              src={leftArrow}
              alt="Previous"
              className="md:md:w-[25.8px] md:h-[43.13px] lg:w-[45.8px] lg:h-[83.13px] w-3"
            />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 p-4 m-4 bg-opacity-50 rounded-full hover:bg-opacity-75 z-30"
          >
            <img
              src={rightArrow}
              alt="Next"
              className="md:w-[25.8px] md:h-[43.13px] lg:w-[45.8px] lg:h-[83.13px] w-3"
            />
          </button>
        </div>
        <div
          className={`relative w-full h-full flex items-center justify-center transition-transform duration-500 ${animationClass}`}
        >
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mt-4 text-left">
        <div className="flex justify-between align-middle w-[80%]">
          <h2 className="text-lg font-bold">{images[currentIndex].title}</h2>
          <p className="text-sm text-gray-500">{images[currentIndex].date}</p>
        </div>
        <p className="mt-2 md:w-[535.35px] text-left italic md:leading-[21.79px] font-normal md:text-[16px] text-[12px] w-[80%]">
          {images[currentIndex].text}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
