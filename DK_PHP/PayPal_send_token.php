<?php

// curl -v POST https://api.sandbox.paypal.com/v1/oauth2/token \
//      -H "Accept: application/json" \
//      -H "Accept-Language: en_US" \
//      -u "CLIENT_ID:SECRET" \
//      -d "grant_type=client_credentials"
  
//$CLIENT_ID = 'AaxB1bv7rrehf6yuAeYmsM_yOCKyeMnmgdbYxae5eNtBr_ommrfKTihdZHQ9_1hxmMmJdpLPM1LjJspn';
//$SECRET = 'EBTpxvlfNbwGY4bqxrjOMp7n_M6HArSYaYEXp3Qkp5bRtw_oHy6CFx8HS4JSMhAL_ad4cmn3cCOgnanz';

$CLIENT_ID = 'AR3OGKe4MRkuAwQL6MibeNOVykl-q7iHalazi4mTnwaf2WrH_IuwkOOdaFb-eLloZsowveL_FQsVw9cI';
$SECRET = 'EI9YKFZ9yUlJc_t-0EaIMbbpOjdpeh2RiRXqzUaY_PA-Om_z6Rt3Yd6U7I0NILM_YdTPCAlf3_nJRuY-';

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.sandbox.paypal.com/v1/oauth2/token');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_POST, TRUE);
curl_setopt($ch, CURLOPT_POSTFIELDS, "grant_type=client_credentials");
curl_setopt($ch, CURLOPT_USERPWD, $CLIENT_ID . ':' .$SECRET);

$headers = array();
$headers[] = 'Accept: application/json';
$headers[] = 'Accept-Language: en_US';
$headers[] = 'Content-Type: application/x-www-form-urlencoded';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);

//if ($result){
//    echo $result;
//}
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);


$CLIENT_ID = 'AR3OGKe4MRkuAwQL6MibeNOVykl-q7iHalazi4mTnwaf2WrH_IuwkOOdaFb-eLloZsowveL_FQsVw9cI';
$SECRET = 'EI9YKFZ9yUlJc_t-0EaIMbbpOjdpeh2RiRXqzUaY_PA-Om_z6Rt3Yd6U7I0NILM_YdTPCAlf3_nJRuY-';

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.sandbox.paypal.com/v1/payment-experience/web-profiles/XP-8YTH-NNP3-WSVN-3C76');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');


$headers = array();
$headers[] = 'Content-Type: application/json';
$headers[] = 'Authorization: Bearer '.$result->access_token;
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
echo $result;
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);

