"use client";
import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
  return (
    <div className="bg-neutral-500 py-3 text-white font-medium overflow-hidden rounded-xl">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <span className="mx-10">
           New Arrivals: <span className="font-bold">Marble Elegance Tile</span>
        </span>
        <span className="mx-10">
        Weekly Feature: <span className="font-bold">Modern Geometric Patterns</span>
        </span>
        <span className="mx-10">
          Join the Community for Expert Advice
        </span>
        <span className="mx-10">
          Free Shipping on Orders Over $500!
        </span>
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
