import React, { createContext, useState } from "react"

interface NotificationContextType {
  message: string | null;
  handleShowNotification: (msg: string) => void;
  handleHideNotification: () => void;
}
//Creación del contexto
const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

//Componente contenedor de contexto para sus componentes hijos
const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //lÓGICA DE MANEJO DE ESTADOS
  const [message, setMessage] = useState<string | null>(null);

  const handleHideNotification = () => {
    setMessage(null);
  }

  const handleShowNotification = (msg: string) => {
    setMessage(msg);
    setTimeout(() => {
      handleHideNotification();
    }, 3000)
  }

  return (
    <NotificationContext.Provider value={{ message, handleShowNotification, handleHideNotification}}>
      {children}
    </NotificationContext.Provider>
  )
}

export {NotificationProvider, NotificationContext}