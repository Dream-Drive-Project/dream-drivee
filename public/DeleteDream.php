<?php
require 'connect.php';
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE');
header("Access-Control-Allow-Headers: *");
 header("Access-Control-Allow-Origin: *");


 $method = $_SERVER['REQUEST_METHOD'];
 $postdata = file_get_contents("php://input");
 $request = json_decode($postdata);

 $erase2 = $request->data;

echo $erase;
echo "testing";


if(!$conn){
    die("Connection failed: " . mysqli_connect_error());
}

 switch($method){

 case 'DELETE';
 $sqldelete1 ="delete from characters where dreamid ='$erase2'";
 $sqldelete2="DELETE FROM dream where dreamid = '$erase2'";
break;
 
 
 }
 
 

 if($method =='DELETE')
 {

    if(mysqli_query($conn,$sqldelete1)){
        if(mysqli_query($conn,$sqldelete2))
        http_response_code(201);
    }
    else{
        http_response_code(422); 
   }
 }
 
     
?>
