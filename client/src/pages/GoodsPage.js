import React, { useEffect, useCallback, useState, useContext } from 'react'
import { List, ListItem, Box, Button } from '@material-ui/core';
// список товаров


import { makeStyles } from '@material-ui/core/styles';


import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

import { AuthContext } from '../context/AuthContext'
import { BasketContext } from '../context/BasketContext'

import { Loader } from '../components/Loader'
import { GoodCard } from '../components/GoodCard'
import { useBasket } from '../hooks/basket.hook'


const useStyles = makeStyles({
    box: {
      marginTop: 9,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'start'
    },
    card: {
        marginLeft: 7,
        marginRight: 7,
        minWidth: 320
    },
    updateButton: {
        marginTop: 14,
        marginLeft: 7
    },
    title: {
      fontSize: 48,
      marginTop: 14,
      marginLeft: 7,
    },
    pre: {
        marginLeft: 7
    },
    pos: {
      marginTop: 12,
    },
  });

//TODO проверка сущестования (выбора) корзины
export const GoodsPage = () => {
    const styles = useStyles()

    const { loading, error, request, clearError } = useHttp()
    const { token } = useContext(AuthContext)
    const message = useMessage()

    const [goods, setGoods] = useState([])

    //x
    const { basketId } = useContext(BasketContext)
    const { basket, loadBasket, addGood, patchBasket } = useBasket()

    useEffect(() => {
        loadBasket(basketId)
    }, [loadBasket, basketId])

    const loadGoods = useCallback(async () => {
        try {
            const authorizationStr = `Bearer ${token}`
            console.log("Auth Str:", authorizationStr);
            const data = await request('api/goods', 'GET', null, {
                Authorization: authorizationStr
            })
            message("Список товаров загружен!")
            console.log("Data:", data);
            setGoods(data)
        } catch (e) {
            // Уже обработали в http.hook
        }
    }, [request, message])

    useEffect(() => {
        loadGoods()
    }, [loadGoods]) //x

    if (loading) {
        return <Loader />
    }

    const listItems = goods.map((good) =>
        <Box className={styles.card} key={good._id}>
            {/* <Link to={`/good/${good._id}`}>{good.title}</Link> //TODO вниз */ }
            <GoodCard good={good} isGoodInBasket={basket.purchases?.includes(good._id)} addToBasket={addGood}></GoodCard>
        </Box>
    );
    return (
        <div>
            <div className={styles.title}>Список товаров</div>
            <Box className={styles.box}>
                {listItems}
            </Box>

            <Button className={styles.updateButton} variant="outlined" color="primary" onClick={() => patchBasket(basketId)}>Обновить корзину</Button>
            <pre className={styles.pre}>{JSON.stringify(basket, null, 2)}</pre>
        </div>
    )
}