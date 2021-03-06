import React, { useEffect, useState, useCallback, useContext } from 'react'
import { List, ListItem, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { Loader } from '../components/Loader';
import { Link } from 'react-router-dom';
import { BasketContext } from '../context/BasketContext';
import { useBasket } from '../hooks/basket.hook';


const useStyles = makeStyles({
    box: {
      marginTop: 9,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'start'
    },

    listItem: {
        marginLeft: 7,
        marginRight: 7,
        marginTop: 7,
        height: 72,
        backgroundColor: '#545454',
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 25
    }
  });


export const PresetsPage = () => {
    const styles = useStyles()
    const { loading, request } = useHttp()
    const message = useMessage()
    const [presets, setPresets] = useState([])
    const { token } = useContext(AuthContext)
    const { basketId } = useContext(BasketContext)
    const { addPresetGoods } = useBasket()

    const loadPresets = useCallback(async () => {
        try {
            const authorizationStr = `Bearer ${token}`
            const data = await request('api/presets', 'GET', null, {
                Authorization: authorizationStr
            })
            message("Список пресетов загружен!")
            setPresets(data)
        } catch (e) {
            // Уже обработали в http.hook
        }
    }, [request, message]) //x

    useEffect(() => {
        loadPresets()
    }, [])

    const listItems = presets.map(preset => 
        <ListItem key={preset._id} className={styles.listItem}>
            <Link to={`/preset/${preset._id}`} className={styles.title}>
                {preset.title}
            </Link>
            {basketId && <Button variant="outlined" color="secondary" onClick={() => addPresetGoods(preset.purchases)}>Добавить в корзину</Button>}
        </ListItem>
    )


    if (loading) {
        return <Loader />
    }
    return (
        <div>
            <h1>Presets Page</h1>
            <List>
                {listItems}
            </List>
            <pre>{JSON.stringify(presets, null, 2)}</pre>
        </div>
    )
}