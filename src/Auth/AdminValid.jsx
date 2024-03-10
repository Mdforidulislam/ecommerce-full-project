import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useGetRegisterdata from "../Hooks/useGetRegisetUser";

const AdminValid = ({children}) =>{
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [userData] = useGetRegisterdata(user?.email);
    const userRole = userData?.result?.userType;

    if(!userRole) return navigate('/login')

    return userRole ? children  : null;
}

export default AdminValid;