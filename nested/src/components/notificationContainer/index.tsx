import React from "react";
import {NotificationButton} from "../notificationBtn";
import {Notification} from "../notification";
import { NotificationProvider } from "../../contexts/notificationContext";
import "./main.css"

function NotificationContainer() {

  return (
    <NotificationProvider>
        <h1>💸 Transacción está casi lista 💸</h1>
        <p>¿Estás seguro de que deseas completar esta transacción?</p>
        <NotificationButton />
        <Notification />  
    </NotificationProvider>
  )
}

export {NotificationContainer}