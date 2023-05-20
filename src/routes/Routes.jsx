import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Random from "../components/Random/Random";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddToy from "../components/AddToy/AddToy";
import AllToy from "../components/AllToy/AllToy";
import ViewToy from "../components/ViewToy/ViewToy";
import MyToy from "../components/MyToy/MyToy";
import UpdateToy from "../components/MyToy/UpdateToy";
import PrivateRoute from "./PrivateRoute";


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
            },
            {
                path: '/alltoy',
                element: <AllToy></AllToy>
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute><ViewToy></ViewToy></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: '/mytoy',
                element: <MyToy></MyToy>,
            },
            {
                path: '/updateMyToy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            }
        ]
    },
    {
        path: '/random',
        element: <Random></Random>
    }


])

export default router;