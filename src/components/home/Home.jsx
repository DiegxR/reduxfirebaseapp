import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './navBar/NavBar'



const Home = () => {
  return (
    <div>
      <NavBar/>
     <Outlet/>
    </div>
  )
}

export default Home