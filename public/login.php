<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$logindata = file_get_contents("php://input");


if(isset($logindata) && !empty($logindata))
{

    $loginrequest = json_decode($logindata);

    $loginusername = $loginrequest->username;
    $loginpassword = $loginrequest->password;

    $loginsql = "SELECT username, password FROM users WHERE username = '$loginusername'";

    $exeloginsql = mysqli_query($conn,$loginsql);
    $checkrow = mysqli_num_rows($exeloginsql);


    if($checkrow !=0)
    {
        $loginarray = mysqli_fetch_array($exeloginsql);
        if($loginarray['password'] != $loginpassword){
            $Message ="wrong password";

        }
        else{
            $Message = "sucess";
        }
    }
    else{
        $Message = "user name doesnt match account";

    }


    $response[] = array("Message" => $Message);
    echo json_encode($response);




}

















?>
