import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ info, pageNumber, setPagenumber }) {
  return (
    <ReactPaginate
      className="flex flex-row justify-center w-1/5 my-5 mx-auto "
      previousLabel="<"
      previousClassName="flex items-center justify-center px-5 w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full  hover:bg-indigo-100"
      nextLabel=">"
      nextClassName="flex items-center justify-center px-5 w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full  hover:bg-indigo-100"
      pageClassName="flex items-center justify-center px-5 w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full  "
      activeClassName="flex items-center w-10 h-10 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline"
      activeLinkClassName="text-white"
      onPageChange={(data)=>{
        setPagenumber(data.selected + 1 )
      }}
      pageCount={info?.pages}
    />
  );
}
