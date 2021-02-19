import React, { useEffect, useCallback, useState, useContext } from 'react'
import { Box, Grid, Card, FormControl, Button, TextField, Input, InputLabel, Select, Checkbox, MenuItem, ListItemText } from '@material-ui/core';

import { useHttp } from '../hooks/http.hook'
import { useParams } from 'react-router-dom'
import { useMessage } from '../hooks/message.hook'
import { usePreset } from '../hooks/preset.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'
import { makeStyles } from '@material-ui/core/styles';
import { PurchaseCard } from '../components/PurchaseCard'
import { GoodCard } from '../components/GoodCard';

const useStyles = makeStyles({
    formControl: {
        minWidth: 700,
    },

    titleField: {
        marginTop: 14,
    },

    sublimeButton: {
        marginTop: 10,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },

    card: {
        marginLeft: 7,
        marginRight: 7,
        minWidth: 320
    },

    title: {
        marginTop: 14,
        textAlign: 'center',
        fontSize: 45
    },
    box: {
        marginTop: 9,
        marginBottom: 14,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'start'
      },
})


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export const PresetDetail = () => {
    const styles = useStyles()

    const { error, request, clearError } = useHttp()
    const { token } = useContext(AuthContext)
    const message = useMessage()
    const presetId = useParams().id
    const { preset, loadPreset, patchPresetGoods, loading } = usePreset()

    const [goods, setGoods] = useState([])

    const [goodsList, setGoodsList] = useState([])

    const handleChange = (event) => {
        setGoodsList(event.target.value);
    };

    const loadGoods = useCallback(async () => {
        try {
            const authorizationStr = `Bearer ${token}`
            console.log("Auth Str:", authorizationStr);
            const data = await request('/api/goods', 'GET', null, {
                Authorization: authorizationStr
            })
            message("Список товаров загружен!")
            console.log("Data:", data);
            setGoods(data)
        } catch (e) {
            // Уже обработали в http.hook
        }
    }, [request, message])


    useEffect(() => {
        loadPreset(presetId)

        loadGoods()
    }, [loadPreset])

    useEffect(() => {
        console.log("erereer")
        setGoodsList(preset.purchases.map(p => p.good))
    }, [preset])

    if (loading) {
        return <Loader />
    }


    const listItems = preset.purchases.map((purchase) =>
        <Box className={styles.card} key={purchase._id}>
            {/* <Link to={`/good/${good._id}`}>{good.title}</Link> */}
            <GoodCard good={purchase.good}></GoodCard>
        </Box>
    );

    return (
        <Card className={styles.card}>
            <Grid container spacing={3} justify='center'>
                <Grid item xs={12}>
                    <div className={styles.title}>Preset Detail</div>
                </Grid>
                <Grid item xs={8}>
                    <TextField className={styles.titleField} label="Название пресета" value={preset.title}></TextField>
                    <FormControl className={styles.formControl}>
                        <InputLabel>Tag</InputLabel>
                        <Select multiple
                            value={goodsList}
                            onChange={handleChange}
                            input={<Input />}
                            renderValue={(selected) => selected.map(s => s.product.title).join(', ')}
                            MenuProps={MenuProps}>
                            {goods.map((good) => (
                                <MenuItem key={good._id} value={good}>
                                    <Checkbox checked={goodsList.map(g => g._id).includes(good._id)} />
                                    <ListItemText primary={`${good.product.title} Количество: ${good.amount} ${good.product.unitOfMeasure}`} />
                                </MenuItem>))}
                        </Select>
                        <Button className={styles.sublimeButton} onClick={() => patchPresetGoods(presetId, goodsList)}>Добавить товары в пресет</Button>
                    </FormControl>
                </Grid>

                <Grid item xs={8}>
                    {/* <pre>{JSON.stringify(preset, null, 2)}</pre>
                    <pre>{JSON.stringify(goodsList, null, 2)}</pre> */}
                    <Box className={styles.box}>
                        {listItems}
                    </Box>
                </Grid>
            </Grid>
        </Card>
    )
}