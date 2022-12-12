<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
require 'connect.php';

 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
     
    $dreamid = $request->dreamid;
    //$dreamdate = $request->dreamdate;
   // $summary = $request->summary;
    // $type = $request->type;
    // $mood = $request->mood;
    // $duration = $request->duration;
    // $substance = $request->substance;
    $username = $request->username;

     $character = $request->characters;

    $sql2 = "SELECT * FROM characters WHERE charname='$character' and username='$username'"; //this query is just to check if theres a row of $character, and $username
    $sql = "INSERT INTO characters (charname,dreamid,username) VALUES ('$character','$dreamid','$username')"; // this inserts the data



    if(mysqli_query($conn,$sql)){
        http_response_code(201);
    }
    else{
         http_response_code(422); 
    }
         
}



//     if($result = mysqli_query($conn,$sql2))
//     {

//         $rowcount = mysqli_num_rows($result);
//         if($rowcount==0)
//         {

//         if(mysqli_query($conn,$sql))
//         {
//             http_response_code(201);
//         }
//         else{
//              http_response_code(422); 
//             }
//         }
//     }        
//     else{
       
//     }
// }
?> 