import React, { useEffect, useState } from "react";
import { useLoading } from "./useLoading";

const UserComponent = () => {

  const {isLoading, setIsLoading} = useLoading(false);
  const [activeBtn, setActiveBtn] = useState(false);

  let message: React.ReactNode;
  //Función del botón para mostrar mensaje
  const handleClickMessage: React.MouseEventHandler = () => {
    if(!isLoading) {
      setIsLoading(!isLoading);
    }
  }
  //lógica para mostrar mensaje
  if(isLoading) {
    message = 
      (
        <p>Lok'tar ogar!!🐺</p>
     );
  }else {
    message = (<p>Loading...🧌</p>);
  }
  //Simulando asincronismo , respuesta a carga del mensaje
 useEffect(()=> {
  setTimeout(()=> {
      setActiveBtn(!activeBtn)
  }, 3000)
 }, []);
  
  return (
    <div>
        <h2>For the Horde!!</h2>
        {message}
        {activeBtn && <button  onClick={handleClickMessage}>Show Message</button>}
    </div>
  )

};

export const ParentComponent = () => {
  return <UserComponent />;
};
