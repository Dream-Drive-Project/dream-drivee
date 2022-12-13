<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
     
     
    $dreamdate = $request->dreamdate;
    $summary = $request->summary;
    $type = $request->type;
    $mood = $request->mood;
    $duration = $request->duration;
    $substance = $request->substance;
    $username = $request->username;
    $character = $request->characters;
    $sql = "INSERT INTO dream (dreamdate,summary,type,mood,duration,substance,username) VALUES ('$dreamdate','$summary','$type','$mood','$duration','$substance', '$username')";
    if(mysqli_query($conn,$sql)){
        http_response_code(201);
    }
    else{
         http_response_code(422); 
    }
         
}
?> 
