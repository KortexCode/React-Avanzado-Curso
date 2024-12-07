import React, { useRef } from "react";

export const UncontrolledInput = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  const handleClickBtnSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log(inputRef.current)
    const inputValue = inputRef.current?.value;
    const inputValue2 = input2Ref.current?.value;
    
    if(inputValue && inputValue2){
      alert(`Has agregado el producto "${inputValue}" al carrito, cantidad: ${inputValue2}`)
    }else{
      alert("Debes agregar un producto y la cantidad")
    }
  }

  return (
    <div>
      <input 
        ref={inputRef}
        type="text" 
        placeholder="Nombre del producto, ejemplo: Banana"
      />
      <input 
        ref={input2Ref}
        type="number" 
        placeholder="Ingresa la cantidad"
      />
      <button onClick={handleClickBtnSubmit}>Ingresar al carrito</button>
    </div>
  );
};
