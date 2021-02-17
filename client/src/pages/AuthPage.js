import React, { useState, useContext, useEffect } from 'react'
import { FormControl, Button, Container, Card, CardContent, makeStyles, Grid, CardActions, TextField } from '@material-ui/core';

import { Loader } from '../components/Loader'
import { AuthContext } from '../context/AuthContext'

import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'


const useStyles = makeStyles({
    authCard: {
        marginTop: 34
    },
    title: {
        fontSize: 43,
        textAlign: 'center'
    },
})

export const AuthPage = () => {
    const styles = useStyles()

    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, error, request, clearError } = useHttp()

    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register/', 'POST', { ...form })
            message(data.message)
            console.log('Register Data:', data)
        } catch (e) {
            // Уже обработали в http.hook
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login/', 'POST', { ...form })
            auth.login(data.token, data.userId)
        } catch (e) {
            console.log('Login Handler:', e)
        }
    }

    if (loading) {
        return <Loader></Loader>
    }


    return (
        <Grid container justify='center' xs={12}>
            <Grid item xs={4}>
                <Card className={styles.authCard}>
                    <CardContent>
                        <div className={styles.title}>SHOP LIST</div>
                        <TextField fullWidth label="Email" placeholder="Введите email" type="text" name="email" onChange={changeHandler} />
                        <TextField fullWidth label="Пароль" placeholder="Введите пароль" type="password" name="password" onChange={changeHandler} />
                        <CardActions>
                            <Button variant='outlined' disabled={loading} style={{ marginRight: 10 }} onClick={loginHandler}>Войти</Button>
                            <Button variant='outlined' disabled={loading} onClick={registerHandler}>Регистрация</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
