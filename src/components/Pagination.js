import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ info, pageNumber, setPagenumber }) {
  return (
    <ReactPaginate
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      className="z-10 flex flex-row justify-center w-1/5 my-5 mx-auto "
      previousLabel="Prev"
       previousClassName="flex items-center justify-center px-5 w-10 h-10  transition-colors duration-150 rounded px-6 py-3 bg-green-500 text-white bold transition ease-in hover:scale-110"

      nextLabel="Next"
      nextClassName="flex items-center justify-center px-5 w-10 h-10  transition-colors duration-150 rounded px-6 py-3 bg-green-500 text-white bold  transition ease-in hover:scale-110"

      pageClassName="flex items-center justify-center px-5 w-10 h-10 text-white transition-colors duration-150 rounded  mx-1"

      activeClassName="flex items-center w-10 h-10 text-white transition-colors duration-150 bg-sky-400  rounded  focus:shadow-outline"

      activeLinkClassName="text-green"

      pageRangeDisplayed="2"
      marginPagesDisplayed="1"

      onPageChange={(data) => {
        setPagenumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
}
