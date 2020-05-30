<?php

function Insert_Order_Master($MySql_conn, $User_ID) {
    $call = $MySql_conn->prepare('CALL insert_order_master(?, @ID_Order_Master)');
    $call->bind_param('i', $User_ID);
    $call->execute();

    $select = $MySql_conn->query('SELECT @ID_Order_Master'); //query('SELECT @sum, @product, @average');
    $result = $select->fetch_assoc();
    $ID_Order_Master = $result['@ID_Order_Master'];
    return $ID_Order_Master;
}

function Insert_identity($MySql_conn, $Full_Name, $Phone_Number, $Describtion) {
    $call = $MySql_conn->prepare('CALL Insert_identity(?, ?, ?, @ID_Identity)');
    $call->bind_param('sss', $Full_Name, $Phone_Number, $Describtion);
    $call->execute();

    $select = $MySql_conn->query('SELECT @ID_Identity');
    $result = $select->fetch_assoc();
    $ID_Identity = $result['@ID_Identity'];
    return $ID_Identity;
}

function insert_Order_Details($MySql_conn, $ID_Order_Master, $ID_Identity, $ID_Service, $Order_Detail_Name) {
    $call = $MySql_conn->prepare('CALL insert_Order_Details(?, ?, ?, ?, @ID_Order_Details)');
    $call->bind_param('iiis', $ID_Order_Master, $ID_Identity, $ID_Service, $Order_Detail_Name);
    $call->execute();
     
    $select = $MySql_conn->query('SELECT @ID_Order_Details');
    $result = $select->fetch_assoc();
    $ID_Order_Details = $result['@ID_Order_Details'];
    return $ID_Order_Details;
}

function insert_order_features($MySql_conn, $ID_Order_Details, $ID_Service_Feature, $Service_Feature_Value) {
    $call = $MySql_conn->prepare('CALL insert_order_features(?, ?, ?, @ID_Order_Features)');
    $call->bind_param('iid', $ID_Order_Details, $ID_Service_Feature, $Service_Feature_Value);
    $call->execute();

    $select = $MySql_conn->query('SELECT @ID_Order_Features'); 
    $result = $select->fetch_assoc();
    $ID_Order_Features = $result['@ID_Order_Features'];
    return $ID_Order_Features;
}

function insert_order_feature_detail($MySql_conn, $ID_Order_Feature, $Feature_Detail_Type, $Full_Name, $ID_Country, $Identification_Number, $Value_Type, $Value) {
    $call = $MySql_conn->prepare('CALL insert_order_feature_detail(?, ?, ?, ?, ?, ?, ?, @ID_Order_Feature_Detail)');
    $call->bind_param('iisisid', $ID_Order_Feature, $Feature_Detail_Type, $Full_Name, $ID_Country, $Identification_Number, $Value_Type, $Value);
    $call->execute();

    $select = $MySql_conn->query('SELECT @ID_Order_Feature_Detail'); 
    $result = $select->fetch_assoc();
    $ID_Order_Feature_Detail = $result['@ID_Order_Feature_Detail'];
    return $ID_Order_Feature_Detail;
}

function Counting_Price($MySql_conn, $ID_Order_Master) {
    $call = $MySql_conn->prepare('CALL Counting_Price_by_m(?, @Site_Price, @Merchant_Price)');
    $call->bind_param('i', $ID_Order_Master);  
    $call->execute();

    $select = $MySql_conn->query('SELECT @Site_Price, @Merchant_Price'); 
    $result = $select->fetch_assoc();
    $Site_Price = $result['@Site_Price'];
    $Merchant_Price = $result['@Merchant_Price'];
    //echo $Site_Price;
    //echo $Merchant_Price;
    return $Site_Price;    
}