<?php

class DB_Select {

    public $Connection;
    public $Ready_JSON;

    public function __construct($Conn) {
        $this->Connection = $Conn;
        $d = [];
        $this->Ready_JSON = json_encode($d);
    }

    public function Execute($SQL) {
        $result = $this->Connection->query($SQL);

        if ($result->num_rows > 0) {
            $data = $result->fetch_all(MYSQLI_ASSOC);
            $this->Ready_JSON = json_encode($data);
            $Joson_error = json_last_error();
            if ($Joson_error <> JSON_ERROR_NONE) {
                switch (json_last_error()) {
                    case JSON_ERROR_DEPTH:
                        echo ' - მიღწეულია სტეკის მაქსიმალური სიღრმე';
                        break;
                    case JSON_ERROR_STATE_MISMATCH:
                        echo ' - არასწორი თანრიგები ან შეუსაბამო რეჟიმები';
                        break;
                    case JSON_ERROR_CTRL_CHAR:
                        echo ' - არაკორექტული მმართველი სიმბოლო';
                        break;
                    case JSON_ERROR_SYNTAX:
                        echo ' - სინტაქსური შეცდომა, არაკორექტული JSON';
                        break;
                    case JSON_ERROR_UTF8:
                        echo ' - არაკორექტული სიმბოლო UTF-8, შესაძლოა არასწორად არის კოდირებული';
                        break;
                    default:
                        echo ' - უცნობი შეცდომა';
                        break;
                };
            };
            $result->free_result();
            //echo $this->Ready_JSON;
        } else {
            $result = [];
        }
        $this->Connection->close();
    }

}

//$a = new DB_Select($conn);
//$a->Execute("SELECT sg.ID_Service_Group, sg.Service_Group_Name FROM service_group sg WHERE sg.Service_group_status = 0");

