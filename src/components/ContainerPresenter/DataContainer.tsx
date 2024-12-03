import React, { useEffect, useState } from "react";
import { DataPresenter } from "./DataPresenter";

type dataJsonProducts = {
  id: number;
  name: string;
  description: string;
  image: string;

}


export const DataContainer = () => {

  const [data, setData] = useState<dataJsonProducts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=> {
    async function fecthData() {
      try {

        const respond = await fetch("/data/data.json");
        if(!respond.ok) {
          throw new Error("The process failed loading the data");
        }
        const getData = await respond.json();
        console.log(getData)
        setData(getData)

      }catch(err){
        setError("Status Error: " + err);
      }finally{
        setLoading(false);
      }
    }

    fecthData();

  }, [])

  return (
    <div>
      {loading && <p>Loading...🧟‍♂️</p>}
      {error && <p>{error}</p>}
      {!loading && <DataPresenter data={data}/>}
    </div>
  );
};



