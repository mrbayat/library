import React from 'react'
import { Switch, Route } from 'react-router-dom'
import router from '../constants/router'

export default function Routes() {
    return (
        <Switch>
            {router.map((obj, index) => (
                <Route key={index} exact path={obj.router}>
                    {obj.page}
                </Route>
            ))}
        </Switch>
    )
}
