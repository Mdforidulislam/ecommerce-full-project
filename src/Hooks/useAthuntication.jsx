import { useEffect, useState } from "react";


const useAthuntication = (email) => {
    const [ValideUser,setValidUser] = useState({})
      useEffect(()=>{
        fetch('')
        .then(res => res.json())
        .then(data => setValidUser(data))
      },[])

      return {ValideUser}
};

export default useAthuntication;