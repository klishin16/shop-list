import React, { useCallback, useEffect } from 'react'
import { useCreateProduct } from '../hooks/createProduct.hook'

import { Select, MenuItem, FormControl, Button, TextField, Grid, Card } from '@material-ui/core';
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
    },
    card: {
        marginTop: 14,
    },
})

export const CreateProductPage = () => {
    const styles = useStyles()

    const { product, onChange, createHandler, loading } = useCreateProduct()

    if (loading) {
        return <Loader />
    }


    return (
        <div>
            <Card className={styles.card}>
                <Grid container spacing={3} justify='center'>
                    <Grid item xs={12}>
                        <div className={styles.title}>Страница создания продукта</div>
                    </Grid>

                    <Grid item xs={8} >
                        <FormControl className={styles.formControl}>
                            {/* TODO попробовать примерить SPRED оператор */}
                            <TextField className={styles.amountField} value={product.title} onChange={onChange} name="title" label="Название продукта" type="text" />
                            <TextField className={styles.amountField} value={product.unitOfMeasure} onChange={onChange} name="unitOfMeasure" label="Единицы измерения" type="text" />
                            <TextField className={styles.amountField} value={product.multiplicity} onChange={onChange} name="multiplicity" label="Множитель" type="number" />
                            <Button className={styles.sublimeButton} onClick={createHandler}>Создать</Button>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8}>
                        <pre>{JSON.stringify(product, null, 2)}</pre>
                    </Grid>
                </Grid>
            </Card>

        </div>
    )
}