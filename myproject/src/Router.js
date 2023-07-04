import React from "react";
import {Router,Route} from"react-dom-router"
import {Ok} from"./Login.js"
 function Loginb()

{
    return(
        <div>
            <Router>
                <Route path="/01" element={<Ok />}></Route>
            </Router>
        </div>
    )
}
export default Loginb;