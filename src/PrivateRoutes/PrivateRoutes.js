import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthPro/AuthPro';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { user } = useContext(AuthContext);

    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/Login'></Navigate>;
};

export default PrivateRoutes;