import React from "react";

export default function Pagination({prev, next, onPrevius, onNext}) {
  const handlePrevius = () => {
    onPrevius();
  };
  const handleNext = () => {
    onNext();
  };
  return (
    <div>
      <ul className="flex flex-row justify-center w-1/5 my-5 mx-auto  ">
        {prev ? (
          <li>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-5"
              onClick={handlePrevius}
            >
              Previus
            </button>
          </li>
        ) : null}
        {next ? (
          <li>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-5"
              onClick={handleNext}
            >
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
