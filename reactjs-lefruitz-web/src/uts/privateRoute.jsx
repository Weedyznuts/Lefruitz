import { Children } from 'react';
import {Navigate} from 'react-router-dom';


export const PrivateRoute=({Children})=>{
    const token=localStorage.getItem("token");
    return token ? Children : <Navigate to = "/login"/>
};

export const AdminRoute=({Children})=>{
    const token=localStorage.getItem("token");
    const role=localStorage.getItem("role");
    return token && role === "admin" ? Children : <Navigate to = "/login"/>
};

export const UserRoute=({Children})=>{
    const token=localStorage.getItem("token");
    const role=localStorage.getItem("role");
    return token && role === "user" ? Children : <Navigate to = "/login"/>
};