<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS,PUT');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
require 'connect.php';


$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    echo "grrrr";
    $request = json_decode($postdata);
     
    $password = $request->password;
    $username = $request->username;
    
    
    
  
    
       
    $sql = "UPDATE users SET password ='$password'
    where username='$username'";
    
    
        // $sql = "UPDATE users SET $option ='$email'
        // where username='$username'"; 
    
 

    if(mysqli_query($conn,$sql)){
        http_response_code(201);
    }
    else{
         http_response_code(422); 
    }
         
}
?>