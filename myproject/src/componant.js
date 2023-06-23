import React, { Component } from 'react';
import Createaccount from './Register';
import Dashboard from './NameChanged';
class Login  extends React.Component{
    render () {
   return(<div><center>
    <label>USER:</label><input type='text' placeholder='username'/><br/>
    <lable>PASSWORD:</lable><input type='password' placeholder='password'/><br/>
    <button onClick={()=>alert("alla detail are submit")}>SUBMIT</button>
    <button onClick={()=>alert("all detail are canceled")}>CANCLE</button>
    <br/>

    <button>CREATE ACCOUNT</button>
    </center>
    </div>
   ); 
}
}
export default Login;