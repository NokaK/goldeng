<?php

$nika = 45;

echo $nika;

//require_once('OrderJson.json');

$jst = '{
  "SN": "  post_user  ",
  "ID_User": 10  ,
  "Full_Name": "  maxo+maxo  "

}';
$jsObj = json_decode($jst);
//var_dump($jsObj);
//var_dump($jsObj->sg_master);

echo $jsObj->ID_User, $jsObj->Full_Name, $jsObj->Email_Address, $jsObj->Password, $jsObj->Phone_Number;