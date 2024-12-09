import React from "react";
import { createHashRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../routes/home";
import { About } from "../routes/about/about";

const router = createHashRouter([
    {
        path: "/",
        element:<Layout/>,
        children:[
            {
                path: "/",
                element:<Home/>,
            },
            {
                path: "about",
                element:<About/>,
            }
        ],
        errorElement: <h2> Error no se enceuntra</h2>
    }
]);

export {router}