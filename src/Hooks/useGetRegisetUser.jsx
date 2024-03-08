// get user data here 

import axios from "axios";
import { useEffect, useState } from "react";

const useGetRegisterdata = (email) => {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/user/${email}`)
            .then(res => { setUserData(res.data) })
            .catch(error => { console.error(error) })
    }, [email])

    return [userData]
}

export default useGetRegisterdata;
