import React from "react";

const Popup = ({ rocket, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-red-950 p-4 h-5/6 sm:h-5/6 md:h-5/6 lg:h-auto">
      <div className="relative flex flex-col md:flex-row bg-red-950 text-white p-4 shadow-md rounded-md overflow-y-auto w-4/6 gap-4 sm:h-5/6 h-5/6 md:h-5/6 lg:h-auto">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-red-700 font-extrabold text-2xl"
          onClick={onClose}>
          X
        </button>

        <div className="flex">
          <div className="flex h-full w-72 justify-center items-center">
            <img
              src={rocket.flickr_images[0]}
              alt={rocket.rocket_name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-xl font-semibold mb-2">
            {rocket.rocket_name} ({rocket.rocket_type})
          </h3>
          <p className="text-sm font-extralight">{rocket.description}</p>
          <ul className="text-sm font-extralight">
            <li>Active: {rocket.active ? "Yes" : "No"}</li>
            <li>Stages: {rocket.stages}</li>
            <li>Boosters: {rocket.boosters}</li>
            <li>Cost Per Launch: ${rocket.cost_per_launch}</li>
            <li>Success Rate: {rocket.success_rate_pct}%</li>
            <li>First Flight: {rocket.first_flight}</li>
            <li>Country: {rocket.country}</li>
            <li>Company: {rocket.company}</li>
            <li>Success Rate: {rocket.success_rate_pct}</li>
            <li>
              Height: {rocket.height.meters} meters / {rocket.height.feet} feet
            </li>
            <li>
              Diameter: {rocket.diameter.meters} meters / {rocket.diameter.feet}{" "}
              feet
            </li>
            <li>
              Mass: {rocket.mass.kg} kg / {rocket.mass.lb} lb
            </li>
            {/* Add more details similarly */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Popup;
