import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Error from '../Error/Error';
import Home from '../Pages/Home';
import ProductPage from '../Pages/ProductPage';
import SignleProduct from '../Pages/SignleProduct';
import CheckOut from '../Pages/CheckOut';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Dashboard from '../Layout/Dashboard';
import Admin from '../Layout/Dashboard/Admin/Admin';
import Seller from '../Layout/Dashboard/Seller/Seller';
import User from '../Layout/Dashboard/User/User';
import ValideUser from '../Auth/ValideUser';
import AdminValid from '../Auth/AdminValid';

const Router =createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
             {
                path:'/product',
                element:<ProductPage/>
             },
             {
                path:'/singleProduct',
                element:<SignleProduct/>                     
             },
             {
                path:'/checkout',
                element:<CheckOut/>
             },
             {
                path:'/login',
                element: <ValideUser><Login/></ValideUser>
             },
             {
                path:'/signUp',
                element:<SignUp></SignUp>
             },
            
        ]
    },
    {
      path:'/dashboard',
      element:<Dashboard/>,
      children:[
         {
            path:'/dashboard/admin',
            element:<AdminValid><Admin/></AdminValid>
         },
         {
            path:'/dashboard/sellar',
            element:<AdminValid><Seller/></AdminValid>
         },
         {
            path:"/dashboard/user",
            element:<AdminValid><User/></AdminValid>
         }
      ]
    }
])

export default Router;