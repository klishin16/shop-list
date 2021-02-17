import { useState, useCallback, useMemo } from 'react'
import { useHttp } from '../hooks/http.hook'

import { purchaseStyle } from '../styles' 

export const usePurchase = (initialPurchase) => {
    const [purchase, setPurchase] = useState(initialPurchase)
    const { loading, error, request, clearError } = useHttp()
    const [bgColor, setBgColor] = useState(purchaseStyle.buy) // цвет фона товара в корзине

    useMemo(() => {
        purchase.buy ? setBgColor(purchaseStyle.bought) : setBgColor(purchaseStyle.buy)
    }, [purchase]) 

    const buyHandler = () => {
        setPurchase({
            ...purchase,
            buy: !purchase.buy
        })
    }

    return {
        purchase,
        bgColor,
        buyHandler,
        loading,
    }
}