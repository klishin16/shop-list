import React, { useContext } from 'react'
import {Link, NavLink, useHistory} from 'react-router-dom'
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
            {basketId ? <Link to={`/basket/${basketId}`}>Текущая корзина: {basketId}</Link> : 'Текущая корзина: Не определена'}
        </div>
    )

    return (
        <nav>
            <div className="nav-wrapper grey darken-4" style={{ padding: "0 1rem" }}>
                <div><a href="/" className="brand-logo">SHOP LIST</a></div>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Создать товар</NavLink></li>
                    <li><NavLink to="/create-product">Создать продукт</NavLink></li>
                    <li><NavLink to="/create-preset">Создать пресет</NavLink></li>
                    <li><NavLink to="/products">Список продуктов</NavLink></li>
                    <li><NavLink to="/goods">Товары</NavLink></li>
                    <li><NavLink to="/presets">Пресеты</NavLink></li>
                    <li><NavLink to="/baskets">Корзины</NavLink></li>
                    <li>{currentBasketItem}</li>
                    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}