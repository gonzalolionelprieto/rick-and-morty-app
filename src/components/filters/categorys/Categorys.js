import React from "react";

export default function Categorys({
  pageNumber,
  setPagenumber,
  title,
  setValue,
  options,
  value,
}) {
  return (
    <div className="flex justify-center my-3  w-full lg:mx-3 ">
      <select
        className="select w-full form-control w-max-96 px-3 p-1.5   text-base font-normal     rounded transition ease-in-out m-0   "
        onChange={(e) => {
          setValue(e.target.value);
          if (pageNumber !== 1) {
            setPagenumber(1);
          }
        }}
        value={value}
      >
        {title && <option value="">{title}</option>}
        {options.map((items, index) => (
          <option key={index} value={items}>
            {items}
          </option>
        ))}
      </select>
    </div>
  );
}
