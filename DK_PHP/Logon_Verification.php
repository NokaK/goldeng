<?php

session_start();

//require_once("URLs.php");
//echo url_index;
$GL_ID_User = -1;

if (isset($_SESSION["Loged"])) {
    if ($_SESSION["Loged"] == -100) {
        header("Location: http://91.212.213.29/~goldenga/index.php");
    } else {
        $GL_ID_User = $_SESSION["Loged"];
    }
} else {
    header("Location: http://91.212.213.29/~goldenga/index.php");
}
