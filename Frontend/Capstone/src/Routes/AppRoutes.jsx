import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Dashboard from "../Pages/Dashboard";
import About from "../Pages/About";
import Settings from "../Pages/Settings";
import Login from "../Pages/LoginPage";



function AppRoutes(props) {

    return (
    <Routes>
    
    <Route index element={<Homepage {...props} />} />
    <Route path="/dashboard" element = {<Dashboard {...props} />} />
    <Route path="/about" element = {<About {...props} />} />
    <Route path="/settings" element = {<Settings {...props} />} />
    <Route path="/login" element = {<Login {...props} />} />


    </Routes>
    )
    }
    
    export default AppRoutes;
