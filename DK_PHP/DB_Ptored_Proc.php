<?php

class DB_Stored_proc {

    private $MySql;
    private $Stored_Proc_Name;
    private $Input_Params;
    public $Out_Params;
    private $Par_Type;
    private $jsObj;

    const Call_Str = 'CALL %s(%s $s)';

    public function __construct($MySql) {
        $this->MySql = $MySql;
    }

    public function Set_Stored_Proc_Name($SP_Name) {
        $this->Stored_Proc_Name = $SP_Name;
    }

    public function Set_Input_Params($In_Params) {
        $this->Input_Params = $In_Params;
    }
    
    public function Set_Json($jst){
        $this->jsObj = json_decode($jst);
    }

    private function Generate_Input_Str() {
        if ($this->Input_Params) {
            $Par_Str = '';
            foreach ($this->Input_Params as $key => $value) {
                $Par_Str = $Par_Str . '?,';
                //$this->Par_Type = $this->Par_Type . $value;
            }
        }
        return $Par_Str;
    }
    
    private function Generate_Out_Str() {
        if ($this->Out_Params) {
            $Par_Str = '';
            foreach ($this->Out_Params as $key => $value) {
                $Par_Str = $Par_Str . $value.',';
                //$this->Par_Type = $this->Par_Type . $value;
            }
            $Par_Str = rtrim($Par_Str, ',');
        }
        return $Par_Str;
    }

    private function Prepare() {
        $Input_Str = $this->Generate_Input_Str();
        $Out_Params = $this->Generate_Out_Str();
        $Call = vsprintf($this->Call_Str, $this->Stored_Proc_Name, $Input_Str, $Out_Params);
        return $Call;
    }

    public function Execute() {
        $this->Prepare();
        
        $call->close();
    }

}
