import React from "react";

const RocketCard = ({ rocket, onClick }) => {
  return (
    <div
      className="bg-red-400/0 hover:bg-red-500/10 flex lg:flex-row flex-col text-white p-4 rounded-md cursor-pointer gap-4"
      onClick={() => onClick(rocket)}>
      <div className="flex h-44 w-44 lg:h-64 lg:w-64 justify-center items-center">
        <img
          src={rocket.flickr_images[1]}
          alt={rocket.rocket_name}
          className="w-full h-full object-cover hover:rounded-md"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{rocket.rocket_name}</h3>
        <p className="text-sm">{rocket.country}</p>
      </div>
    </div>
  );
};

export default RocketCard;
