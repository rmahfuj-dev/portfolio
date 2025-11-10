import React from "react";
import Container from "../Container";

const teamMembers = [
  {
    name: "Muhammad Mahfuj",
    role: "Full Stack Developer",
    image: "./mee.png",
    description: "Lead developer, creating modern web experiences with React and Tailwind CSS.",
  },
  {
    name: "Alex Baren",
    role: "UI/UX Designer",
    image: "./dev2.jpg",
    description: "Designs clean, modern, and user-friendly interfaces.",
  },
  {
    name: "Arickson D.",
    role: "Backend Developer",
    image: "./dev3.jpg",
    description: "Handles server-side logic and database management efficiently.",
  },
];

const Team = () => {
  return (
    <section id="team" className="relative py-24 bg-base-100">
      <Container>
        <h2 className="text-5xl font-extrabold text-green-400 drop-shadow-[0_0_10px_#22c55e55] mb-16 text-center">
          Meet the Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8 space-y-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group w-full h-70 sm:w-80 md:w-64 bg-[rgba(20,20,20,0.25)] backdrop-blur-2xl border border-green-500/40 rounded-3xl p-6 shadow-[0_0_25px_#22c55e33] hover:shadow-[0_0_35px_#22c55e66] transition-all duration-500"
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-green-400 shadow-[0_0_20px_#22c55e55]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover bg-base-300"
                />
              </div>
              <div className="mt-20 text-center">
                <h3 className="text-xl font-bold text-green-400">{member.name}</h3>
                <p className="text-green-200">{member.role}</p>
                <p className="text-base-content/70 mt-2">
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
