import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Dashboard from "../Pages/Dashboard";



function AppRoutes(props) {

    return (
    <Routes>
    
    <Route index element={<Homepage {...props} />} />
    <Route path="/dashboard" element = {<Dashboard {...props} />} />

    </Routes>
    )
    }
    
    export default AppRoutes;
