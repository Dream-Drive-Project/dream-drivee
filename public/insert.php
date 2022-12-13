<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
     
     
    $name = $request->username;
    $password = $request->password;
    $nombre = $request->name;
    $email = $request->email;
    $lname = $request->lastname;
    $dob = $request->dob;
    $sql = "INSERT INTO users (username,password,firstname,lastname,email,DOB) VALUES ('$name','$password','$nombre','$lname','$email','$dob')";
    if(mysqli_query($conn,$sql)){
        http_response_code(201);
    }
    else{
         http_response_code(422); 
    }
         
}
?> 
