import { useEffect,useState } from "react";
import Cards from "./components/Cards";
import Nav from "./components/Nav";

function App() {
  const [character, setCharacter] = useState([]);

  const inicialUrl = "https://rickandmortyapi.com/api/character";
  
  const fetchAllCharacter = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacter(data.results))
      .catch((err) => console.log(err))
  };

  useEffect(() => {
    fetchAllCharacter(inicialUrl);
  }, []);

  return (
    <>
      <Nav />
      <Cards characters={character} />
    </>
  );
}

export default App;
