import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddToy from "../components/AddToy/AddToy";
import AllToy from "../components/AllToy/AllToy";
import ViewToy from "../components/ViewToy/ViewToy";
import MyToy from "../components/MyToy/MyToy";
import UpdateToy from "../components/MyToy/UpdateToy";
import PrivateRoute from "./PrivateRoute";
import Blog from "../components/Blog/Blog";



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
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: '/alltoy',
                element: <AllToy></AllToy>
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute><ViewToy></ViewToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toys-server-side.vercel.app/toy/${params.id}`)
            },
            {
                path: '/mytoy',
                element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
            },
            {
                path: '/updateMyToy/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toys-server-side.vercel.app/toy/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;