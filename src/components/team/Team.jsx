import React from "react";
import Container from "../Container";

const teamMembers = [
  {
    name: "Mahfuj Sheikk",
    role: "Full Stack Developer",
    image: "/team/mahfuj.png",
    description: "Lead developer, creating modern web experiences with React and Tailwind CSS.",
  },
  {
    name: "Sarah Smith",
    role: "UI/UX Designer",
    image: "/team/sarah.png",
    description: "Designs clean, modern, and user-friendly interfaces.",
  },
  {
    name: "Michael Lee",
    role: "Backend Developer",
    image: "/team/michael.png",
    description: "Handles server-side logic and database management efficiently.",
  },
];

const Team = () => {
  return (
    <section id="team" className="relative py-24 bg-base-300">
      <Container>
        <h2 className="text-5xl font-extrabold text-green-400 drop-shadow-[0_0_10px_#22c55e55] mb-16 text-center">
          Meet the Team
        </h2>
        <div className="relative flex flex-col md:flex-row md:justify-center md:space-x-8 gap-12 items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group w-64 bg-[rgba(20,20,20,0.25)] backdrop-blur-2xl border border-green-500/40 rounded-3xl p-6 shadow-[0_0_25px_#22c55e33] hover:shadow-[0_0_35px_#22c55e66] transition-all duration-500 hover:scale-105"
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-green-400 shadow-[0_0_20px_#22c55e55]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-20 text-center">
                <h3 className="text-xl font-bold text-green-400">{member.name}</h3>
                <p className="text-green-200">{member.role}</p>
                <p className="text-base-content/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
