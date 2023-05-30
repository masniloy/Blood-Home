import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthPro/AuthPro';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div><Loading></Loading></div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/Login'  ></Navigate>
};

export default PrivateRoutes;


    // const location = useLocation();
    // state={{ from: location }} replace