import React from "react";
import {Router,Route} from"react-dom-router"
import {Login} from"./Login.js"
export function Loginb()

{
    return(
        <div>
            <Router>
                <Route path="/01" element={<Login />}></Route>
            </Router>
        </div>
    )
}