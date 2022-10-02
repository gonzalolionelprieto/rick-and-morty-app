import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import Pagination from "./components/Pagination";

function App() {
  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState({});

  const inicialUrl = "https://rickandmortyapi.com/api/character";

  const fetchAllCharacter = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.results);
        setInfo(data.info);
      })
      .catch((err) => console.log(err));
  };

  const onPrevius = () => {
    fetchAllCharacter(info.prev);
  };

  const onNext = () => {
    fetchAllCharacter(info.next);
  };

  useEffect(() => {
    fetchAllCharacter(inicialUrl);
  }, []);

  return (
    <>
      <Nav />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevius={onPrevius}
        onNext={onNext}
      />
      <Cards characters={character} />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevius={onPrevius}
        onNext={onNext}
      />
    </>
  );
}

export default App;
