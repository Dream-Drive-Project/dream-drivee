import './styles.css'
import React, {useState} from 'react'
import $, { data } from "jquery";
import axios from 'axios';
import Home from './Home';
//import { Switch} from "react-router";
//import { BrowserRouter, Route, Link  } from 'react-router-dom';
import "./AccountCreation";
import { NavLink } from 'react-router-dom';

import {
    BrowserRouter as Router,
    Link,
    Route,
    useNavigate,
    Routes,
    Redirect,
  } from "react-router-dom";
import AccountCreation from './AccountCreation';


 export function LoginForm({Login,error, userinput})
{

    const navigate = useNavigate();

    const dummy = "test";
        var logindeets = new FormData();
    //object to hold infromation from the user 
    const [Userdetails,setDetails] = useState({username: "", password: '', firstname:'', lastname:'',email:'',DOB:''});
    const [Userdetails2,setDetails2] = useState({username: "bob", password: 'bob', firstname:'bob', lastname:'bob',email:'bob',DOB:'bob'});


//function that is called on link click




//function that is called ON BUTTON CLICK!
const submitHandler = e => {
    e.preventDefault();




    userinput(Userdetails);   // calls the userinput function from app.js and passes the object userdetails

    logindeets.append('test','supertest');
  // calls axios.get to get infromation from get.php.
//   axios.get("https://localhost/reactProject/get.php",{headers:{'Access-Control-Allow-Origin': '*'}},
//   {
//     params:
//     {
//         tired:"foo"
//     }
//   })
//   .then(data => {
//        console.log(data.data);

//        Login(data.data); // calls login function from app.js and passes the object data
//        console.log("Testing to see if Userdetails has something in loginform");
//        console.log(Userdetails);
       
//   });

  axios({
    method:"get",
    url:"https://localhost/reactProject/get.php",
    params:{
        username:Userdetails.username,
        
    }

  }).then(data => {
    console.log(data.data);

    Login(data.data); // calls login function from app.js and passes the object data
    console.log("Testing to see if Userdetails has something in loginform");
    console.log(Userdetails);
    
});
  
  
  
    //Login(data.data);
   // userinput(Userdetails);

}







    return(
    
        <form 

        
       
        onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/*Error!  */}
                <div className="form-group">
                    <label className='login-label' htmlFor="username">Username: </label>
                    <input className='login-input' type="text" name="username" id="username" required onChange={e => setDetails({...Userdetails,username:e.target.value})} value={Userdetails.username}/>
                </div>
        
                <div className="form-group">
                    <label className='login-label' htmlFor="password">Password: </label>
                    <input className='login-input' type="password" name="password" id="password" required onChange={e => setDetails({...Userdetails,password:e.target.value})} value={Userdetails.password}/>

                </div>
                <input  className="btn" type="submit" value="LOGIN"/>
                <div className='linkpadding'>

                    
                <Link className='link' to="/AccountCreation" >Sign Up for an Account</Link>
                </div>
            </div>

         </form>
        
    
    )
}

export default LoginForm