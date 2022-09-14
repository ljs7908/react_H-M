import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'

const PrivateRoute = ({ authenticate }) => {
    return authenticate ? <ProductDetail /> : <Navigate to="/login" />
}

export default PrivateRoute
