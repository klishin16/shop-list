import { useState, useCallback } from 'react'
import { useHttp } from '../hooks/http.hook'

export const usePreset = () => {
    const [preset, setPreset] = useState({
        title: '',
        goods: [],
        owner: null
    })
    
    const { loading, error, request, clearError } = useHttp()

    //x
    const [goods, setGoods] = useState([])

    const addGood = (goodId) => {
        setPreset({
            ...preset,
            goods: preset.goods.concat(goodId)
        })
    }

    const removeGood = (goodId) => {
        setPreset({
            ...preset,
            goods: preset.goods.filter(good => good._id !== goodId)
        })
    }

    const loadProduct = useCallback(async (productId) => {
        try {
            const data = await request(`/api/products/${productId}`)
            setProduct(data)
        } catch (e) {
            // Уже обработали в http.hook
        }
    }, [request])

    const patchProduct = (async (productId) => {
        console.log("Patch Product");
        try {
            await request(`/api/products/${productId}`, 'POST', product)
        } catch (e) {
            // Уже обрабатывали
        }
    })


    return {
        product,
        loadProduct,
        onChange,
        patchProduct,
        loading,
    }
}