import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { CreateGoodPage } from './pages/CreateGoodPage'
import { AuthPage } from './pages/AuthPage'
import { ProductsPage } from './pages/ProductsPage'
import { ProductDetail } from './pages/ProductDetail'
import { BasketsPage } from './pages/BasketsPage'
import { BasketDetail } from './pages/BasketDetail'
import { GoodsPage } from './pages/GoodsPage'
import { CreateProductPage } from './pages/CreateProductPage'
import { PresetsPage } from './pages/PresetsPage'
import { CreatePreset } from './pages/CreatePreset'


export const appRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/create' exact>
                    <CreateGoodPage />
                </Route>
                <Route path='/products' exact>
                    <ProductsPage></ProductsPage>
                </Route>
                <Route path='/create-product' exact>
                    <CreateProductPage />
                </Route>
                <Route path='/product/:id'>
                    <ProductDetail></ProductDetail>
                </Route>
                <Route path='/baskets' exact>
                    <BasketsPage></BasketsPage>
                </Route>
                <Route path='/basket/:id'>
                    <BasketDetail></BasketDetail>
                </Route>
                <Route path='/goods' exact>
                    <GoodsPage></GoodsPage>
                </Route>
                <Route path='/presets' exact>
                    <PresetsPage></PresetsPage>
                </Route>
                <Route path="/create-preset" exact>
                    <CreatePreset></CreatePreset>
                </Route>
                <Redirect to="/baskets" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact >
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
