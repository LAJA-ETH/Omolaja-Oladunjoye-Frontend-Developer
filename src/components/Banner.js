import React from "react";
import Rocket from "../images/rocket-wlp.png";
import RocketWo from "../images/rocket.png";
import Capsule from "../images/capsule.png";

export default function Banner() {
  return (
    <div>
      <div className="grid grid-rows md:grid-rows lg:grid-cols-2 py-5">
        <div className="">
          <h1 className="text-4xl text-white font-semibold pb-6">
            Can Humans Live on Mars
          </h1>
          <p className="text-white text-justify pb-3">
            As humanity's fascination with the cosmos grows, the question of
            whether humans can call Mars their second home has become a
            captivating enigma. With its barren landscapes, extreme
            temperatures, and thin atmosphere, Mars presents a formidable
            challenge. Join us on a journey to explore the possibilities, the
            challenges, and the dreams of making life sustainable on the Red
            Planet.
          </p>
          <button className="bg-red-600 text-white p-3 font-semibold rounded-md">
            EXPLORE ROCKETS
          </button>
        </div>
        <div>
          <img src={Rocket} className="hidden lg:block" alt="Rocket" />
        </div>
      </div>
      <div className="grid grid-rows lg:grid-cols-2 py-5">
        <div>
          <img src={Capsule} alt="Rocket" />
        </div>
        <div className="">
          <h1 className="text-4xl text-white font-semibold pb-6">
            Innovative Capsules
          </h1>
          <p className="text-white text-justify pb-3">
            Designed to redefine space travel, these capsules represent the
            pinnacle of technological advancement, ensuring the safety and
            comfort of astronauts as they venture into the cosmos. With a
            relentless commitment to innovation, SpaceX has revolutionized space
            travel, making it more accessible and inspiring the dream of a
            multi-planetary existence.
          </p>
          <div className="grid">
            <div>
              <h3 className="text-sm font-semibold text-white pt-8">Number of Capsules</h3>
              <p className="text-5xl font-bold text-red-600">19</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
