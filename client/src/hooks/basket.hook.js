import { useState, useEffect, useContext, useCallback } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

import { BasketContext } from '../context/BasketContext'
import { AuthContext } from '../context/AuthContext'


export const useBasket = () => {
    const [basket, setBasket] = useState({
        title: "",
        purchases: [],
        total: 0,
    })

    const { token } = useContext(AuthContext)
    const message = useMessage()

    //x
    const { basketId } = useContext(BasketContext)

    
    const { loading, error, request, clearError } = useHttp()

    const onChange = event => {
        const target = event.target
        const name = target.name
        const value = target.value
        setBasket({
            ...basket,
            [name]: value
        })
    }

    // возвращает текущую выбранную корзину или null в случае ее отсутствия
    let currentBasket = basket?.title ? basket.title : null

    const loadBasket = useCallback(async (basketId) => {
        try {
            const data = await request(`/api/baskets/${basketId}`)
            setBasket(data)
        } catch (e) {
            // Уже обработали в http.hook
        }
    }, [request])

    const patchBasket = (async (basketId_) => {
        console.log("Patch Basket:", basket);
        try {
            await request(`/api/baskets/${basketId_}`, 'POST', basket)
            message("Корзина успешно обновлена!")
        } catch (e) {
            // Уже обрабатывали
        }
    })

    const addGood = (async (goodId) => {
        console.log("Add Good", basket.purchases.concat(goodId));
        // setBasket({
        //     ...basket,
        //     goods: basket.goods.concat(goodId)
        // })
        const potenshialPurchase ={
            good: goodId,
        }
        try {
            await request(`/api/baskets/${basketId}/addGood`, 'POST', potenshialPurchase)
            message("Товар успешно добавлен в корзину!")
            loadBasket(basketId) //TODO
        } catch (e) {   
        }
    })

    const addPresetGoods = async (presetObj) => {
        console.log("Add Preset Goods:", presetObj);
        try {
            await request(`/api/baskets/${basketId}/addPreset`, 'POST', presetObj)
            message("Пресет товаров успешно добавлен в корзину!")
            // loadBasket(basketId) TODO хз
        } catch (e) {
               
        }
    }

    const titleChangeHandler = (e) => {
        setBasket({
            ...basket,
            title: e.target.value
        })
    }

    const createBasket = async () => {
        console.log("Create Basket");
        try {
            const authorizationStr = `Bearer ${token}`
            await request(`/api/baskets/`, 'POST', basket, {
                Authorization: authorizationStr
            })
            message("Корзина успешно создана!")
        } catch (e) {   
        }
    }

    //x
    useCallback(() => {
        console.log("Here");
        patchBasket(basketId)
    }, [basket.goods])


    return {
        basket,
        loadBasket,
        onChange,
        patchBasket,
        loading,
        currentBasket,
        addGood,
        addPresetGoods,
        bindTitle: {
            value: basket.title,
            onChange: titleChangeHandler,
        },
        createBasket
    }
}