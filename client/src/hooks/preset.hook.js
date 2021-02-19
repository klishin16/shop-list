import { useState, useCallback, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from './message.hook'



export const usePreset = () => {
    const [preset, setPreset] = useState({
        title: '',
        purchases: [],
        owner: null
    })

    const { userId, token } = useContext(AuthContext)
    const message = useMessage()
    
    const { loading, error, request, clearError } = useHttp()
    const [goods, setGoods] = useState([])

    const loadPreset = useCallback(async (presetId) => {
        try {
            const data = await request(`/api/presets/${presetId}`)
            setPreset(data)
        } catch (e) {
            // Уже обработали в http.hook
        }
    }, [request])

    const patchPreset = (async (presetId) => {
        console.log("Patch Preset");
        try {
            await request(`/api/presets/${presetId}`, 'POST', preset)
        } catch (e) {
            // Уже обрабатывали
        }
    })

    const patchPresetGoods = async (presetId, potenshialGoodsList) => { // потенциально purchase
        console.log("Patch pontenshialPurchases");
        const pontenshialPurchases = potenshialGoodsList.map(potGood => {
            return {
                good: potGood,
                things: 1,
                buy: false
            }
        })
        try {
            await request(`/api/presets/${presetId}/patchPurchases`, 'POST', pontenshialPurchases)
        } catch (e) {
            // Уже обрабатывали
        }
    } 

    const titleChangeHandler = (e) => {
        setPreset({
            ...preset,
            title: e.target.value
        })
    }

    const createPreset = (async () => {
        console.log("Create Preset");
        setPreset({
            ...preset,
            owner: userId
        })
        try {
            const authorizationStr = `Bearer ${token}`
            await request(`/api/presets`, 'POST', preset, {
                Authorization: authorizationStr
            })
            message("Пресет успешо создан!")
        } catch (e) {

        }
    })


    return {
        preset,
        loadPreset,
        patchPreset,
        bindTitle: {
            value: preset.title,
            onChange: titleChangeHandler,
        },
        createHandler: createPreset,
        patchPresetGoods,
        loading,
    }
}