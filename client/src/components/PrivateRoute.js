import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = (props) => {

    const { children, ...rest } = props;

    console.log(children)

    return (
        <Route
            {...rest}
            render={({ location }) => {
                return localStorage.getItem("token")
                ? (children)
                : (
                    <Redirect to={{ pathname: "/login",
                state: { from: location } }} />
                )
            }}
        />
    )
}
