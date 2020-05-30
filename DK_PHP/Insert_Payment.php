<?php

function Insert_Payment($MySql_conn, $ID_Order_Master, $Payment_Amount) {
    //Insert_Payment(IN iID_Order_Master INT, IN iPayment_Amount FLOAT, OUT oID_Payment INT)
    $call = $MySql_conn->prepare('CALL Insert_Payment(?, ?, @ID_Payment)');
    $call->bind_param('ii', $ID_Order_Master, $Payment_Amount);
    $call->execute();

    $select = $MySql_conn->query('SELECT @ID_Payment');
    $result = $select->fetch_assoc();
    $ID_Payment = $result['@ID_Payment'];
    return $ID_Payment;
}