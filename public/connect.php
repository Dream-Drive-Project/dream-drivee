
<?php
 

 
$dbUsername ="R3zOnZCcuB";
$dbPassword="JMYUdEV9mY";
$dbname ="R3zOnZCcuB";
$conn = new mysqli('remotemysql.com:3306',$dbUsername,$dbPassword,$dbname,3306);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
 // echo "Connected successfully";

?>
