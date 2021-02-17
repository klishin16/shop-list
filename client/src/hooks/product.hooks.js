import { useState, useCallback } from 'react'
import { useHttp } from '../hooks/http.hook'

export const useProduct = (initialProduct) => {
    const [product, setProduct] = useState(initialProduct)
    
    const { loading, error, request, clearError } = useHttp()

    const onChange = event => {
        const target = event.target
        const name = target.name
        const value = target.value
        setProduct({
            ...product,
            [name]: value
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