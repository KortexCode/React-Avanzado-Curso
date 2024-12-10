import React from "react";
import { useNotification } from "../../hooks/useNotification";

const NotificationButton: React.FC = () => {
  const {handleShowNotification} = useNotification();

  return (
    <button onClick={() => handleShowNotification("✅ ¡Tu transacción se ha realizado con éxito!")}>
      Confirmar Transacción
    </button>
  )
}

export {NotificationButton};