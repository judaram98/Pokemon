import { useEffect, useState } from "react";

const Home = () => {
  const [offset, setOffset] = useState(4);
  const [fetchedData, setFetchedData] = useState([]);
  let api = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=4`;

  useEffect(() => {
    //Lets open an IIFE function to fetch data
    (async function () {
      //   //Now we are going to tell javascript that wait until fetching data from API and convert it into a json
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
      console.log(fetchedData);
    })();
  }, [api]);

  return (
    <div className="border-2 h-4/6">
      <h1>Hola</h1>
    </div>
  );
};

export default Home;
