import React from "react";
//Tipado para las props del Component Child
type ChildComponentProps = {
  render: (name: string) => JSX.Element
}

export const ChildComponent: React.FC<ChildComponentProps> = ({render}) => {

  const name = "Chikorita";
  return (
    <div>
      {render(name)}
    </div>
  );
};

export const ParentComponent = () => {
  return (  
      <ChildComponent render={(name)=> {
        return(
        <>
          <h1>WELCOME</h1>
          <p>{name}</p>
        </>) 
      }}/> 
  );
};
