import React from "react"
import { useParams } from "react-router-dom"

function Product () {

    const {id}= useParams<{id: string}>();
  
    return(
        <section>
            <p>Producto número: {id} </p>
        </section>
    )

}

export {Product}