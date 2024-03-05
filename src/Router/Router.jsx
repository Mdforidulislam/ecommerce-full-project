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
                path:'checkout',
                element:<CheckOut/>
             },
             {
                path:'login',
                element:<Login></Login>
             },
             {
                path:'signUp',
                element:<SignUp></SignUp>
             },
            
        ]
    }
])

export default Router;