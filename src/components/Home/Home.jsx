import { useEffect, useState } from "react";

const Home = ({ prevPage, setPrev, nextPage, setNext }) => {
  const [fetchedData, setFetchedData] = useState([]);
  let { next, previous, results } = fetchedData;
  const [api, setApi] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=4"
  );

  useEffect(() => {
    //Lets open an IIFE function to fetch data
    (async function () {
      //   //Now we are going to tell javascript that wait until fetching data from API and convert it into a json
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  useEffect(() => {
    if (prevPage && previous !== null) {
      setApi(previous);
      setPrev(false);
    } else if (nextPage && next !== null) {
      setApi(next);
      setNext(false);
    }
  }, [prevPage, nextPage]);

  let display;
  if (fetchedData) {
    display = results?.map((character, id) => {
      return (
        <div key={id}>
          <h1>{character.name}</h1>
        </div>
      );
    });
  } else {
    display = "No results found";
  }
  return <div className="border-2 h-4/6">{display}</div>;
};

export default Home;
