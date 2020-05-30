<?php

class DB_Select_Table {

    public $Connection;
    protected $FTable_Name;
    protected $FFields;
    protected $FConditions;
    public $Ready_SQL;
    public $Ready_JSON;
    public $Ready_Array;

    public function __construct($Conn) {
        $this->Connection = $Conn;
        $this->Clear();
    }

    public function Set_TableName($Tb_Name) {
        $this->FTable_Name = $Tb_Name;
    }

    public function Set_Fields($Fields) {
        $this->FFields = $Fields;
    }

    public function Set_Conditions($Conditions) {
        $this->FConditions = $Conditions;
    }

    public function ArrayToJSON() {
        return json_encode($this->Ready_Array);
    }

    public function Clear() {
        $this->Ready_Array = [];
        $this->Ready_JSON = '';
        $this->Ready_SQL = '';
    }
    
    private function Make_SQL() {
        $this->Ready_SQL = "DK";
        return $this->Ready_SQL;
    }

    public function Execute($objets_Array) {
        $result = $this->Connection->query($this->Ready_SQL);
        if ($result->num_rows > 0) {
            $i = 0;
            while ($row = $result->fetch_assoc()) {
                $arr = [];
                foreach ($row as $key => $value) {
                    $arr[$key] = $value;
                }
                if ($objets_Array == true) {
                    $this->Ready_Array[$i] = (object) $arr;
                } else {
                    $this->Ready_Array[$i] = $arr;
                }
                $i++;
            }
        } else {
            //$this->Clear();
        }
    }

}

;

