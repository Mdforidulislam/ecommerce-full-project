import axios from "axios";
import { useState, useEffect } from "react";

// register user 

const useRegisterUser = (user) => {
    const [register, setRegister] = useState({});
    console.log(user);

    useEffect(() => {
        if (user) {
            const userName = user.displayName || (user.email && user.email.split('@')[0]);
            const userInfo = { userName: userName, userEmail: user.email, userType: 'user' };

            axios.post(`http://localhost:5000/register`, userInfo)
                .then(res => {
                    console.log('Response from server:', res.data);
                    setRegister(res.data);
                })
                .catch(error => {
                    console.error('Error occurred:', error);
                });
        }
    }, [user]);

    return register;
};


export default useRegisterUser;
