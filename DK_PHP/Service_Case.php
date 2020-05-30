<?php

function Service_Case($Case_Name) {

    switch ($Case_Name) {
        case 'Service_Group':
            $SQL = Service_Group;
            break;
        case 'Country':
            $SQL = Country;
            break;
        case 'Service':
            $SQL = Service;
            break;
        case 'get_bank_countries':
            $SQL = get_bank_countries;
            break;
        case 'post_bank_country_id':
            $SQL = post_bank_country_id;
            break;
        case 'post_bank_id':
            $SQL = post_bank_id;
            break;
        case 'Captions_By_Service_Group':
            $SQL = Captions_By_Service_Group;
            break;
        case 'Service_Feature':
            $SQL = Service_Feature;
            break;
        case 'r_services':
            $SQL = r_services;
            break;
        case 'Recomended_Service':
            $SQL = Recomended_Service;
            break;
        case 'Get_User_Data':
            $SQL = Get_User_Data;
            break;
        case 'Get_Payments':
            $SQL = Get_Payments;
            break;
        case 'All_Country':
            $SQL = All_Country;
            break;
        case 'Service_price':
            $SQL = Service_price;
            break;
        case 'Order_Master':
            $SQL = Order_Master;
            break;
        case 'Order_Details':
            $SQL = Order_Details;
            break;
        case 'Order_Feature':
            $SQL = Order_Feature;
            break;
        case 'order_feature_detail':
            $SQL = order_feature_detail;
            break;        
        default:
            echo 'DK Error: invalid call';
    }
    return $SQL;
}
