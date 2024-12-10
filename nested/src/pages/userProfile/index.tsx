import React from "react"
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    isAuthenticated: boolean;
    children: React.ReactNode;
}


function UserProfile(props: ProtectedRouteProps): React.ReactNode {

    const {isAuthenticated, children} = props;
  

    if(isAuthenticated) {
        return <Navigate to={"/"} />        
    }

    return(
        <>
            {children}
        </>
    )

}

export {UserProfile};