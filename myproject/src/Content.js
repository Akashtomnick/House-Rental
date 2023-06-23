import React, { useState } from "react";
 const Content=()=>
{const [item,setitem]=useState(
    {
        id:1,
        checked : true,
        items:"WAKING"
       
    },{
        id:2,
        checked:false,
        items:"BREAKEFAST"

    },
    {
        id:3,
        checked:false,
        items:"LUNCH"
    }
)
return<main>
    <ul>
     {item.map(
        <li>
            <input type="checkbox"
            checked={item.checked}/>
            <label>{item.items}
            </label>
<button>delete
    </button>        </li>
     )}
    </ul>
</main>
}
export default Content;