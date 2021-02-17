import React, { useState, useContext, useEffect } from 'react'

import { Loader } from '../components/Loader'
import { AuthContext } from '../context/AuthContext'

import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()

    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register/', 'POST', {...form})
            message(data.message)
            console.log('Register Data:', data)
        } catch (e) {
            // Уже обработали в http.hook
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login/', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
            console.log('Login Handler:', e)
        }
    }
    

    return (
        <div className='row'>
            <div className="col s6 offset-s3">
                {loading && <Loader/>}
                <h2 style={{textAlign: "center", color: "#9e9e9e"}}>SHOP LIST&nbsp;&nbsp;</h2>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input 
                                    placeholder="Введите email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    onChange={changeHandler}/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input 
                                    placeholder="Введите пароль"
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={changeHandler}/>
                                <label htmlFor="email">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            disabled={loading}
                            style={{ marginRight: 10 }}
                            onClick={loginHandler}>
                                Войти
                        </button>
                        <button
                            className="btn grey lighten-1"
                            disabled={loading}
                            onClick={registerHandler}>
                                Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
