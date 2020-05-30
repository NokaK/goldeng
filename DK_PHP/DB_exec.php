<?php

header('Access-Control-Allow-Origin: #');
header('Access-Control-Allow-Credentials: *');
header('Cache-Control: no-cache');
header('Pragma: no-cache');
header('mode: no-core');
header('Content-Type: application/json');

require_once('Logon_Verification.php');
require_once('prep_qr.php');
require_once('Connection.php');
require_once('DBSl.php');

$json_str = file_get_contents('php://input');
$qr = Pre_SQL($json_str);

if ($qr) {
    $a = new DB_Select($MySql_connection);
    $a->Execute($qr);
    echo $a->Ready_JSON;
}
