import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";

export function Layout() {
    return (
       <div>
           <ul className={"layout_nav"}>
               <li>
                   <Link to={"/"}>Home</Link>
               </li>
               <li>
                   <Link to={"/about"}>About</Link>
               </li>
           </ul>
           <Outlet/>
       </div>
     
    )
}