import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Dashboard from "../Pages/Dashboard";
import About from "../Pages/About";
import Contact from "../Pages/Contact";



function AppRoutes(props) {

    return (
    <Routes>
    
    <Route index element={<Homepage {...props} />} />
    <Route path="/dashboard" element = {<Dashboard {...props} />} />
    <Route path="/about" element = {<About {...props} />} />
    <Route path="/contact" element = {<Contact {...props} />} />

    </Routes>
    )
    }
    
    export default AppRoutes;
