import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader';

const PrivetRoutes = ({children}) => {
    const {user, loader} = useContext(AuthContext)

    if(loader){
        return <Loader></Loader>
    }

    if(user && user.email){
        return children
    }
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivetRoutes;