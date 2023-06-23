import React from "react";
export default function Createaccount(){
return(
<div>
    <label>NAME</label><input type="text" placeholder="enter you name"/><br/>
    <label>USERNAME</label><input type="email" placeholder="enter your user name "/><br/>
    <label>PASSWORD</label><input type="password" placeholder="password"/><br/>
    <label>CONFIRMPASSWORD</label><input type="text" placeholder="confirm password"/><br/>
    <button>SAVE</button>
</div>
);
}