import React, { useState } from "react";
const Dashboard =()=>{
    const [name,setname]=useState("name")
    function Namechanged(){
        const Name=["akash","pradeep","suriya","muthu"];
        const int=Math.floor(Math.random()*4);
        setname(Name[int]);
    }
    return(<div>
        <h1>hai {name}.what are name</h1>
        <button onClick={Namechanged}>changename</button>
    </div>)
}
export default Dashboard;