import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";

export function Layout() {
    return (
       <>
        <nav>
           <ul>
               <li>
                   <Link to={"/"}>Home</Link>
               </li>
               <li>
                   <Link to={"about"}>About</Link>
               </li>
               <li>
                   <Link to={"dashboard"}>Dashboard</Link>
               </li>
               <li>
                   <Link to={"todo-list"}>TodoList</Link>
               </li>
           </ul>
        </nav>
           <Outlet/>
       </>
     
    )
}