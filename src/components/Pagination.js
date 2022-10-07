import React from "react";

export default function Pagination({ pageNumber,setPagenumber }) {
  let next = () => {
    setPagenumber((x) => x + 1);
  };
  let prev = () => {
    if(pageNumber===1)return
    setPagenumber((x) => x - 1);
  };

  return (
    <div>
      <ul className="flex flex-row justify-center w-1/5 my-5 mx-auto  ">
        
          <li>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-5"
              onClick={prev}
            >
              Previus
            </button>
          </li>
        
        
          <li>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-5"
              onClick={next}
            >
              Next
            </button>
          </li>
        
      </ul>
    </div>
  );
}
