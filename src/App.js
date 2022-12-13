import './components/styles.css'
import test from './components/test';
import Fetch from './components/Fetch.js';
import React, {useEffect, useState} from 'react';
import  AccountCreation from './components/AccountCreation.js';
import LoginForm from './components/LoginForm.js';
import LogoutPage from './components/LogoutPage';
import axios from 'axios';
import './components/Alert.js';
import DreamForm from './components/DreamForm.js';
import Home from './components/Home.js';
import ViewLogs from './components/ViewLogs.js';
import UserProfile from './components/UserProfile';
import ViewStats from './components/ViewStats.js';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Link,
  Route,
  useNavigate,
  Routes,
  Redirect,
} from "react-router-dom";
 

function App() {

const navigate = useNavigate();


//hello message
const [hello,sethello]=useState({hi:"Welcome to DreamDrive"});

//object to get information from get API
const [APILOGIN, setAPILOGIN] = useState({username: " ", password: '', firstname:'', lastname:'',email:'',DOB:''});

//Object to get information from the user that was obtained in loginform.js
const [USERLOGIN,setUSERLOGIN] = useState({username: "", password: '', firstname:'', lastname:'',email:'',DOB:''});

//left blank on purpoose to set USERLOGIN to blank when logout is called
const [blank, setUser]=  useState({username: "", password: '', firstname:'', lastname:'',email:'',DOB:''});

//to be used elsewhere
const [error,setError] = useState(" ");


//used to obtain information from dreamform
// 
const [loaddream,setloaddream] = useState({dreamdate:"",summary:"", type:"",mood:"",duration:"",substance:"",username:USERLOGIN.username, characters:""});




//flag that helps set app.js to keep the user in login, until they finally logined in properly.
const [flag, setFlag] = useState(0);


//helps to preload dreams after deletion occurs
const [viewlogdflag,setlogflag] = useState(0);


useEffect(()=> // allows me to "sync" apilogin, and userlogin
{

  console.log("use effect of api and userlogin in APP.JS");
console.log(APILOGIN.username);
console.log(USERLOGIN.username);

if((APILOGIN.username != USERLOGIN.username || APILOGIN.password != USERLOGIN.password) && flag !=0) 
{
  alert("wrong Username/Password");
  setError("ERROR!!");

  console.log("sssss")
}





else{

  axios({
    method:"get",
    url:"https://localhost/reactProject/ViewcharacterDream.php",
    params:{
        username:USERLOGIN.username,
        
    }

  }).then(data => {
    

    
      if(typeof(data.data) == 'object')
      {
        console.log("has one element")
        setloaddream([data.data])
        console.log(loaddream)
       
     
        
        
      }
      
      else if(typeof(data.data) == 'string')
      {
      console.log("0 or more then 2 elements")
      setloaddream(JSON.parse('['+data.data +']'))
    
      }
    
});

}

},[APILOGIN],[USERLOGIN][viewlogdflag]);


//note that details is local in each function call of login, and userinput



const Login = details => { // pushes the infomration of detials into apilogin.
  console.log(details);
  console.log('test for API query from APP.JS');
  setAPILOGIN(details);
  console.log(APILOGIN.username + "   aaaa");
  setFlag(1);
 // setUser(details.data)
}




const userinput = details => { // pushes the information of details to userlogin
  console.log(details);
  console.log('test for userinput from APP.JS');
  setUSERLOGIN(details);
 // setUser(details.data)
}

const VIEWLOG = details =>{
  
  setloaddream(details);
}




const Logout = () =>{ // when called it sets flag to 0, and sets userlogin to blank, sets error to blank
  console.log("Logout");
  setFlag(0);
  setUSERLOGIN(blank);
  setError("");
 
}


// function that helps with loading after delteing in dream table.
const dreamlogflag = () => {

  setlogflag(1);
}

//function that hides hi message
const bye = () =>{

  sethello("");
}







  return (
    <div className="App" >
      
    

      {/* //if password and username is different go to login/AccountCreation else 
      // go to welcome page. */}
      {(USERLOGIN.username == APILOGIN.username && USERLOGIN.password == APILOGIN.password) ?
    (

      
      
    <div className="welcome">
      
{console.log(APILOGIN)}
    <>
      <Navbar />
        <div className='container'>
        <Routes>
          <Route path="/Home" element={<Home bye={bye} />} />
          <Route path="/dreamform" element={<DreamForm  APILOGIN={APILOGIN}  VIEWLOG ={VIEWLOG} bye={bye} />} />
          <Route path="/viewlogs" element={<ViewLogs  USERLOGIN={USERLOGIN} VIEWLOG={VIEWLOG}  loaddream={loaddream} bye={bye}  />} />
          <Route path="/viewstats" element={<ViewStats bye={bye} loaddream={loaddream} />} />
          <Route path="/UserProfile" element={<UserProfile APILOGIN={APILOGIN} Login={Login} userinput={userinput} bye={bye} />} />
          <Route path="/LogoutPage" element={<LogoutPage  Logout={Logout} bye={bye} />} />
        </Routes>
        <h1>{hello.hi} </h1>
        </div>
    </>

   {/* <button className='btn' onClick={Logout}>Logout</button>   */}

    </div>




    )  
    :(

   // <AccountCreation Login={Login} error ={error} />
    //  <  Fetch />
   <div>
      
   
         <Routes>          
                                                          {/* when calling these js files our functions are being passed in as props so we can extract data  */}
            <Route exact path={'/'} element={<LoginForm Login={Login} error={error} test = {test} userinput ={userinput}/>}></Route>
            <Route  path={'/AccountCreation'} element={<AccountCreation  error ={error} Logout ={Logout} />}></Route>
         </Routes>
        
    
 </div>

     ) 
    }
    </div>
 
  );

}
export default App;
