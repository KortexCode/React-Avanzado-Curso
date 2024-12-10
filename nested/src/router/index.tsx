import React, { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../routes/home";
import { About } from "../routes/about/about";
import { Product } from "../routes/products";
import { Setting } from "../routes/setting";
/* import { OverView } from "../routes/overView"; */
const OverView = lazy(()=> import("../routes/overView/index"));
import { DashBoard } from "../routes/dashboard";
import { RouteTest } from "../routes/routeTest";
import { RouteTest1 } from "../routes/routeTest1";

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
            },
            {
                path: "product/:id",
                element:<Product/>,
            },
            {
                path: "dashboard",
                element:<DashBoard/>,
                children: [
                    {
                        path: "overview",
                        element: (
                        <Suspense fallback={<p>Loading....</p>}>
                            <OverView/>
                        </Suspense>)
                    },
                    {
                        path: "setting",
                        element:<Setting/>
                    },

                ],
            },
            {
                path: "route-test",
                children: [
                    {
                        index: true,
                        element: <RouteTest/>
                    },
                    {
                        path: "test1",
                        element: <RouteTest1/>
                    },
                ]
            },
            
        ],
        errorElement: <h2> Error no se enceuntra</h2>
    }
]);

export {router}