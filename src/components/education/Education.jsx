import React from "react";
import Container from "../Container";

const educationData = [
  {
    year: "2025",
    title: "Diploma in Engineering",
    institute: "Bogura Polytechnic Institute",
    description:
      "Completed Diploma in Computer Science and Technology (CST) department.",
  },
  {
    year: "2025",
    title: "Web Development & Design Course",
    institute: "NACTAR (National Academy for Computer Training and Research)",
    description:
      "Learned modern web development, including HTML, CSS, JavaScript, React, and Tailwind CSS.",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-24 bg-base-300">
      <Container>
        <h2 className="text-5xl font-extrabold text-green-400 drop-shadow-[0_0_10px_#22c55e55] mb-12 text-center">
          Education
        </h2>
        <div className="relative border-l-2 border-green-500/40 ml-6 md:ml-12">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-12 ml-6 relative">
              <div className="absolute -left-6 md:-left-9 top-0 w-4 h-4 bg-green-400 rounded-full shadow-[0_0_10px_#22c55e55]"></div>
              <span className="text-green-400 font-semibold text-sm md:text-base">
                {edu.year}
              </span>
              <h3 className="text-2xl font-bold text-green-400 mt-1">
                {edu.title}
              </h3>
              <h4 className="text-green-400">{edu.institute}</h4>
              <p className="text-base-content/70 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;
