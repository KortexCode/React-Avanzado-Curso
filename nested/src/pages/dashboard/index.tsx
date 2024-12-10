import React from "react"
import { Link, Outlet } from "react-router-dom"


function DashBoard () {

    return(
        <section>
            <nav>
                <ul>
                    <li>
                        <Link to={"overview"}>Overview</Link>
                    </li>
                    <li>
                        <Link to={"setting"}>Setting</Link>
                    </li>
                </ul>
            </nav>
            <p>I'm DashBoard!</p>
            <Outlet/>
        </section>
    )

}

export {DashBoard}