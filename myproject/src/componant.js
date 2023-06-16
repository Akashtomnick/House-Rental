import React, { Component } from 'react';
class Login  extends React.Component{
    render () {
   return(<div><center>
    <label>USER:</label><input type='text' placeholder='username'/><br/>
    <lable>PASSWORD:</lable><input type='password' placeholder='password'/><br/>
    <button>SUBMIT</button>
    <button>CANCLE</button>
    <br/>
    <h1>game</h1>
    <button >CREATE ACCOUNT</button>
    </center>
    </div>
   ); 
}
}
export default Login;