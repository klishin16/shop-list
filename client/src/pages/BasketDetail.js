import React, { useEffect } from 'react'
import { List, ListItem, Box, Button } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom'

import { useMessage } from '../hooks/message.hook'

import { Loader } from '../components/Loader'

import { useBasket } from '../hooks/basket.hook'
import { PurchaseCard } from '../components/PurchaseCard'

export const BasketDetail = () => {

    const message = useMessage()

    const basketId = useParams().id

    const { basket, loadBasket, onChange, patchBasket, loading } = useBasket([])


    useEffect(() => {
        loadBasket(basketId)
    }, [loadBasket, basketId])

    if (loading) {
        return <Loader />
    }

    const listItems = basket.purchases?.map((purchase) =>
        <Box key={purchase._id}>
            <PurchaseCard inPurchase={purchase}>
                <Button variant="outlined">Купить</Button>
            </PurchaseCard>
        </Box>
    );

    return (
        <div>
            <h1>Корзина</h1>
            <div>
                Название: <input type="text" name="title" value={basket.title} onChange={onChange}></input>
            </div>
            <div>
                <Button variant='outlined' color="secondary" onClick={() => patchBasket(basketId)}>Обновить</Button>
            </div>
            <Box>
                {listItems}
            </Box>
            <pre>{JSON.stringify(basket, null, 2)}</pre>
        </div>
    )
}
