import axios from 'axios'
import { data } from 'jquery';
import React, {useEffect, useState} from 'react'




export function Fetch() {



    const [persons, setpersons] = React.useState('');

    useEffect(()=>
    {
    
      console.log("person!!");
    console.log(persons.username);
    },[persons]);


    

    const getData = (e) =>{

      e.preventDefault();
    axios.get("https://localhost/reactProject/get.php",{headers:{'Access-Control-Allow-Origin': '*'}})
    .then(data => {
       
         console.log(data.data);
  
          setpersons(data.data);
         
    })
    
    
    };
    
  


  return (
    <div>

 
       <h1> {persons.username} </h1> 
       
      <button className ="test" onClick={(e) => getData(e)}></button>  
      
    </div>
  )
}

export default Fetch