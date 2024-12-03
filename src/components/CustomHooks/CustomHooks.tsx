import React from "react";
import { useLoading } from "./useLoading";

const UserComponent = () => {

  //Se solicita el hook creado
  const {isLoading} = useLoading(false);

  let message: React.ReactNode;
  
  //lógica para mostrar mensaje dependiendo del isLoading estado
  if(isLoading) {
    message = 
      (
        <p>Lok'tar ogar!!🐺</p>
     );
  }else {
    message = (<p>Loading...🧌</p>);
  }
 
  return (
    <div>
        <h2>For the Horde!!</h2>
        {message}
    </div>
  )

};

export const ParentComponent = () => {
  return <UserComponent />;
};
