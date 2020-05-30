<?php

require_once('./DK_PHP/Logon_Verification.php');
include("./includes/header.php")

?>






<body>
    <section class="sectionOne">
        <div class="container mx-auto">
            <div class="profile_row">
                <div class="custom_container">
                    <div class="profile-sidebar">

                        <nav class="profile-nav">
                            <div class="users">
                                <div class="user-name paragraph-regular heading-bold-font"><strong  name="profile_name"></strong></div>
                                <div class="user-email paragraph-small heading-regular-font"  name="profile_email" >
                                </div>
                                <div class="user-id heading-regular-font paragraph-small"  name="profile_id">User ID: #11016725</div>
                            </div>
                            <ul class="profile_sections  ">
                                <li class="has-sub">
                                    <img class="paragraph-medium heading-black-font "
                                        src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/icon-my-profile.png"
                                        alt="My Profile" title="My Profile">
                                    <p class="paragraph-medium heading-bold-font" style="display: inline-block;">My
                                        Profile</p>
                                    <span class="caret"></span>
                                </li>
                                <ul id="my-profile" class="sub-item sub-item-closed ">
                                    <li class="active">
                                        <a class="paragraph-medium heading-bold-font" href="/myaccount/profile"
                                            target="_self" title="Personal Information">Personal Information</a></li>
                                    <li class="blue-hover ">
                                        <a class="paragraph-medium heading-bold-font" href="/myaccount/changepassword"
                                            target="_self" title="Change Password">Change Password</a></li>
                                </ul>
                                <li class=""><a class="paragraph-medium heading-bold-font" href="/myaccount/orders"
                                        target="_self" title="My Orders"><img
                                            src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/icon-my-order.png"
                                            alt="My Orders" title="My Orders">My Orders</a></li>
                                <li class=""><a class="paragraph-medium heading-bold-font" href="/myaccount/payment"
                                        target="_self" title="My Payments"><img
                                            src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/icon-history-payment.png"
                                            alt="My Payments" title="My Payments">My Payments</a></li>
                                <li class=""><a class="paragraph-medium heading-bold-font"
                                        href="/myaccount/one-ibc-club" target="_self" title="One IBC Club"><img
                                            src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/icon-oibc-point.png"
                                            alt="One IBC Club" title="One IBC Club">One IBC Club</a></li>
                                <li><a class="paragraph-medium heading-bold-font" href="/logout" target="_self"
                                        title="Sign out"><img
                                            src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/icon-signout.png"
                                            alt="Sign out" title="Sign out">Sign out</a></li>
                            </ul>
                        </nav>

                    </div>
                </div>

                <div class="my_profile form-setup">
                    <h2 class="myaccount-title paragraph-biggest heading-bold-font ">My Profile</h2>
                    <div class="account-groups personal-info position-relative setup-service">
                        <div class="edit-c"></div>
                        <div class="person-info margin-top25">
                            <div class="form-group "> 
                                <label class="paragraph-medium heading-bold-font">Full Name</label>
                                <div class="paragraph-small heading-regular-font "  name="profile_name"></div>
                            </div>
                            <div class="form-group"> 
                                <label class="paragraph-medium heading-bold-font">Email Address</label>
                                <div class="paragraph-small heading-regular-font"  name="profile_email"></div>
                            </div>
                            <div class="form-group"> 
                                <label class="paragraph-medium heading-bold-font" >Phone Number</label>
                                <div class="paragraph-small heading-regular-font" name="profile_number"></div>
                            </div>
                            <div class="form-group"> 
                                <label class="paragraph-medium heading-bold-font">Shipping Address</label>
                                <div class="paragraph-small heading-regular-font" name="profile_shipping_address"></div>
                            </div>
                            
                        </div>
                        <form name="profile_form" action="" method="post">
                            <div class="person-edit margin-top25 display-none">
                                <div class="form-group "> <label>Full Name <span class="text-danger">*</span></label>
                                    <input name = "profile_name" maxlength="255" type="text" name="txtName" class="form-control" value="beqa">
                                    <p class="msg-name text-danger"></p>
                                </div>
                                <div class="form-group"> <label>Email Address <span class="text-danger">*</span></label>
                                    <input name = "profile_email" type="text" readonly="" class="form-control"
                                        value="arabidzebeqa@yahoo.com"> </div>
                                <div class="form-group "> <label>Phone Number <span class="text-danger">*</span></label>
                                    <div class="intl-tel-input allow-dropdown">
                                        <div class="flag-container">
                                            <div class="selected-flag" tabindex="0" title="Georgia (საქართველო): +995">
                                                <div class="iti-flag ge"></div>
                                                <div class="iti-arrow"></div>
                                            </div>
                                            <ul class="country-list hide">
                                              
                                            </ul>
                                        </div><input type="text" name="txtPhone" class="form-control" value="123456789"
                                            autocomplete="off">
                                    </div> <input type="hidden" name="txt_iso2" id="txt_iso2" value="ge"> <input
                                        type="hidden" name="txt_phone_number" id="txt_phone_number"
                                        value="+995555714539">
                                    <p class="msg-phone text-danger"></p>
                                </div>
                                <div class="form-group"> <label>Shipping Address <span
                                            class="text-danger">*</span></label>
                                    <div class="">
                                        <div class=" col-md-6 "> <select id="slcAddressCountry" name="slcAddressCountry"
                                                class="form-control">
                                                <option value="">Select a country</option>
                                             
                                            </select>
                                            <p class="msg-address-country text-danger"></p>
                                        </div>
                                        <div class=" col-md-6 "> <input id="txtAddress" class="form-control" type="text"
                                                name="txtAddress" placeholder="Shipping Address" maxlength="255"
                                                value="1256">
                                            <p class="msg-address text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="text-center">
                                    <button onclick="getUserData()" name="btnChangeprofile" class="btn btn-save paragraph-small heading-regular-font"
                                        type="submit">Save</button>
                                    </div>
                            </div>
                        </form>

                                 
                                 <h1 style="text-align: center"; margin-top: 3vw > your orders</h1>               
                        <ul class="accordion">
                         <!--    <li>
                                <input type="checkbox" checked>
                                <i></i>
                                <h2>Languages Used | Languages Used | Languages Used</h2>
                                <p>This page was written in HTML and CSS. The CSS was compiled from SASS. I used Normalize as my CSS reset and -prefix-free to save myself some headaches. I haven't quite gotten the hang of Slim for compiling into HTML, but someday I'll use it since its syntax compliments that of SASS. Regardless, this could all be done in plain HTML and CSS.</p>
                            </li>
                            <li>
                                <input type="checkbox" checked>
                                <i></i>
                                <h2>How it Works</h2>
                                <p>Using the sibling and checked selectors, we can determine the styling of sibling elements based on the checked state of the checkbox input element. One use, as demonstrated here, is an entirely CSS and HTML accordion element. Media queries are used to make the element responsive to different screen sizes.</p>
                            </li>
                            <li>
                                <input type="checkbox" checked>
                                <i></i>
                                <h2>Points of Interest</h2>
                                <p>By making the open state default for when :checked isn't detected, we can make this system accessable for browsers that don't recognize :checked. The fallback is simply an open accordion. The accordion can be manipulated with Javascript (if needed) by changing the "checked" property of the input element.</p>
                            </li> -->
                        </ul>



                    </div>
                </div>
            </div>

        </div>

    </section>
</body>




<script>
	localStorage.clear()

</script>



</body>

<?php
  include("./includes/scripts.php")
?>

</html>
