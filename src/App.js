import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import Pagination from "./components/Pagination";

import Search from "./components/Search/Search";

function App() {
  let [pageNumber,setPagenumber] =useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let {info,results}=fetchedData;

  let [search, setSearch] = useState(" ");

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

 

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);

    })();
  }, [api]);
  

 

  return (
    <>
      <Nav />
      <Search search={search} setSearch={setSearch} />
      <Pagination info={info} pageNumber={pageNumber} setPagenumber={setPagenumber} />
      <Cards results={results} />
      
    </>
  );
}

export default App;
