import React from 'react'
import { Select, MenuItem, FormControl, Button, TextField, Container, Card, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { usePreset } from '../hooks/preset.hook'


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
        marginTop: 14,
    },
    title: {
        marginTop: 14,
        textAlign: 'center',
        fontSize: 45
    }
})


export const CreatePreset = () => {
    const styles = useStyles()

    const { preset, bindTitle, createHandler } = usePreset()

    return (
        <div>
            <Card className={styles.card}>
                <Grid container spacing={3} justify='center'>
                    <Grid item xs={12}>
                        <div className={styles.title}>Страница создания пресета</div>
                    </Grid>
                    <Grid item xs={8}>
                        <FormControl className={styles.formControl}>
                            {/* <Select {...bindSelect}>
                                {productItems}
                            </Select> */}
                            <TextField className={styles.titleField} {...bindTitle} label="Название пресета" type="text" />
                            <Button className={styles.sublimeButton} onClick={createHandler}>Создать</Button>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8}>
                        <pre>{JSON.stringify(preset, null, 2)}</pre>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}