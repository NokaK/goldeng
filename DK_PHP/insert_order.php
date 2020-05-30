<?php

require_once('Logon_Verification.php');
require_once('Connection.php');
require_once('Order_Procedures.php');

$json_str = file_get_contents('php://input');

$Order_Obj = json_decode($json_str);
$Order_Obj->user_id = $GL_ID_User;

$ID_Order_Master = Insert_Order_Master($MySql_connection, $Order_Obj->user_id);

if ($ID_Order_Master < 0) {
    exit('DK: User error; User = ' . $Order_Obj->user_id);
}

//$ID_Identity = Insert_identity($MySql_connection, $Order_Obj->company_name->mame." ".$Order_Obj->company_name->suffix, "", "");
$SS = $Order_Obj->company_name->mame . " " . $Order_Obj->company_name->suffix;
$ID_Order_Details = insert_Order_Details($MySql_connection, $ID_Order_Master, null, $Order_Obj->service_id, $SS);

$IDs = [];
foreach ($Order_Obj->features_information as $value) {
    if (in_array($value->id, $IDs, true) == false) {
        $IDs[] = $value->id;
    }
}

foreach ($IDs as $val) {
    $counter = 0;
    foreach ($Order_Obj->features_information as $value) {
        if ($val == $value->id) {
            ++$counter;
        }
    }

    foreach ($Order_Obj->features_information as $value) {
        if ($val == $value->id) {
            $ID_Order_Features = insert_order_features($MySql_connection, $ID_Order_Details, $value->id, $counter);
            $ID_Order_Feature_Detail = insert_order_feature_detail($MySql_connection, $ID_Order_Features, $value->type_of_feature_id, $value->name, $value->country_id, $value->identity_number, 1, $value->percentage);
        }
    }
}

$Service_ID = $Order_Obj->recommend_services->open_bank->bank_id;
if ($Service_ID) {
    $ID_Order_Details = insert_Order_Details($MySql_connection, $ID_Order_Master, null, $Service_ID, "Bank Account");
    foreach ($Order_Obj->recommend_services->ID_Service_Feature as $value) {
        $ID_Order_Features = insert_order_features($MySql_connection, $ID_Order_Details, $value, 0);
    }
}

$Site_Price = Counting_Price($MySql_connection, $ID_Order_Master);

echo $Site_Price;
