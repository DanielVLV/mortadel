/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ flag, redirectTo = '/auth' }) {
  const user = useSelector((state) => state.UserSlice.value);
  console.log(user);
  return (
    !!user !== flag ? (<Outlet />) : (<Navigate to={redirectTo} replace />)
  );
}

export default ProtectedRoute;
