import React, { useState } from "react";
import Modal from "./Modal/Modal";

export default function Cards({ results }) {
  const [showModal, setShowModal] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const openModal = (characterId) => {
    setCurrentCharacter(characterId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, status } = x;
      return (
        <>
          <div
            onClick={() => openModal(id)}
            key={id}
            className="cursor-pointer z-10 relative max-w-sm rounded overflow-hidden shadow-lg m-5 mx-auto "
          >
            <div className="absolute top-0 right-5 z-20">
              
                {status === "Alive" ? (
                  <div className="rounded h-5 w-full bg-green-500  p-2 flex justify-center items-center my-2 mx-3">
                    <p className="text-white bold">{status} </p>
                  </div>
                ) : status === "Dead" ? (
                  <div className="rounded h-5 w-full bg-red-500  p-2 flex justify-center items-center my-2 mx-3">
                    <p className="text-white bold">{status}</p>
                  </div>
                ) : (
                  <div className="rounded h-5 w-full bg-gray-500  p-2 flex justify-center items-center my-2 mx-3">
                    <p className="text-white bold">{status}</p> 
                  </div>
                )}
              
            </div>
            <img
              className="w-full transition ease-in-out hover:opacity-75   "
              src={image}
              alt={name}
            />
            <div
              className=" absolute top-100 left-0 right-0 bottom-0 flex items-center justify-center 
          bg-gradient-to-t from-black"
            >
              <p className="text-xl title-img mb-2">{name}</p>
            </div>
          </div>
        </>
      );
    });
  } else {
    display = "No characters founds";
  }
  return (
    <>
      <div className="w-4/5 mx-auto grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 justify-center ">
        {display}
        {showModal && (
          <Modal character={currentCharacter} closeModal={closeModal} />
        )}
      </div>
    </>
  );
}
