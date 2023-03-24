import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import InsertCode from '../components/login/insertCode/InsertCode'
import Login from '../components/login/Login'
import LoginWithPhone from '../components/login/loginWithPhone/LoginWithPhone'
import Register from '../components/register/Register'
import UpdateUser from '../components/updateUser/UpdateUser'
import { auth } from '../firebase/firebaseConfig'
import { doLogin, loginUser } from '../redux/actions/loginActions'
import PrivateRoutes from './PrivateRoutes'

const RouterDom = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(
                    loginUser({
                      user: {
                        name: user.displayName,
                        photo: user.photoURL,
                        email: user.email
                        },
                        error: {
                            status: false,
                            message: ""
                        }
                    })
                  );
                dispatch(doLogin(true));
            }
        })

    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PrivateRoutes><Home/></PrivateRoutes>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/verifyphone' element={<LoginWithPhone />} />
                <Route path='/insertcode' element={<InsertCode />} />
                <Route path='/updateprofile' element={<UpdateUser />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterDom