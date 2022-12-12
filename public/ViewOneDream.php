<?php
require 'connect.php';
//header("Access-Control-Allow-Origin: http://localhost:3000");
//header("Access-Control-Allow-Origin")
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");
//header("Access-Control-Allow-Headers: Content-Type, Authorization");
 header("Access-Control-Allow-Origin: *");


 $method = $_SERVER['REQUEST_METHOD'];

 
 $dreamdate = $_GET['dreamdate']; 
 $summary = $_GET['summary'];
 $type = $_GET['type'];
 $mood = $_GET['mood'];
 $duration = $_GET['duration'];
 $substance = $_GET['substance'];
 $username = $_GET['username'];
 $character = $_GET['character'];





if(!$conn){
    die("Connection failed: " . mysqli_connect_error());
}

 switch($method){
 case 'GET';
 //$id = $_GET['username'];
 $sql3 = "select * from dream where username ='$username'AND summary = '$summary'AND type = '$type'AND mood ='$mood' AND duration = '$duration'AND substance = '$substance'";
 break;
 
 
 }
 
 $result = mysqli_query($conn,$sql3);
 
 if(!$result)
 {
     http_response_code(404);
     die(mysqli_error($con));
 }
 
 if($method == 'GET')
 {
    
     for($i=0 ; $i < 1 ; $i++)
     {
         echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
     }
 }
 
     
?>
