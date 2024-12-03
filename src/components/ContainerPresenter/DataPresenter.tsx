import React from "react";

type dataJsonProducts = {
  id: number;
  name: string;
  description: string;
  image: string;

}

interface DataPresenterProps {
  data: dataJsonProducts[]; 
}

export const DataPresenter: React.FC<DataPresenterProps> = ({data}) => {
  return (
    <> 
      {data.map((item) => {
        return ( 
          <React.Fragment key={item.id}>
            <em>{item.id}</em> 
            <em>{item.name}</em>
            <p>{item.description}</p>
            <img src={item.image} alt={item.name} />
          </React.Fragment>
          )
      })}
    </>
  
  );
};
