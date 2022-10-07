import React from "react";

export default function Cards({ results }) {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, status, species } = x;
      return (
        
          (
          <div key={id}
          className="max-w-sm rounded overflow-hidden shadow-lg m-5 mx-auto">
            <img className="w-full" src={image} alt=" " />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{name}</div>
              <p className="text-gray-700 text-xl mb-2">
                {species}-{status}
              </p>
            </div>
          </div>
          )
        
      );
    });
  } else {
    display = "No characters founds";
  }
  return <> <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   gap-3 justify-center">{display}</div> </>;
}
