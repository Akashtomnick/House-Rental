// import React, { Component } from 'react';
// import Createaccount from './Register';
// import Dashboard from './NameChanged';
// class Login  extends React.Component{
//     render () {
//    return(<div><center>
//     <label>USER:</label><input type='text' placeholder='username'/><br/>
//     <lable>PASSWORD:</lable><input type='password' placeholder='password'/><br/>
//     <button onClick={()=>alert("alla detail are submit")}>SUBMIT</button>
//     <button onClick={()=>alert("all detail are canceled")}>CANCLE</button>
//     <br/>

//     <button>CREATE ACCOUNT</button>
//     </center>
//     </div>
//    ); 
// }
// }
// export default Login;
import React, { useState } from "react";
 const Content=()=>
{const [item,setitems]=useState([
    {
        id:1,
        checked : true,
        item:'WAKING' },{
        id:2,
        checked:false,
        item:'BREAKEFAST'

    },
    {
        id:3,
        checked:false,
        item:'LUNCH'
    }
]);
return<main>
    <ul>

<button>delete</button>
     console.log({item.items});
    </ul>
</main>
}
export default Content;