import React from "react";

export default function Cards({ characters }) {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   gap-3 justify-center">
      {characters.map((item, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg m-5 mx-auto"
        >
          <div className="character-containers ">
            <img className="w-full" src={item.image} alt=" " />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-xl mb-2">{item.species}-{item.status}</p>
              <p className="text-gray-700 text-base mb-2">{item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
