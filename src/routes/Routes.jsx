import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Random from "../components/Random/Random";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddToy from "../components/AddToy/AddToy";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addtoy',
                element: <AddToy></AddToy>
            }
            
        ]
    },
    {
        path: '/random',
        element: <Random></Random>
    }
    
   
])

export default router;