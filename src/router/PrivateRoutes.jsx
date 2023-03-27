import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const PrivateRoutes = ({children}) => {
    const navigate = useNavigate()
    const { isLogged, loading } = useSelector(store => store.login)
    

    
    useEffect(() => {
      if(!loading){
        if(!isLogged){
         navigate('/login')
        }
      }
    }, [isLogged, loading])
    
  return (
    <>
    {
    isLogged ?
    children :
    <></>
    }
    </>
  )
}

export default PrivateRoutes