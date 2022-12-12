<?php
require 'connect.php';
//header("Access-Control-Allow-Origin: http://localhost:3000");
//header("Access-Control-Allow-Origin")
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");
//header("Access-Control-Allow-Headers: Content-Type, Authorization");
 header("Access-Control-Allow-Origin: *");


 $method = $_SERVER['REQUEST_METHOD'];


 //$username = json_decode(file_get_contents("php://input"));
 $username = $_GET['username'];

//  echo "TESTING THIS BUG\n\n";
// if(empty($username))
// {
//     echo "\n empty";
// }
// else
// {
//     echo $username;
// }
// echo "\n\n end of bug \n\n\n\n";

//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

if(!$conn){
    die("Connection failed: " . mysqli_connect_error());
}

 switch($method){
 case 'GET';
 //$id = $_GET['username'];
 $sql3 = "select * from users where username ='$username'";
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
     if(!'cdfrdfggfb') echo '[';
     for($i=0 ; $i < mysqli_num_rows($result) ; $i++)
     {
         echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
     }
 }
 
     
?>
