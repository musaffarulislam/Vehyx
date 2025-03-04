import Image from "next/image";
import React from "react";

const testimonials = [
  {
    name: "Madhura Gaydhane",
    role: "UX Designer",
    image: "/assets/profile-image.png",
    feedback:
      "Working with Anish was an absolute game-changer for our business! The website redesign exceeded our expectations, with a sleek, user-friendly interface that truly resonates with our audience!",
  },
  {
    name: "Jane Doe",
    role: "CEO of TechWave Solutions",
    image: "/assets/profile-image.png", 
    feedback:
      "Working with Anish was an absolute game-changer for our business! The website redesign exceeded our expectations, with a sleek, user-friendly interface that truly resonates with our audience! The website redesign exceeded our expectations.",
  },
  {
    name: "Jane Doe",
    role: "CEO of TechWave Solutions",
    image: "/assets/profile-image.png", 
    feedback:
      "Working with Anish was an absolute game-changer for our business! The website redesign exceeded our expectations, with a sleek, user-friendly interface that truly resonates with our audience! The website redesign exceeded our expectations.",
  },
];

const ClientSatisfactionComponent = () => {
  return (
    <div className="mx-24 py-8">
      <div className="p-12 py-16 bg-white rounded-2xl shadow-md w-full flex flex-col items-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center">
          Proven Track of Satisfied Client
        </h2>
        <p className="text-gray-500 text-lg text-center mt-2">
          We cherish relations to blossom and last
        </p>

        {/* Testimonials */}
        <div className="mt-12 w-full space-y-10">
          {testimonials.map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-6 max-w-6xl mx-auto py-4"
            >
              {/* Client Image */}
              <Image
                src={client.image}
                alt={client.name}
                width={100}
                height={100}
                className="w-16 h-16 rounded-full object-cover"
              />
              {/* Client Info & Feedback */}
              <div className="flex justify-between items-center">
                <div className="w-5/12">
                    <p className="font-bold text-lg">{client.name}</p>
                    <p className="text-gray-500">{client.role}</p>
                </div>
                <div className="w-7/12">
                <p className="mt-3 text-gray-700">{client.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSatisfactionComponent;
