import React from "react";

export default function Search({ setPagenumber, setSearch }) {
  return (
    <div className="z-10 search-cont rounded flex flex-row justify-center w-4/5 mx-auto mb-5">
     
        <input
          type="text"
          onChange={(e) => {
            setPagenumber = 1;
            setSearch(e.target.value);
          }}
          className="search grow px-3 py-1.5 text-base font-normal rounded transition ease-in-out focus:none "
          placeholder="Search a character..."
          aria-label="Search"
        />
      
    </div>
  );
}
