import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Login from '../Pages/Login/Login';
import useAthuntication from '../Hooks/useAthuntication';
import Admin from '../Layout/Dashboard/Admin/Admin';
import Seller from '../Layout/Dashboard/Seller/Seller';
import User from '../Layout/Dashboard/User/User';

const ValideUser = ({ children }) => {
    const { user } = useContext(AuthContext);
    // const {ValideUser} = useAthuntication(user?.email);
    // your need to  dynamice this ! i also do just statice , fast just implement the firebsae authentication properly , get user form the login , and i also provide backend api 
    const ValideUser = 'seller'
    
    // If user is not logged in, render login page
    if (!user) return <Login />;

    // Assuming you have a function useAthuntication to validate user
    // const ValideUser = useAthuntication(user?.email);

    // Conditionally render based on the type of user
    if (ValideUser === 'admin') return <Admin>{children}</Admin>;
    if (ValideUser === 'seller') return <Seller>{children}</Seller>;
    if (ValideUser === 'user') return <User>{children}</User>;

    // Default return, in case the user type is not recognized
    return null;
};

export default ValideUser;
