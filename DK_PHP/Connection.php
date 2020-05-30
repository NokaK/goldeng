<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$servername = "localhost";
$username = "goldenga_makho";
$password = "123qpVo321";
$database = "goldenga_solutions";

// Create connection

//$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$MySql_connection = new mysqli($servername, $username, $password, $database);

if ($MySql_connection->connect_error) {
    die("Connection failed: " . $MySql_connection->connect_error);
}
//echo "Connected successfully con1";
