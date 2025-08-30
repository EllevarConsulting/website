'use client';
import { Header } from "@/_common/header";
import { Hero } from "@/_common/hero";
import React from "react";
import Slider from "react-slick";

const appendDots = (dots: React.ReactNode) => <div>
  <ul className="absolute bottom-4 flex flex-row gap-2 justify-center w-full m-0 p-0 list-none">{dots}</ul>
</div>

const customPaging = () => (
  <div className="w-5 h-5 rounded-full opacity-50 hover:opacity-100"></div>
);

const Home = () => {
  return <div className="flex flex-col items-center justify-center w-full h-full">
    <Slider 
      slidesToShow={1} 
      slidesToScroll={1} 
      infinite={true} 
      arrows={false} 
      dots={true} 
      appendDots={appendDots}
      customPaging={customPaging}
      className="w-full h-full"
    >
      <Hero className="bg-[url(/images/hero.png)]">
        <Header className="text-white">Who We are</Header>
        <p className="text-white">From the Latin “elevare” meaning “to elevate”, our goal is to help bring our clients to the next level.</p>
      </Hero>
      <Hero className="bg-[url(/images/hero-2.webp)]">
        <Header className="text-white">Who We do</Header>
        <p className="text-white">
          We partner with organizations to understand their needs, identify opportunities, and work seamlessly from an idea to completion.{" "}
          We'll roll up our sleeves and do what it takes to get the job done.
        </p>
      </Hero>
    </Slider>
  </div>
};

export default Home;