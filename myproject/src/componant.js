import React, { useState } from "react";
import "./Content.css";
import {FaTrashAlt} from 'react-icons/fa';
import {Routes,Route} from 'react-router-dom'
import mainlogin from "./login";
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
 const Checkboxchange=(id)=>{
    console.log({id:item.checked});
 }
 return(  <main className="body"> 
    <h1 >DO TO APP</h1>
        {item.map((item)=>(
            <li key={item.id}>
                <mainlogin/>
                <Routes>
                    <Route path="/mainlogin" element={mainlogin}></Route>

                </Routes>
                <input 
                className="checkbox" 
                type="checkbox" 
                checked={item.checked} onChange={Checkboxchange(item.id)}
                />
                <label>{item.item}</label>
                <FaTrashAlt
                role="button"
            tabIndex="0"
                />
            </li>
        ))};
 </main>
)};
export default Content;