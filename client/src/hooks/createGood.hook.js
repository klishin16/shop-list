import { useState, useCallback, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from './message.hook'

export const useCreateGood = () => {
    const { token } = useContext(AuthContext)
    const message = useMessage()

    const [good, setGood] = useState({
        product: null,
        amount: 0
    })

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState()


    const { loading, error, request, clearError } = useHttp()

    const fetchProducts = useCallback( async () => {
        try {
            const productsData = await request('api/products')
            setProducts(productsData)
        } catch (e) {
            console.log("ERROR -> Load Products: ", e);
        }
    }, [request])

    const selectHanlder = (e) => {
        setGood({
            ...good,
            product: e.target.value
        })
    }

    const amountHandler = (e) => {
        setGood({
            ...good,
            amount: parseInt(e.target.value)
        })
    }

    const createHandler = async () => {
        try {
            const authorizationStr = `Bearer ${token}`
            await request('api/goods', 'POST', good, {
                Authorization: authorizationStr
            })
            message("Товар успешно создан!")
        } catch (e) {
            console.log("ERROR -> Create Good: ", e);
        }
    }

    return {
        products,
        fetchProducts,
        bindSelect: {value: product, onChange: selectHanlder},
        bindAmount: {value: good.amount, onChange: amountHandler},
        good,
        createHandler,
        loading
    }
}
