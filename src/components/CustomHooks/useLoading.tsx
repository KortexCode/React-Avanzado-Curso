import { useEffect, useState } from "react";

export function useLoading(initialValue: boolean) {
    const [isLoading, setIsLoading] = useState(initialValue);

     //Simulando asincronismo , respuesta a carga del mensaje
    useEffect(()=> {
     setTimeout(()=> {
         setIsLoading(!isLoading)
     }, 3000)
    }, []);

    return {
        isLoading,
    }
}