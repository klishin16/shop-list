import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AppBar, Typography, IconButton, Button, Toolbar, Link, MenuItem } from '@material-ui/core';

import { AuthContext } from '../context/AuthContext'
import { BasketContext } from '../context/BasketContext'



export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const { basketId } = useContext(BasketContext)

    const logoutHandler = (e) => {
        e.preventDefault()
        auth.logout()
        history.push('/')
    }

    const currentBasketItem = (
        <div>
            {basketId ? <NavLink to={`/basket/${basketId}`}>Текущая корзина: {basketId}</NavLink> : 'Текущая корзина: Не определена'}
        </div>
    )

    return (
        <nav>
            <AppBar position='static'>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton>SHOP LIST</IconButton>
                        <NavLink to="/create">Создать товар</NavLink>
                        <NavLink to="/create-product">Создать продукт</NavLink>
                        <NavLink to="/create-preset">Создать пресет</NavLink>
                        <NavLink to="/create-basket">Создать корзину</NavLink>
                        <NavLink to="/products">Список продуктов</NavLink>
                        <NavLink to="/goods">Товары</NavLink>
                        <NavLink to="/presets">Пресеты</NavLink>
                        <NavLink to="/baskets">Корзины</NavLink>
                        {currentBasketItem}
                    <Button onClick={logoutHandler}>Выйти</Button>
                </Toolbar>
            </AppBar>
        </nav>
    )
}