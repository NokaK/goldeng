<?php

require_once('Logon_Verification.php');


define('Service_Group', "SELECT
                            sg.ID_Service_Group,
                            sg.Service_Group_Name,
                            sg.Front_Caption
                          FROM goldenga_solutions.service_group sg
                          WHERE sg.Service_group_status > -1"
        );
define('Country', "SELECT distinct
                        s.ID_Service_Group,
                        s.ID_Country,
                        c.Country_Name,
                        s.ID_Service
                      FROM service s,
                           country c
                      WHERE s.ID_Country = c.ID_Country
                      AND s.ID_Service_Group = %u"
        );
define('All_Country', "SELECT
                        c.ID_Country,
                        c.Country_Name,
                        c.Country_Code,
                        c.Language_Code,
                        c.Phone_Code
                      FROM country c"
        );
define('Service', "SELECT
                        s.ID_Service,
                        s.Service_Name,
                        s.Site_Price
                      FROM service s
                      WHERE s.ID_Service_Group = %u
                      AND s.ID_Country = %u"
        );
define('Service_price', "SELECT
                        s.Site_Price
                      FROM service s
                      WHERE s.ID_Service = %u"
        );
define('Service_Feature', "SELECT
                                sf.ID_Service_Feature,
                                sf.Service_Feature_Name,
                                sf.Site_Price,
                                sft.Service_Feature_Value
                              FROM goldenga_solutions.service_feature sf,
                                   goldenga_solutions.service_feature_type sft
                              WHERE sf.Service_Feature_Status = 0
                              AND sf.ID_Service_Feature_Type = sft.ID_Service_Feature_Type
                              AND sf.ID_Service = %u"
        );
define('get_bank_countries', "SELECT DISTINCT
                                s.ID_Country as ID_Bank_Country,
                                c.Country_Name as Bank_Country_Name
                              FROM goldenga_solutions.service s,
                                   goldenga_solutions.country c,
                                   goldenga_solutions.service_group sg
                              WHERE s.ID_Country = c.ID_Country
                              AND s.ID_Service_Group = sg.ID_Service_Group
                              AND sg.Service_group_status = 100"
        );
define('post_bank_country_id', "SELECT
                                    s.ID_Service as ID_Bank,
                                    s.Service_Name AS Bank,
                                    s.Site_Price
                                  FROM goldenga_solutions.service s,
                                       goldenga_solutions.service_group sg
                                  WHERE s.ID_Service_Group = sg.ID_Service_Group
                                  AND sg.Service_group_status = 100
                                  AND s.ID_Country = %u"
        );
define('post_bank_id', "SELECT
                            s.Site_Price
                          FROM goldenga_solutions.service s
                          WHERE s.ID_Service = %u"
        );
define('Captions_By_Service_Group', "SELECT
                                        cg.Caption
                                      FROM goldenga_solutions.Captions_By_Service_Group cg
                                      WHERE cg.status = 0
                                      AND cg.ID_Service_Group = %u"
        );
define('Get_Payments', "SELECT
                            ID_Payment,
                            ID_Order_Master,
                            Payment_Date,
                            Payment_Amount,
                            Payment_Type,
                            Payment_Status,
                            ID_Financial_Account,
                            om.Order_Number,
                            om.Order_Date
                          FROM payment p, order_master om
                          WHERE p.ID_Order_Master = om.ID_Order_Master AND om.ID_User_Account = %u"
        );
define('Get_User_Data', "SELECT
                            i.Full_name,
                            i.Phone_Number,
                            i.Identity_Description,
                            ua.username
                          FROM user_account ua,
                               identity i
                          WHERE ua.id_Identity = i.ID_identity
                          AND ua.id_user_acc = ".$GL_ID_User
        );
define('Recomended_Service', "SELECT 
                                rs.ID_Recomended_Service, rs.ID_Service 
                             FROM   Recomended_Service rs
                             WHERE  rs.ID_Service_Group = %u"
        );
define('r_services', "SELECT
                        sf.ID_Service_Feature,
                        sf.Service_Feature_Name,
                        sf.Site_Price
                      FROM goldenga_solutions.service_feature sf
                      WHERE sf.Service_Feature_Status = 0
                      AND sf.ID_Service = %u"
        );
define('Order_Master', "SELECT
                            ID_Order_Master,
                            ID_User_Account,
                            Order_Number,
                            Order_Date,
                            Order_Update_Date,
                            Order_Amount_Site,
                            Order_Amount_Merchant,
                            Order_Status,
                            Reserved
                         FROM goldenga_solutions.order_master
                           WHERE ID_User_Account = %u"
        );
define('Order_Details', "SELECT
                            ID_Order_Details,
                            ID_Order_Master,
                            Order_Detail_Name,
                            ID_Service,
                            ID_identity,
                            Service_Name,
                            Service_Price_Site,
                            Service_Price_Merchant,
                            ID_Currency,
                            Reserved
                          FROM goldenga_solutions.order_details
                            WHERE ID_Order_Master = %u"
        );
define('Order_Feature', "SELECT
                            ID_Order_Features,
                            ID_Order_Details,
                            ID_Service_Feature,
                            Service_Feature_Name,
                            Service_Feature_Value,
                            Service_Feature_Price_Site,
                            Service_Feature_Price_Merchant,
                            ID_Currency,
                            Reserved
                          FROM goldenga_solutions.order_features
                            WHERE ID_Order_Details = %u"
        );
define('order_feature_detail', "SELECT
                                    ID_Order_Feature_Detail,
                                    ID_Order_Feature,
                                    Feature_Detail_Type,
                                    Full_Name,
                                    ID_Country,
                                    Identification_Number,
                                    Value_Type,
                                    Value
                                  FROM goldenga_solutions.order_feature_detail
                                    WHERE ID_Order_Feature = %u"
        );
