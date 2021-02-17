import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useMessage } from '../hooks/message.hook'

import { Loader } from '../components/Loader'

import { useProduct } from '../hooks/product.hooks'


export const ProductDetail = () => {

    const message = useMessage()

    const productId = useParams().id

    const { product, loadProduct, onChange, patchProduct, loading } = useProduct([])


    useEffect(() => {
        loadProduct(productId)
    }, [loadProduct])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <h1>Product Detail</h1>
            <div>
                Название: <input type="text" name="title" value={product.title} onChange={onChange}></input>
            </div>
            <div>
                <div style={{ textAlign: 'center' }}>Единицы измерения: </div>
                <div><input type="text" name="unitOfMeasure" value={product.unitOfMeasure} onChange={onChange}></input></div>
            </div>
            <div>
                <div style={{ textAlign: 'center' }}>Кратность </div>
                <div><input type="text" name="multiplicity" value={product.multiplicity} onChange={onChange}></input></div>
            </div>
            <div>
                <button className="btn" onClick={() => patchProduct(productId)}>Обновить</button>
            </div>
            <pre>{JSON.stringify(product, null, 2)}</pre>
        </div>
    )
}