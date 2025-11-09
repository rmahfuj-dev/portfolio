import React from "react";
import Container from "../Container";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const clients = [
  {
    name: "John Doe",
    image: "./client2.png",
    review:
      "Working with Mahfuj was a game-changer. The website looks amazing and works flawlessly!",
    rating: 5,
  },
  {
    name: "Sarah Smith",
    image: "./client1.jpg",
    review:
      "Professional, responsive, and very creative. Highly recommend for any web project.",
    rating: 4.5,
  },
  {
    name: "Michael Lee",
    image: "./client3.jpeg",
    review:
      "The attention to detail and UI design is top-notch. Super satisfied with the final product.",
    rating: 5,
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400" />);
    else if (rating + 0.5 === i) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
  }
  return stars;
};

const Client = () => {
  return (
    <section id="clients" className="relative py-24 bg-base-300 overflow-hidden">
      <Container>
        <h2 className="text-5xl font-extrabold text-green-400 drop-shadow-[0_0_10px_#22c55e55] mb-12 text-center">
          What My Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="relative w-full max-w-sm  backdrop-blur-2xl border border-green-500/40 rounded-2xl p-6 shadow-[0_0_25px_#22c55e33] flex flex-col items-center text-center bg-base-100"
            >
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-green-400 mb-2">{client.name}</h3>
              <div className="flex justify-center mb-4">{renderStars(client.rating)}</div>
              <p className="text-base-content/80">{client.review}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Client;
