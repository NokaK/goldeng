<?php

require_once('Logon_Verification.php');
require_once('Connection.php');
require_once('DB_Class.php');
require_once('DBSQL.php');
require_once('Service_Case.php');

function Get_Table_Array($Obj, $Sql_Command, $ID) {
    $Obj->Clear();
    $SQL = Service_Case($Sql_Command);
    $Obj->Ready_SQL = vsprintf($SQL, $ID);
    $Obj->Execute(false);
    return $Obj->Ready_Array;
}

$DB_Select_Obj = new DB_Select_Table($MySql_connection);

$Order_Master = Get_Table_Array($DB_Select_Obj, 'Order_Master', $GL_ID_User);
//$Order_Master = Get_Table_Array($DB_Select_Obj, 'Order_Master', 1);

$i_OD = 0;
foreach ($Order_Master as $key => $value) {
    $a = $Order_Master[$i_OD];
    $ID = $a['ID_Order_Master'];
    $Order_Details = Get_Table_Array($DB_Select_Obj, 'Order_Details', $ID);

    $i_ODF = 0;
    foreach ($Order_Details as $key => $value) {
        $a1 = $Order_Details[$i_ODF];
        $ID = $a1['ID_Order_Details'];
        $Order_Feature = Get_Table_Array($DB_Select_Obj, 'Order_Feature', $ID);

        $i_ODFD = 0;
        foreach ($Order_Feature as $key => $value) {
            $a2 = $Order_Feature[$i_ODFD];
            $ID = $a2['ID_Order_Features'];
            $Order_Feature_Detail = Get_Table_Array($DB_Select_Obj, 'order_feature_detail', $ID);
            $Order_Feature[$i_ODFD]['order_feature_detail'] = $Order_Feature_Detail;
            $i_ODFD++;
        }

        $Order_Details[$i_ODF]['Order_Feature'] = $Order_Feature;
        $i_ODF++;
    }
    $Order_Master[$i_OD]['Order_Details'] = $Order_Details;
    $i_OD++;
}
echo (json_encode($Order_Master));
