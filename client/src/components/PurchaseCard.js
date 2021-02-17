import React, { useContext } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Button, ListItem, Box } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { GoodCard } from './GoodCard';

import { usePurchase } from '../hooks/purchase.hook'

const useStyles = makeStyles({
    card: {
        minWidth: 300,
        marginTop: 9
    },
    box: {
        display: 'flex',

    },
    multiplier: {
        marginLeft: 14,
        fontSize: 34,
    }
    //TODO стили
});


export const PurchaseCard = ({ inPurchase }) => {
    const styles = useStyles()

    const { purchase, bgColor, buyHandler } = usePurchase(inPurchase)

    return (
        <Card className={styles.card}>
            <CardContent style={{backgroundColor: bgColor}}>
                <Box className={styles.box}>
                    <GoodCard good={purchase.good}></GoodCard>
                    <div className={styles.multiplier}> X {purchase.things}</div>
                    {/* <pre>{JSON.stringify(purchase, null, 2)}</pre> */}
                    <Button variant="outlined" onClick={buyHandler}>{purchase.buy ? 'Куплено!' : 'Купить!'}</Button>
                </Box>
                
            </CardContent>
        </Card>

    )
}