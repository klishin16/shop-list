import React, { useEffect, useCallback, useState } from 'react'
import { Box, List, ListItem } from '@material-ui/core';

import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

import { Loader } from '../components/Loader'
import { ProductCard } from '../components/ProductCard'




export const ProductsPage = () => {

    const { loading, error, request, clearError } = useHttp()
    const message = useMessage()

    const [products, setProducts] = useState([])

    const loadProducts = useCallback(async () => {
        try {
            const data = await request('api/products')
            message("Список продуктов загружен!")
            setProducts(data)
        } catch (e) {
            // Уже обработали в http.hook
        }
    }, [request, message])

    useEffect(() => {
        loadProducts()
    }, [loadProducts])

    if (loading) {
        return <Loader />
    }

    const listItems = products.map((product) =>
        <ProductCard key={product._id} product={product}></ProductCard>
    );

    return (
        <div>
            <h1>Список cуществующих продуктов</h1>
            <Box>
                {listItems}    
            </Box>
        </div>
    )
}