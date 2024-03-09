import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useGetRegisterdata from '../Hooks/useGetRegisetUser';
import { useNavigate } from 'react-router-dom';

const ValideUser = ({ children }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [userData] = useGetRegisterdata(user.email);
    const userRole = userData?.result?.userType;

    useEffect(() => {
        if (!userRole) {
            navigate('/login');
            
        } else {
            switch (userRole) {
                case 'admin':
                    navigate('/dashboard/admin');
                    break;
                case 'seller':
                    navigate('/dashboard/seller');
                    break;
                case 'user':
                    navigate('/dashboard/user');
                    break;
                default:
                    navigate('/login');
                    break;
            }
        }
    }, [userRole, navigate]);

    return children; // or return children if you want to render them
};

export default ValideUser;
