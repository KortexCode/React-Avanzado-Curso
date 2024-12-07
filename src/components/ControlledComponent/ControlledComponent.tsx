import React, { useState } from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState("");

  const onEventChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const textValue: string = e.target.value;
    setValue(textValue);
  }

  return (
    <div>
      <input 
        type="text" 
        value={value} 
        onChange={onEventChange} 
        placeholder="Ingrese cupón, ejemplo: XD323LOL"
      />
      <p>Tu cupón de descuento es: <b>{value}</b></p>
    </div>
  );
};
