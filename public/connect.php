
<?php
 

 
$dbUsername ="root";
$dbPassword="password";
$dbname ="dreamdrive";
$conn = new mysqli('localhost',$dbUsername,'',$dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
 // echo "Connected successfully";

?>