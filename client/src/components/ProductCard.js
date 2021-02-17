import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, CardContent, CardActions, Button } from '@material-ui/core';


const useStyles = makeStyles({
    card: {
        minWidth: 275,
        marginTop: 9
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginTop: 12,
    },
});


export const ProductCard = ({ product }) => {
    const styles = useStyles()

    return (
        <Card className={styles.card}>
            <Link to={`/product/${product._id}`}>
                <CardContent>
                    <div className={styles.title}>
                        {product.title}
                    </div>
                    <Typography>
                        Единицы измерения: {product.unitOfMeasure}
                    </Typography>
                    <Typography className={styles.title}>
                        Множитель: {product.multiplicity}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    )
}