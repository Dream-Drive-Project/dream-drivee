import axios from "axios";
import React, {useState,useEffect} from 'react';
import Alert from "./Alert";

export function UserProfile({APILOGIN,Login,userinput,bye}) {
    bye();

const mask = APILOGIN.password.replace(/./g, '*');
var [updatepassword,setpassword] =useState({username:APILOGIN.username,email:'',option:'', password:''});

var[tabledata,settable] = useState(APILOGIN.email);
var[tablepassword,settablepassword]= useState(APILOGIN.password.replace(/./g, '*'));


useEffect(()=>{

    console.log(tabledata)
    

},[tabledata])



 const  handlepassword = (id) => {


    console.log(updatepassword.password.length);


    if(updatepassword.password.length < 8 || updatepassword.password.length > 16)
    {
        alert("password needs to be greater than 8 characters or less then 16 characters");
        setpassword({...updatepassword,password:''});

    }


      if (updatepassword.password.length >= 8 && updatepassword.password.length <= 16){
    console.log("CHECK HERE!!!");
        axios.put('/UpdateAccountpassword.php',updatepassword)
        .then(Response =>{
           console.log(Response);
     setpassword({...updatepassword,password:''});
    //setpassword({...updatepassword,email:''});


    axios({
        method:"get",
        url:"/getuser.php",
        params:{
            username:APILOGIN.username,
            
        }
    
      }).then(data => {
        userinput(data.data)
        Login(data.data);
        settablepassword(data.data.password.replace(/./g, '*'));
         alert(id + " Change");
        
    }); // end of get


                        })
        .catch(error=>{
            console.log(error);
                    })



 }
 //setpassword({...updatepassword,password:''});
}// end of function










const  handleemail = (id) => {    
//     console.log("CHECK HERE!!!");
axios.put('/UpdateAccountemail.php',updatepassword)
.then(Response =>{
    console.log(Response);
    
     setpassword({...updatepassword,password:''});
     setpassword({...updatepassword,email:''});


     axios({
        method:"get",
        url:"/getuser.php",
        params:{
            username:APILOGIN.username,
            
        }
    
      }).then(data => {
        Login(data.data);
        settable(data.data.email);
        
    }); // end of get






})
.catch(error=>{
    console.log(error);
})


 alert(id + " Change");
}// end of function

return (
   
    <div>
        <h1>User Profile</h1>
        <table className="user-profile-table">
            <tbody>
                <tr>
                    <th>Username</th>
                    <td>{APILOGIN.username}</td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td>{tablepassword}</td>
                </tr>

                <tr>
                    <th>Name</th>
                    <td>{APILOGIN.firstname} {APILOGIN.lastname}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{tabledata}</td>
                </tr>
                <tr>
                    <th>DOB</th>
                    <td>{APILOGIN.DOB}</td>
                </tr>
            </tbody>
        </table>
<h2>Update Account</h2>

        <table className="user-profile-table">
        <tbody>
        <tr>
        <th>Update Password</th>
        <td><input className="login-input" type='password' minlength={8} maxlength={16} onChange={e =>setpassword({...updatepassword,password:e.target.value})} value={updatepassword.password}></input></td>
        <td><button className='add-btn'id="password"  onClick={() =>handlepassword("password")}>Submit</button></td>
        </tr>
        <tr>
        <th>Update Email</th>
        <td><input className="login-input" type='text' maxLength={255} onChange={e =>setpassword({...updatepassword,email:e.target.value})} value={updatepassword.email}></input></td>
        <td><button className='add-btn' id="email" onClick={()=>handleemail("email")}>Submit</button></td>
        </tr>
        </tbody>
        </table>

    </div>

    )
}


export default UserProfile
