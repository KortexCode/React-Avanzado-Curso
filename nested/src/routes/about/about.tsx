import React from "react"
import { useLocation } from "react-router-dom"

function About() {
    const {state} = useLocation();
    
    if(state){
        return (
            <div>
                <p>This is an about us</p>
                <p>{state.message}</p>
            </div>
        )
    }
    return (
        <div>
            <p>This is an about us</p>
        </div>
    )

}

export {About}