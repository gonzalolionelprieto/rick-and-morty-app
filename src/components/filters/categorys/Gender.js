import React from "react";

export default function Gender({
  pageNumber,
  setPagenumber,
  title,
  setValue,
  options,
  value,
}) {
  return (
    <div class="flex justify-center m-2">
      <div class="mb-3 w-80 ">
        <select
          class="form-control  flex-auto   w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
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
    </div>
  );
}
