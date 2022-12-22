import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Filter from "./components/filters/Filter";

import Header from "./components/Header.js/Header";
import Modal from "./components/Modal/Modal";

import Pagination from "./components/Pagination";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
import Search from "./components/Search/Search";

function App() {
  
  return (
    <>
    
    <Router location={{path:'/'}}>

      <Routes>
        <Route path="/" element={<Home />}/>  
      </Routes>
    </Router>
    
     
    </>
    
      
        
  );
}

const Home=()=>{
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
  return(
    <>
    <Header />
        <Search search={search} setSearch={setSearch} />
        <Filter
          setStatus={setStatus}
          status={status}
          species={species}
          setSpecies={setSpecies}
          gender={gender}
          setGender={setGender}
          setPagenumber={setPagenumber}
          pageNumber={pageNumber}
        />

        <Cards results={results} />
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPagenumber={setPagenumber}
        />
        <Modal />
        <ParticlesBackground />
    
    
    </>
  )
}


export default App;
