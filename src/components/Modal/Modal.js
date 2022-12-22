import React, { useState, useEffect } from "react";

const Modal = ({ character, closeModal }) => {
  const [characterInfo, setCharacterInfo] = useState(null);

  useEffect(() => {
    if (character) {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((res) => res.json())
        .then((data) => setCharacterInfo(data));
    }
  }, [character]);

  return characterInfo ? (
    <div className="modal-container  top-0 left-0 right-0 bottom-0 flex justify-center items-center shadow-lg ">
      <div className="fixed mx-auto bg-white rounded  ">
        <button onClick={closeModal} className="absolute top-3 right-5">
          <svg
            className="w-6 h-6 fill-current text-red-500"
            viewBox="0 0 24 24"
          >
            <path d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z" />
          </svg>
        </button>

        <div className="grid md:grid-cols-12 gap-1 rounded ">
          <div className="col-span-5 rounded ">
            <img
              className="w-full  rounded"
              src={characterInfo.image}
              alt={characterInfo.name}
            />
          </div>
          <div className="modal-text-container col-span-7 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold my-2 uppercase">
              {characterInfo.name}
            </h2>
            <p className="my-1 text-white">
              <strong className="text-cyan-400 underline decoration-green-500">Status:</strong>{" "}
              {characterInfo.status}
            </p>
            <p className="my-1 text-white">
              <strong className="text-cyan-400 underline decoration-green-500">Species:</strong>{" "}
              {characterInfo.species}
            </p>
            <p className="my-1 text-white">
              <strong className="text-cyan-400 underline decoration-green-500">Gender:</strong>{" "}
              {characterInfo.gender}
            </p>
            <p className="my-1 text-white">
              <strong className="text-cyan-400 underline decoration-green-500">Location:</strong>{" "}
              {characterInfo.location.name}
            </p>
            <p className="my-1 text-white">
              <strong className="text-cyan-400 underline decoration-green-500">Origin: text-white</strong>{" "}
              {characterInfo.origin.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
