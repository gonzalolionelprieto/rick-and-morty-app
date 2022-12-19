import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Filter from "./components/filters/Filter";
import Nav from "./components/Nav";
import Pagination from "./components/Pagination";

import Search from "./components/Search/Search";

function App() {
  let [pageNumber, setPagenumber] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");


  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

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
      <Filter setStatus={setStatus} status={status} species={species} setSpecies={setSpecies} gender={gender} setGender={setGender} setPagenumber={setPagenumber} pageNumber={pageNumber}/>

      <Cards results={results} />
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPagenumber={setPagenumber}
      />
    </>
  );
}

export default App;
