import React from 'react'
import { AuthContainer } from '../styles'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <AuthContainer>
        <Outlet/>
    </AuthContainer>
  )
}

export default AuthLayout