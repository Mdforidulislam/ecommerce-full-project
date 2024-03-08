import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useGetRegisterdata from '../Hooks/useGetRegisetUser';
import { useNavigate } from 'react-router-dom';

import Login from '../Pages/Login/Login';
import Admin from '../Layout/Dashboard/Admin/Admin';
import Seller from '../Layout/Dashboard/Seller/Seller';
import User from '../Layout/Dashboard/User/User';

const ValideUser = ({ userType,children }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [userData] = useGetRegisterdata(user.email);
    
        const userRole = userData?.result?.userType;
    
        // Check if the user is authorized to access this route
        if (userRole == userType) {
            navigate("/login"); // Redirect unauthorized users to login page
            return null; // Return null to prevent rendering any unauthorized content
        }
    
        return children; // Render the child component if the user is authorized
 
    
};

export default ValideUser;


