import React from "react"
import { useParams } from "react-router-dom"
import { NotificationContainer } from "../../components/notificationContainer";

function Product () {

    const {id}= useParams<{id: string}>();
  
    return(
        <section>
            <p>Producto número: {id} </p>
            <NotificationContainer/>
        </section>
    )

}

export {Product}