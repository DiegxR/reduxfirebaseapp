import React from 'react'
import { useDispatch } from 'react-redux'
import { doLogoutAsync } from '../../redux/actions/loginActions'

const Home = () => {
  const dispatch = useDispatch()
  
  const handleLogout = () =>{
    dispatch(doLogoutAsync())
  }
  return (
    <div>
      <nav>
        <button onClick={handleLogout} className='p-4 bg-blue-200'>Cerrar sesión</button>
      </nav>
    </div>
  )
}

export default Home