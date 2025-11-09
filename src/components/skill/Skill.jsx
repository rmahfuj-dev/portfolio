import React from "react";
import Container from "../Container";
import Marquee from "react-fast-marquee";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase 
} from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={32} />, color: "bg-primary" },
  { name: "CSS", icon: <FaCss3Alt size={32} />, color: "bg-secondary" },
  { name: "JavaScript", icon: <FaJs size={32} />, color: "bg-accent" },
  { name: "React", icon: <FaReact size={32} />, color: "bg-info" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} />, color: "bg-success" },
  { name: "Node.js", icon: <FaNodeJs size={32} />, color: "bg-warning" },
  { name: "Express.js", icon: <SiExpress size={32} />, color: "bg-error" },
  { name: "MongoDB", icon: <FaDatabase size={32} />, color: "bg-neutral" },
];

const Skill = () => {
  const repeatedSkills = [...skills, ...skills];

  return (
    <section className="py-20 bg-base-200" id="skills">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12 text-base-content">
          My Skills
        </h2>

        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <div className="flex space-x-4">
            {repeatedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg bg-base-100 w-32 sm:w-36 md:w-40"
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${skill.color} text-white text-2xl mb-4`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-base-content">{skill.name}</h3>
              </div>
            ))}
          </div>
        </Marquee>
      </Container>
    </section>
  );
};

export default Skill;
