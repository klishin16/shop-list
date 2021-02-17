import React, { useEffect, useCallback, useState, useContext } from 'react'
import { List, ListItem, Button } from '@material-ui/core';

import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

import { AuthContext } from '../context/AuthContext'

import { Loader } from '../components/Loader'
import { BasketCard } from '../components/BasketCard';


export const BasketsPage = () => {

    const { loading, error, request, clearError } = useHttp()
    const { token } = useContext(AuthContext)
    const message = useMessage()

    const [baskets, setBaskets] = useState([])

    const loadBaskets = useCallback(async () => {
        try {
            const authorizationStr = `Bearer ${token}`
            console.log("Auth Str:", authorizationStr);
            const data = await request('api/baskets', 'GET', null, {
                Authorization: authorizationStr
            })
            message("Список корзин загружен!")
            console.log("Data:", data);
            setBaskets(data)
        } catch (e) {
            // Уже обработали в http.hook
            console.log("Basket Page -> errors:", e);
        }
    }, [request, token, message])

    useEffect(() => {
        loadBaskets()
    }, [loadBaskets])

    if (loading) {
        return <Loader />
    }

    const listItems = baskets.map((basket) =>
        <BasketCard key={basket._id} basket={basket}></BasketCard>
    );
    return (
        <div>
            <h1>Список корзин</h1>
            <List>
                {listItems}
            </List>
        </div>
    )
}