import React from "react";
import Container from "../Container";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaServer } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: "Building responsive and modern websites with clean code and great UX.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Responsive Design",
    description: "Ensuring websites look perfect on all devices, from mobiles to desktops.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description: "Designing user-friendly and visually appealing interfaces for better engagement.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description: "Creating robust backend systems with Node.js, Express, and MongoDB.",
  },
];

const Service = () => {
  return (
    <section id="services" className="py-24 bg-base-100">
      <Container>
        <h2 className="text-5xl font-extrabold text-green-400 mb-12 text-center">
          My Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border border-green-500/20 rounded-2xl hover:border-green-400 transition-all duration-300"
            >
              <div className="text-5xl text-green-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">{service.title}</h3>
              <p className="text-base-content/80">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Service;
