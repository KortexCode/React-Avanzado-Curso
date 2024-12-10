import React from "react"
import { Link, useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();

    const handleNavigate: React.MouseEventHandler = () => {
        navigate("about", {state: {message: "It comes from Home"}});
    }

    return (
        <section>
            <nav>
           <ul>
               <li>
                   <Link to={"/product/1"}>Product 1</Link>
               </li>
               <li>
                   <Link to={"/product/2"}>Product 2</Link>
               </li>
           </ul>
        </nav>
            <h1>Welcome Home!!</h1>
            <button type="button" onClick={handleNavigate}>go to about</button>
        </section>
    )
        
}

export {Home}