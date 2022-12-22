import React from "react";
import Categorys from "./categorys/Categorys";


export default function Filter({
  pageNumber,
  setPagenumber,
  setStatus,
  status,
  setSpecies,
  species,
  setGender,
  gender,
}) {
  return (
    <div className="z-10 w-4/5 mx-auto flex flex-col md:flex-row justify-center items-center">
      <Categorys
        pageNumber={pageNumber}
        setPagenumber={setPagenumber}
        title={"Status..."}
        setValue={setStatus}
        options={["Alive", "Dead", "Unknown"]}
        value={status}
      />
      <Categorys
        setPagenumber={setPagenumber}
        title="Species..."
        options={["Human", "Humanoid", "Alien", "Unknown"]}
        setValue={setSpecies}
        value={species}
      />
      <Categorys
        setPagenumber={setPagenumber}
        title="Gender..."
        options={["Female", "Male", "Genderless", "Unknown"]}
        setValue={setGender}
        value={gender}
      />
    </div>
  );
}
