import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { doLogoutAsync } from '../../../redux/actions/loginActions'

const NavBar = () => {
    const dispatch = useDispatch()
    const handleLogout = () =>{
        dispatch(doLogoutAsync())
      }
  return (
    <nav className='w-full h-12 bg-red-500  flex items-center justify-around '>
      <img
                className="h-10 w-10 mr-3"
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDRlOTE5OTYxNTQ4NzNkN2MzY2ZmODNhZGIzZGMxNmQ0MDYyNWRiZCZjdD1z/ePc1IPFswJbjNYkgkF/giphy.gif"
                alt="so"
            />
      
        <button onClick={handleLogout} className='p-3 bg-red text-white'>Cerrar sesión</button>
        <NavLink to='/' className='text-white'>Lista de movimientos</NavLink>
        <NavLink to='/new' className='text-white'>Agregar Movimiento</NavLink>
    </nav>
  )
}

export default NavBar