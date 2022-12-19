import React from "react";
import Gender from "./categorys/Gender";
import Species from "./categorys/Species";
import Status from "./categorys/Status";

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
    <div className="w-full flex flex-col md:flex-row justify-center items-center">
      <Status
        pageNumber={pageNumber}
        setPagenumber={setPagenumber}
        title={"Status..."}
        setValue={setStatus}
        options={["alive", "dead", "unknown"]}
        value={status}
      />
      <Species
        setPagenumber={setPagenumber}
        title="Species..."
        options={["Human", "humanoid", "Alien", "unknown"]}
        setValue={setSpecies}
        value={species}
      />
      <Gender
        setPagenumber={setPagenumber}
        title="Gender..."
        options={["female", "male", "genderless", "unknown"]}
        setValue={setGender}
        value={gender}
      />
    </div>
  );
}
