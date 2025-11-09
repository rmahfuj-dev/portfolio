import React, { useEffect, useRef } from "react";
import Container from "../Container";
import me from "/mee.png";
import { HashLink } from "react-router-hash-link";
import gsap from "gsap";

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (textRef.current && imageRef.current) {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

      tl.fromTo(
        textRef.current,
        { opacity: 0, scale:0 },
        { opacity: 1, scale: 1 }
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1 },
        "-=0.5"
      );
    }
  }, []);

  return (
    <section className="bg-base-300 min-h-[90vh] flex items-center" id="hero">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8 xl:gap-16 py-10">
          <div
            ref={textRef}
            className="flex flex-col justify-center items-center xl:items-start text-center xl:text-start gap-6 order-2 xl:order-1"
          >
            <h1 className="text-4xl xl:text-6xl font-extrabold text-green-400">
              Hi, I'm Mahfuj
            </h1>
            <h2 className="text-2xl xl:text-4xl text-white title">
              Full-Stack Developer
            </h2>
            <p className="text-lg xl:text-xl text-base-content/70 max-w-xl speech">
              Building digital experiences that merge creativity with technology. I craft modern, responsive, and performant web applications.
            </p>
            <HashLink
              to="#contact"
              className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-md font-semibold text-lg xl:text-xl transition-all duration-300 shadow-md hover:shadow-lg text-white"
            >
              Let's Connect
            </HashLink>
          </div>

          <div
            ref={imageRef}
            className="flex justify-center xl:justify-end order-1 xl:order-2"
          >
            <div className="relative w-64 h-64 xl:w-96 xl:h-96 rounded-full bg-green-700 p-1">
              <div className="absolute -inset-4 rounded-full bg-green-400/30 blur-3xl"></div>
              <img
                src={me}
                alt="Mahfuj"
                className="w-full h-full rounded-full object-cover shadow-[10px_-20px_80px_5px] shadow-green-400 relative"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
