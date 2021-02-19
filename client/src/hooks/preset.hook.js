import { useState, useCallback } from 'react'
import { useHttp } from '../hooks/http.hook'

export const usePreset = () => {
    const [preset, setPreset] = useState({
        title: '',
        goods: [],
        owner: null
    })
    
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


    return {
        preset,
        loadPreset,
        patchPreset,
        loading,
    }
}