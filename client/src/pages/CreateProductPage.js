import React, { useCallback, useEffect } from 'react'
import { useCreateProduct } from '../hooks/createProduct.hook'

import { Select, MenuItem, FormControl, Button, TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Loader } from '../components/Loader'

const useStyles = makeStyles({
    formControl: {
        minWidth: 700,
    },

    amountField: {
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
    title: {
        textAlign: 'center',
        fontSize: 45
    }
})

export const CreateProductPage = () => {
    const style = useStyles()

    const { product, onChange, createHandler, loading } = useCreateProduct()

    if (loading) {
        return <Loader />
    }


    return (
        <div>
            <Grid container spacing={3} justify='center'>
                <Grid item xs={12}>
                    <div className={style.title}>Страница создания продукта</div>
                </Grid>
                
                <Grid item xs={8} >
                    <FormControl className={style.formControl}>
                        {/* TODO попробовать примерить SPRED оператор */}
                        <TextField className={style.amountField} value={product.title} onChange={onChange} name="title" label="Название продукта" type="text" />
                        <TextField className={style.amountField} value={product.unitOfMeasure} onChange={onChange} name="unitOfMeasure" label="Единицы измерения" type="text" />
                        <TextField className={style.amountField} value={product.multiplicity} onChange={onChange} name="multiplicity" label="Множитель" type="number" />
                        <Button className={style.sublimeButton} onClick={createHandler}>Создать</Button>
                    </FormControl>
                </Grid>

                <Grid item xs={8}>
                    <pre>{JSON.stringify(product, null, 2)}</pre>
                </Grid>
            </Grid>

        </div>
    )
}