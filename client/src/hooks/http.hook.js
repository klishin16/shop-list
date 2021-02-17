import {useState, useCallback} from 'react'
import { useMessage } from './message.hook'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const message = useMessage()

    const request = useCallback( async (url, method='GET', body=null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            
            const response = await fetch(url, {method, body, headers}) 
            const data = await response.json()

            if (!response.ok) {
                console.log("Http Hook:", data.message);
                message(`Http Hook: ${data.message.message}`)
                throw new Error(data.message || "Что-то пошло не так")
                //TODO исправить проброс ошибок
            }

            setLoading(false)

            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading , request, error, clearError }
}