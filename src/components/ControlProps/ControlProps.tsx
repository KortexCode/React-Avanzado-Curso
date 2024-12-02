import { useState } from "react";
//El componente de React recibe de forma opcional dos props:
//Un valor boleano para saber si debe estar activo algo dentro
//Una función que cambia el estado
type ToggleProps = {
  isToggle?: boolean;
  onToggle?: (value: boolean) => void;
}


export const Toggle: React.FC<ToggleProps> = ({
  isToggle = false,
  onToggle,
}) => {
  const [internalToggle, setInternalToggle] = useState(isToggle);
  
  const handleToggle = () => {
    setInternalToggle(prev => !prev);
  
    if (onToggle) {
     
      onToggle(!internalToggle);
    } 
  };

  return <button onClick={handleToggle}>{internalToggle ? "ON" : "OFF"}</button>;
};

export const ParentComponent = () => {
  const [toggleState, setToggleState] = useState(false);
  
  return (
    <div>
      <p>Toogle is {toggleState ? "ON🚀" : "OFF⬇️"}</p>
      <Toggle isToggle={toggleState} onToggle={setToggleState} />
    </div>
  );
};
