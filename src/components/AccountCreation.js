import LoginForm from './LoginForm';
import React, {useEffect, useState} from 'react';
import { useRef } from 'react';
import $ from "jquery";
import axios from 'axios';
import Home from './Home';
import App from '../App.js';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    Redirect,
    Navigate,
    useNavigate,
    BrowserRouter,
    useNavigation,
  } from "react-router-dom";

export function AccountCreation ({error,Logout}){



//variable that will clear form 
//const form = document.getElementById('myform');





    // object that will be inserted to database
    const [Accountdetails,setDetails] = useState({username:"",password:"", name:"",email:"",dob:"",lastname:""});

    

// sets up the jump
const navigate = useNavigate();

    // to update these arrays during api calls
    // useEffect(() =>
    // {
    //     console.log("useffect from AC");
    // },[Accountdetails]);




//function to be called on button click!!
 const SubmitHandler = async e => {
    e.preventDefault();

//helps to redirect


   await  axios({
        method:"get",
        url:"https://dreamdrivee.herokuapp.com/get.php",
        params:{
            username:Accountdetails.username,
            
        }
    
      }).then(data => {
        console.log(data.data);
       


        
        if(data.data.username!=Accountdetails.username){
      
          //calls post method to use insert.php , and uses the object accountdetails to push in
          axios.post("https://dreamdrivee.herokuapp.com/insert.php",Accountdetails)
          .then(res=> console.log(res.data))
          .catch(error => {
            console.log(error.response)
        });
      

          // helps us jump back to login form
          navigate('/');




      }
      else{
          alert("Account Already exist");
      }


    
       
        
    });
      


  
  setDetails({...Accountdetails,lastname:'',username:'',password:'',email:'',dob:'', name:''});
 // calls logout from app.js AS A FAILSAFE to set stuff blank at app.js
   Logout();
}





        return (
            <form id="myform"
            onSubmit={SubmitHandler}>
            <div className ='AC'>
                <h2>Sign Up</h2>
                <div className ='form-group'>
            <input type='text'  placeholder ='Username'  required maxLength={20} onChange={e => setDetails({...Accountdetails,username:e.target.value})} value={Accountdetails.username}  />
            </div>
            <div className ='form-group'>
            <input type='password' placeholder ='Password' required minLength={8} maxLength={16} onChange={e => setDetails({...Accountdetails,password:e.target.value})} value={Accountdetails.password}/>
            </div>
            <div className ='form-group'>
            <input type='text' placeholder ='Email'required maxLength={255} onChange={e => setDetails({...Accountdetails,email:e.target.value})} value={Accountdetails.email}/>
            </div>
            <div className ='form-group'>
            <input placeholder="Date of Birth" type="text" required onFocus={(e) => e.target.type = 'date'}  onChange={e => setDetails({...Accountdetails,dob:e.target.value})} value={Accountdetails.dob}/>
            </div>
            <div className ='form-group'>
            <input type='text' placeholder ='First Name' required maxLength={20} onChange={e => setDetails({...Accountdetails,name:e.target.value})} value={Accountdetails.name}/>
            </div>
            <div className ='form-group'>
            <input type='text' placeholder ='Last Name' required maxLength={20} onChange={e => setDetails({...Accountdetails,lastname:e.target.value})} value={Accountdetails.lastname}/>
            </div>
            <input class = "btn" type="submit" value ="Create Account" />
            <div className='linkpadding'>
            <Link className='link' to="/">Have an account? Login</Link>
            </div>
            </div>    
            </form>
        )
    
}
export default AccountCreation
