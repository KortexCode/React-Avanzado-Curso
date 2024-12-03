import React, {FC} from "react";
//HOC que recibe un componente como parámetro, se ajustan los tipos y las condiciones del nuevo componente a retornar
function withLoading<T extends object> (Component: React.ComponentType<T>) {

  return (props: T & {isLoading: boolean}) => {
    const {isLoading, ...rest} = props;
    return isLoading ? <p>Loading🌐...</p> : <Component {...rest as T}/>
  }
}
//Se crea el componente y su tipado, que vamos a pasar por argumento en withLoading()
type componentWithoudLoadingProps = {
  message: string;
}
const ComponentWithoudLoading: FC<componentWithoudLoadingProps>  = ({message})=> <p>{message}</p>

//Obtenemos el nuevo componente
const ComponentWithLoading = withLoading(ComponentWithoudLoading)

//Lo usamos en otro componente contenedor
export const ParentComponent = () => {
  return (
    <div>
      <ComponentWithLoading message="Hello chikorita" isLoading={false}/>
      <ComponentWithLoading message="Hello chikorita" isLoading={true}/>
    </div>
  );
};
