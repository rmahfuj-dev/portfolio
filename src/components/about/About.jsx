import React from "react";
import Container from "../Container";
import { FaReact, FaNodeJs, FaGithub, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-base-300">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-extrabold text-green-400">
              About Me
            </h2>
            <p className="text-lg text-base-content/70 leading-relaxed">
              I’m passionate about building digital experiences that look good,
              feel good, and work perfectly. I love mixing minimalism with
              functionality to craft modern and high-performance websites.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-5 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-sm font-semibold">
                Frontend Developer
              </span>
              <span className="px-5 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-sm font-semibold">
                React & Tailwind Lover
              </span>
              <span className="px-5 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-sm font-semibold">
                MERN Stack Learner
              </span>
            </div>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-base-content/70">
              “Code is art when it makes people feel something.”
            </blockquote>
          </div>

          <div className="p-10 border border-green-500/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              The Developer Side of Me
            </h3>
            <p className="text-base-content/80 leading-relaxed mb-6">
              My work focuses on clean UI, fast performance, and great user
              experience. I enjoy experimenting with animations, responsive
              layouts, and small micro-interactions that bring websites to life.
            </p>
            <p className="text-base-content/80 leading-relaxed mb-8">
              I’m currently deepening my full-stack knowledge using MongoDB,
              Express, React, and Node — aiming to build complete digital
              products from scratch.
            </p>
            <div className="flex gap-6 text-3xl text-green-400">
              <FaReact className="hover:text-green-300 transition-transform hover:scale-110" />
              <FaNodeJs className="hover:text-green-300 transition-transform hover:scale-110" />
              <FaGithub className="hover:text-green-300 transition-transform hover:scale-110" />
              <FaCode className="hover:text-green-300 transition-transform hover:scale-110" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
