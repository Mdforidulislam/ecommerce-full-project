import React from 'react';
import Admin from '../Dashboard/Admin/Admin';
import User from '../Dashboard/User/User';
import Seller from '../Dashboard/Seller/Seller';

const ContexUser = ({children}) => {
   const authorization = 'admin';
   if(authorization == 'admin'){
    return <Admin></Admin>
   }
   if (authorization === 'user'){
    return <User></User>
   }
   if(authorization === 'seller'){
    return <Seller></Seller>
   }
};

export default ContexUser;