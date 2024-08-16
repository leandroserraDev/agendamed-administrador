import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes(){
     const token = localStorage.getItem("token");
    let auth = {'token': token }
    
    return (
        auth.token ? <Outlet/> : <Navigate to ="auth"/>       
    )
}

export default PrivateRoutes;