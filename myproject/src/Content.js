import React, { useState } from "react";
 const Content1=()=>
{const [item,setitem]=useState([
    {
        id:1,
        checked : true,
        item:"WAKING" },{
        id:2,
        checked:false,
        item:"BREAKEFAST"

    },
    {
        id:3,
        checked:false,
        item:"LUNCH"
    }
]);
return<main>
    <ul>
     {item.map((item)=>(
        <li>
            <input type="checkbox"
            checked={item.checked}/>
            <label>{item.item}
            </label>
<button>delete</button></li>
     ))}
     console.log({item.items});
    </ul>
</main>
}
export default Content;