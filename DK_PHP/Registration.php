<?php

session_start();

require_once('Connection.php');
require_once('URLs.php');

$json_str = file_get_contents('php://input');
$User_Obj = json_decode($json_str);
$ID_User = -2;

//var_dump($User_Obj);

if ($User_Obj->SN == "post_user") {
    $call = $MySql_connection->prepare("CALL goldenga_solutions.Register_User(?, ?, ?, ?, @ostatus)");
    $call->bind_param("ssss", $User_Obj->user->Full_Name, $User_Obj->user->Email_Address, $User_Obj->user->Password, $User_Obj->user->Phone_Number);
    $call->execute();

    $select = $MySql_connection->query('SELECT @ostatus');
    $result = $select->fetch_assoc();
    $ID_User = $result['@ostatus'];

    $call->close();
    $MySql_connection->close();
} else {
    $call = $MySql_connection->prepare('CALL goldenga_solutions.Update_User_acc(?, ?, ?, ?, ?, @Status)');
    $call->bind_param('ssss', $User_Obj->user->ID_User, $User_Obj->user->Full_Name, $User_Obj->user->Email_Address, $User_Obj->user->Password, $User_Obj->user->Phone_Number);
    $call->execute();

    $select = $mysqli->query('SELECT @Status');
    $result = $select->fetch_assoc();
    $ID_User = $result['@Status'];
    
    $call->close();
    $MySql_connection->close();
}

//echo "String for robo";
echo json_encode(array("ID_User" => $ID_User));

//$ID_User = 1025;

if ($ID_User > 0) {
    $_SESSION['Loged'] = $ID_User;
    //header("Location:" . url_set_up);
} else {
    $_SESSION['Loged'] = -100;
}
   