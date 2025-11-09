import React from "react";
import Container from "../Container";
import me from '/mee.png'

const Hero = () => {
  return (
    <div>
      <Container>
        <div className="wrapper grid grid-cols-1 xl:grid-cols-2 place-items-center md:py-20 bg-base-300 gap-8 xl:gap-0 h-[90vh] py-5">
          <div className="text flex flex-col justify-center xl:items-start gap-5 xl:gap-12 order-2 xl:order-1 items-center text-center xl:text-start">
            <div className="text-3xl xl:text-5xl font-semibold">
              <h1 className="mb-10">Hi, I am Mahfuj</h1>
              <h1 className="leading-relaxed animate-typing overflow-hidden whitespace-nowrap border-green-500 border-r-4 inline-block text-wrap">
                Full-Stack Developer
              </h1>
            </div>
            <p className="text-xl">
              Building digital experience that merge creativity with technology
            </p>
            <button className="bg-green-600 px-3 py-3 font-semibold text-xl rounded-md">
              Let's Connect
            </button>
          </div>
          <div className="image order-1 xl:order-2">
            <div className="w-[200px] h-[200px] xl:w-[400px] xl:h-[400px] rounded-[50%] bg-green-700 p-1">
              <img
                className="w-full h-full rounded-[50%] object-center object-cover shadow-[10px_-30px_100px_10px] shadow-green-400"
                src={me}
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
