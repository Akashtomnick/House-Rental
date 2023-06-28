import React, { useState } from "react";
 const Content=()=>
{const [item,setitems]=useState([
    {
        id:1,
        checked : true,
        item:"WAKING"
    },
    {
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
 // map function
 // const product=item.map(Newfn);
 // function Newfn(item){
 //     return {id:item.id,item:item.item ,checked:item.checked
 //     }
 // }
 // console.log({product});
 // return<main>
 return(   <ul>
        {item.map((item)=>(
            <li>
                <input type="checkbox" checked={item.checked}/>
                <label>{item.item}</label>
                <button>delete</button>
            </li>
        ))};
 </ul>
)}
export default Content;