
import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    useNavigate,
    Routes,
    Redirect,
  } from "react-router-dom";


export function LogoutPage({Logout,bye}) {


  bye();
  // used to navigate to home page.
    const navigate = useNavigate();





const onSubmit = e => {
    e.preventDefault();

    Logout();
    navigate('/');
  


}




    return(


        //  {this:Logout() }
           
         <button className='btn' onClick={onSubmit}>Logout</button>
    )
}

export default LogoutPage