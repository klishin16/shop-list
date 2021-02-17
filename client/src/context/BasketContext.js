import React from 'react'


function noop() {}

export const BasketContext = React.createContext({
    basketId: null,
    setBasketId: noop
})
