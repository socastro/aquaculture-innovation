import React from 'react'
import {
  Navigate,
  Outlet
} from 'react-router-dom'
import UserContext from '../UserContext'
import { useContext } from 'react'

const PrivateRoute = (props) => {
  const {user, setUser, loading} = useContext(UserContext);
  return <Outlet/> 
  //user? <Outlet/> : <Navigate to="/" />;
}

export default PrivateRoute;