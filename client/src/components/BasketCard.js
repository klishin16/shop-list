import React, { useContext } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Button, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom'

import { BasketContext } from '../context/BasketContext'

const useStyles = makeStyles({
    card: {
        minWidth: 700,
        marginTop: 9
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginTop: 12,
    },
    //TODO стили
});


export const BasketCard = ({ basket }) => {
    const styles = useStyles()

    // х
    const { setBasketId } = useContext(BasketContext)

    return (
        <ListItem key={basket._id}>
            <Card className={styles.card}>
                <CardContent>
                    <Link to={`/basket/${basket._id}`}>{basket.title} ID: {basket._id}</Link>
                    <CardActions className={styles.pos}>
                        <Button
                            variant="outlined"
                            onClick={() => setBasketId(basket._id)}
                        >Установить текущую корзину</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </ListItem>

    )
}