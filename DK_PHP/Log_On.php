<?php

session_start();

require_once('Connection.php');
require_once('URLs.php');

$json_str = file_get_contents('php://input');
//var_dump($json_str);
$User_Obj = json_decode($json_str);
//var_dump($User_Obj);

$call = $MySql_connection->prepare("CALL goldenga_solutions.Log_On(?, ?, @id_user_acc, @Full_name, @user_level, @user_type)");
$call->bind_param("ss", $User_Obj->User_Name, $User_Obj->Password);
//var_dump($call);
$call->execute();

$select = $MySql_connection->query('SELECT @id_user_acc, @Full_name, @user_level, @user_type');
$result = $select->fetch_assoc();
//var_dump($result);
$id_user_acc = $result['@id_user_acc'];
$Full_name = $result['@Full_name'];
$user_level = $result['@user_level'];
$user_type = $result['@user_type'];
$call->close();
$MySql_connection->close();

$answer = json_encode(array("ID_User"=> $id_user_acc, "Full_name"=> $Full_name, "user_level"=> $user_level, "user_type"=>$user_type));

if ($id_user_acc > 0) {
    $_SESSION["Loged"] = $id_user_acc;
} else {
    $_SESSION["Loged"] = -100;
}

echo $answer;