import React from 'react'
import { useDispatch } from 'react-redux'
import { doLogoutAsync } from '../../redux/actions/loginActions'
import FinanzasForm from './finanzasForm/FinanzasForm'

const Home = () => {
  const dispatch = useDispatch()
  
  const handleLogout = () =>{
    dispatch(doLogoutAsync())
  }
  return (
    <div>
      <nav>
        <button onClick={handleLogout} className='p-3 bg-red text-white'>Cerrar sesión</button>
      </nav>
      <FinanzasForm/>
    </div>
  )
}

export default Home