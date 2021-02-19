import React, { useEffect, useCallback, useState, useContext } from 'react'
import { List, ListItem, Button } from '@material-ui/core';

import { useParams } from 'react-router-dom'
import { useMessage } from '../hooks/message.hook'
import { usePreset } from '../hooks/preset.hook'

import { AuthContext } from '../context/AuthContext'

import { Loader } from '../components/Loader'



export const PresetDetail = () => {

    const { token } = useContext(AuthContext)
    const message = useMessage()
    const presetId = useParams().id
    const { preset, loadPreset, loading } = usePreset()

    useEffect(() => {
        loadPreset(presetId)
    }, [loadPreset])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <h1>Preset Detial</h1>
            <div>
                Название: <input type="text" name="title" value={preset.title}></input>
            </div>
            {/* <div>
                <div style={{ textAlign: 'center' }}>Единицы измерения: </div>
                <div><input type="text" name="unitOfMeasure" value={product.unitOfMeasure} onChange={onChange}></input></div>
            </div>
            <div>
                <div style={{ textAlign: 'center' }}>Кратность </div>
                <div><input type="text" name="multiplicity" value={product.multiplicity} onChange={onChange}></input></div>
            </div>
            <div>
                <button className="btn" onClick={() => patchProduct(productId)}>Обновить</button>
            </div> */}
            <pre>{JSON.stringify(preset, null, 2)}</pre>
        </div>
    )
}