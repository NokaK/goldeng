<?php

require_once('DBSQL.php');
require_once('Service_Case.php');

function Pre_SQL($qrJSON) {
    
    $data = (array)json_decode($qrJSON);

    if ($data["SN"]) {
        $ID = $data;
        array_splice($ID, 0, 1);
        $ID = array_values($ID);
        $SQL = Service_Case($data["SN"]);     
    } else {
        echo "DK: Error - received array is invalid";
    }

    if (isset($SQL)) {
        $qr = vsprintf($SQL, $ID);
    } else {
        $qr = null;
    }
    return $qr;
}
