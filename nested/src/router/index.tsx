import React, { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/home";
import { About } from "../pages/about/about";
import { Product } from "../pages/products";
import { Setting } from "../routes/setting";
/* import { OverView } from "../routes/overView"; */
const OverView = lazy(()=> import("../routes/overView/index.tsx"));
import { DashBoard } from "../pages/dashboard";
import { RouteTest } from "../routes/routeTest";
import { RouteTest1 } from "../routes/routeTest1";
import { Profile } from "../components/profile";
import { UserProfile } from "../pages/userProfile";

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
            {
                path: "profile",
                element:(
                <UserProfile isAuthenticated={false}>
                    <Profile/>
                </UserProfile>
                )
            }
            
        ],
        errorElement: <h2> Error not found 404</h2>
    }
]);

export {router}