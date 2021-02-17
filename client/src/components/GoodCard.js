import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';


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
    fontSize: 14,
  },
  pos: {
    marginTop: 12,
  },
});


export const GoodCard = ({ good, isGoodInBasket, addToBasket, children }) => {
  const styles = useStyles()

  function ActionButtons() {
    if (isGoodInBasket) {
      return <Button>Товар в корзине</Button>
    } else {
      return <Button variant="outlined" color="primary"
          onClick={() => addToBasket(good._id)}
          >В корзину</Button>
      }
  }


  return (
    <Card className={styles.card}>
      <CardContent>
        <span className={styles.title}>{good.product.title} {good._id}</span>
        <div>Количество: {good.amount} {good.product.unitOfMeasure}</div>
        {/* <pre>{JSON.stringify(good, null, 2)}</pre> */}
        <CardActions className={styles.pos}>
          <Button variant="outlined">Изменить</Button>
          <ActionButtons></ActionButtons>
        </CardActions>
        {children}
      </CardContent>
    </Card>
  )
}