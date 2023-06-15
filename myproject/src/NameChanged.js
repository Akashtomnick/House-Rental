import React from "react";
function Dashboard (){
    function Namechanged(){
        const Name=["akash","pradeep","suriya","muthu"];
        const int=math.floor(math.random()*4);
        return(Name[int]);
    }
    return(<div>
        <h1>hai {Namechanged}.what are name</h1>
    </div>)
}
export default Dashboard;