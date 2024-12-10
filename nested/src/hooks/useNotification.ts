
import { useContext } from "react"
import { NotificationContext } from "../contexts/notificationContext"
//Usaremos este hook para traer el contexto con useContext una sola vez
const useNotification = () => {
    //Treamos el contexto
    const context = useContext(NotificationContext);
 
    if (context === undefined) {
        throw new Error("useNotification debe ser usado dentro de un NotificationProvider")
    }

  return context;
};

export {useNotification}