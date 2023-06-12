import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContexts';
import { Navigate, useLocation } from 'react-router-dom';

const Routes = ({children}) => {
    const {user, loading} =  useContext(AuthContext);
    const location = useLocation();
    if (loading){
        
        return <div>Loading......</div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default Routes;