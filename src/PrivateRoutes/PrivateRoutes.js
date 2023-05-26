import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthPro/AuthPro';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // const location = useLocation();
    // state={{ from: location }} replace

    if (loading) {
        return <div>loding...</div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/Login'  ></Navigate>
};

export default PrivateRoutes;