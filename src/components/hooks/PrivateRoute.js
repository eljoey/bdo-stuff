import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ component }) => {
    const Component = component;
    const token = localStorage.getItem('token');

    if (!token) {
        return <Redirect to={{ pathname: '/login' }} />;
    } else {
        return <Component />;
    }
};

export default PrivateRoute;
