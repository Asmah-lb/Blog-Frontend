import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContent";

const ProtectedRoute = () =>{
    let {user} = useAuthContext();

    return(
        !user ? <Navigate to="/login"/> : <Outlet/>
    )
}
export default ProtectedRoute;