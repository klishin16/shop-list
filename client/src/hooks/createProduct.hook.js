import { useState, useCallback, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from './message.hook'

export const useCreateProduct = () => {
    const message = useMessage()

    const [product, setProduct] = useState({
        title: "",
        unitOfMeasure: undefined,
        multiplicity: 1
    })

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

    const createHandler = async () => {
        try {
            await request('api/products', 'POST', product)
            message("Продукт успешно создан!")
        } catch (e) {
            console.log("ERROR -> Create Product: ", e);
        }
    }

    return {
        product,
        onChange,
        createHandler,
        loading
    }
}
