<?php

include("./includes/header.php")

?>



<body>
    <section class="sectionOne">
    <div class="container mx-auto">
        <div class="row">
            <div class="custom_container">
                <div class="services-heading">
                    <p class="heading-black-font heading-3">Step 2:Personal details</p>
                </div>
                <form action="" class="form-setup" method="post">



                    <div class="step-form">
                        <div class="step-form-item">
                            <a href="#" target="_self" title="Step 1" class="step-item active">1</a>
                            <a href="#" target="_self" title="Step 2" class="step-item">2</a>
                            <a href="#" target="_self" title="Step 3" class="step-item">3</a>
                            <a href="#" target="_self" title="Step 4" class="step-item">4</a>
                        </div>
                    </div>
                    <div class="alert-information heading-regular-font paragraph-small"> All information entered on this
                        form will be kept strictly
                        confidential. Your transaction will be secured using <strong>SSL/TLS</strong> encryption. </div>
                    <div class="setup-groups setup-service">
                        <div class="form-title heading-bold-font paragraph-big"> Company Name </div>
                        <div class="proposal-name-group">
                            <div class="form-group ">
                                <label for="proposal-suffix-1" class="heading-regular-font paragraph-small">Proposal
                                    Name #1 </label>
                                <div class="row">
                                    <div class="col-xs-6"> <input id="proposal-name-1"
                                            class="form-control heading-regular-font paragraph-small" type="text"
                                            name="company_name" placeholder="Type your proposal name" maxlength="255"
                                            value=""> </div>
                                    <div class="col-xs-6"> 
                                    <select id="proposal-suffix-1" name="company_suffix"
                                            class="form-control">
                                            <option value="">-- Suffix --</option>
                                            <option value="2"> Limited </option>
                                            <option value="1"> Ltd. </option>
                                            <option value="9"> Incorporation </option>
                                            <option value="10"> Inc. </option>
                                            <option value="11"> Corp. </option>
                                            <option value="16"> Corporation </option>
                                            <option value="56"> Societe Anonyme </option>
                                            <option value="57"> S.A. </option>
                                            <option value="25"> GmbH </option>
                                            <option value="58"> B.V. </option>
                                            <option value="48"> Other </option> 
                                        </select> </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="proposal-name-group">
                            <div class="form-group "> <label for="proposal-suffix-2"
                                    class="heading-regular-font paragraph-small">Proposal Name #2 </label>
                                <div class="row">
                                    <div class="col-xs-6"> <input id="proposal-name-2" class="form-control" type="text"
                                            name="proposal-name-2" placeholder="Optional" maxlength="255" value="">
                                    </div>
                                    <div class="col-xs-6"> <select id="proposal-suffix-2" name="proposal-suffix-2"
                                            class="form-control">
                                            <option value="">-- Suffix --</option>

                                        </select> </div>
                                </div>
                            </div>
                        </div>
                        <div class="proposal-name-group">
                            <div class="form-group "> <label for="proposal-suffix-3"
                                    class="heading-regular-font paragraph-small">Proposal Name #3 </label>
                                <div class="row">
                                    <div class="col-xs-6"> <input id="proposal-name-3" class="form-control" type="text"
                                            name="proposal-name-3" placeholder="Optional" maxlength="255" value="">
                                    </div>
                                    <div class="col-xs-6"> <select id="proposal-suffix-3" name="proposal-suffix-3"
                                            class="form-control">
                                            <option value="">-- Suffix --</option>

                                        </select> </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
<!-- 
                    <div class="setup-groups setup-service" id="group-directors">
                        <div class="form-title heading-bold-font paragraph-big">Director(s) Information</div>
                        <div class="group-form-group" id="block-director-0">
                            <div class="form-group">
                                <label>Director #1</label>
                                <div class="radio flex_radio">
                                    <div class="radio_personal">
                                        <span class=" radio_checkmark radio_checkmark-after"></span>


                                        <label class="radio-inline"> Personal </label>
                                    </div>

                                    <div class="radio_corporate">

                                        <span class="radio_checkmark radio_checkmark_left"></span>
                                        <label class="radio-inline"> Body Corporate </label>
                                    </div>




                                </div>
                            </div>
                            <div id="block-director-0-personal" style="display: block;">
                                <div class="form-group"> <label for="name-Personal-director-0">Full Name</label> <input
                                        type="text" maxlength="255" class="form-control" placeholder="Type full name"
                                        name="director[0][Personal][name]" id="name-Personal-director-0" data-id="0"
                                        value=""> </div>
                                <div class="form-group"> <label for="country-Personal-director-0">Nationality</label>
                                    <select class="form-control" data-id="0" name="director[0][Personal][country_id]"
                                        id="country-Personal-director-0">
                                        <option value="">Please select</option>

                                    </select> </div>
                                <div class="form-group"> <label for="passport-Personal-director-0">Passport
                                        Number</label> <input type="text" maxlength="255" class="form-control"
                                        placeholder="Type passport number" name="director[0][Personal][passport]"
                                        id="passport-Personal-director-0" data-id="0" value=""> </div>
                            </div>
                            <div id="block-director-0-body" style="display: none;">
                                <div class="form-group"> <label for="name-Body-director-0">Company Name</label> <input
                                        type="text" maxlength="255" class="form-control" placeholder="Company Name"
                                        name="director[0][Body][name]" id="name-Body-director-0" data-id="0" value="">
                                </div>
                                <div class="form-group"> <label for="country-Body-director-0">Jurisdiction of
                                        Incorporation</label> <select class="form-control" data-id="0"
                                        name="director[0][Body][country_id]" id="country-Body-director-0">

                                    </select> </div>
                            </div>
                        </div>
                    </div>

                    <div class="setup-groups setup-service" id="group-shareholders"> -->
                        <!-- <div class="form-title">Shareholder(s) Information</div>
                        <div class="group-form-group">
                            <div class="form-group"> <label class="heading-bold-font paragraph-big">Shareholder/Members
                                    #1</label>
                                <div class="radio flex_radio">
                                    <div class="radio_personal">
                                        <span class=" radio_checkmark radio_checkmark-after"></span>


                                        <label class="radio-inline"> Personal </label>
                                    </div>

                                    <div class="radio_corporate">

                                        <span class="radio_checkmark radio_checkmark_left"></span>
                                        <label class="radio-inline"> Body Corporate </label>
                                    </div>
                                </div>
                                <div id="block-shareholder-0-personal" style="display: block;">
                                    <div class="form-group"> <label for="name-Personal-shareholder-0">Full Name</label>
                                        <input type="text" maxlength="255" class="form-control"
                                            placeholder="Type full name" name="shareholder[0][Personal][name]"
                                            id="name-Personal-shareholder-0" data-id="0" value=""> </div>
                                    <div class="form-group"> <label
                                            for="country-Personal-shareholder-0">Nationality</label>
                                        <select class="form-control" data-id="0"
                                            name="shareholder[0][Personal][country_id]"
                                            id="country-Personal-shareholder-0">

                                        </select> </div>
                                    <div class="form-group"> <label for="passport-Personal-shareholder-0">Passport
                                            Number</label> <input type="text" maxlength="255" class="form-control"
                                            placeholder="Type passport number" name="shareholder[0][Personal][passport]"
                                            id="passport-Personal-shareholder-0" data-id="0" value=""> </div>
                                    <div class="form-group"> <label for="share-Personal-shareholder-0">Percentage (%) of
                                            the
                                            shares will own <span class="pt-popover" data-toggle="popover"
                                                data-placement="right"
                                                data-content="Type the percentage of shares owned by shareholder(s). The total of shares is depending on each jurisdiction's rule, with mean 100% of share. If the company have more one shareholder, please click on plus button to add more."
                                                title=""
                                                data-original-title="Percentage (%) of the shares will own"><strong>[ ? ]</strong> </span> </label> <select data-id="0" class="form-control"
                                            name="shareholder[0][Personal][share]" id="share-Personal-shareholder-0">
                                            <option value="">Please select</option>

                                            <option value="100" selected="">100</option>
                                        </select> </div>
                                    <div class="checkbox">
                                        <label for="beneficiary-Personal-shareholder-0"> Tick if
                                            Shareholder as the same Beneficial Owner
                                            <input type="checkbox"> <span class="checkmark"></span> 
                                        </label> 
                                    </div>
                                    <p class="text-note" style="color:red">Note: If you check Shareholder is a
                                        Beneficial Owner, you do not
                                        need to fill in this part.</p>
                                </div>
                                <div id="block-shareholder-0-body" style="display: none;">
                                    <div class="form-group"> <label for="name-Body-shareholder-0">Company Name</label>
                                        <input type="text" maxlength="255" class="form-control"
                                            placeholder="Company Name" name="shareholder[0][Body][name]"
                                            id="name-Body-shareholder-0" data-id="0" value=""> </div>
                                    <div class="form-group"> <label for="country-Body-shareholder-0">Jurisdiction of
                                            Incorporation</label> <select class="form-control" data-id="0"
                                            name="shareholder[0][Body][country_id]" id="country-Body-shareholder-0">

                                        </select> </div>
                                    <div class="form-group"> <label for="share-Body-shareholder-0">Percentage (%) of the
                                            shares will own <span class="pt-popover" data-toggle="popover"
                                                data-placement="right"
                                                data-content="Type the percentage of shares owned by shareholder(s). The total of shares is depending on each jurisdiction's rule, with mean 100% of share. If the company have more one shareholder, please click on plus button to add more."
                                                title=""
                                                data-original-title="Percentage (%) of the shares will own"><strong>[ ?
                                                    ]</strong> </span> </label> <select data-id="0" class="form-control"
                                            name="shareholder[0][Body][share]" id="share-Body-shareholder-0">
                                            <option value="">Please select</option>

                                        </select> </div>
                                </div>
                            </div>

                        </div> -->

                        <!-- <div class="setup-groups setup-service" id="group-benefitowners">
                            <div class="form-title heading-bold-font paragraph-big">Beneficial Owners</div>
                            <div id="benefitowners-container">
                                <div class="group-form-group" id="block-benefitowner-0" data-benefitowner-id="0"> <input
                                        type="hidden" id="filled-benefitowner-0" data-id="0" value="0"> <label
                                        id="label-benefitowner-0">Beneficial Owner #1</label>
                                    <div class="form-group pull-right" id="benefitowner-0-remove-block"> <button
                                            type="button" class="btn btn-sm btn-danger"
                                            id="button-remove-benefitowner-0" title="Remove" style="display:none"
                                           >Remove</button> </div>
                                    <div class="form-group"> <label for="name-benefitowner-0">Full Name</label> <input
                                            type="text" maxlength="255" class="form-control"
                                            placeholder="Type full name" name="benefitowner[0][name]"
                                            id="name-benefitowner-0" data-id="0" value=""
                                           > </div>
                                    <div class="form-group"> <label for="country-benefitowner-0">Nationality</label>
                                        <select class="form-control" name="benefitowner[0][country_id]"
                                            id="country-benefitowner-0" data-id="0">

                                        </select> </div>
                                    <div class="form-group"> <label for="passport-benefitowner-0">Passport
                                            Number</label> <input type="text" maxlength="255" class="form-control"
                                            placeholder="Type passport number" name="benefitowner[0][passport]"
                                            id="passport-benefitowner-0" data-id="0" value=""> </div>
                                </div>
                            </div>
                            <div class="form-group add-benificial" style="display:none;"> <button type="button"
                                    class="btn btn-default" id="button-add-benefitowner"
                                    title="Add Beneficial Owner">Add Beneficial Owner</button> </div>
                        </div> -->


                        <!-- <div class="setup-groups">
                            <div class="form-title heading-bold-font paragraph-big">Contact Details &amp; Shipping Address</div>
                            <div class="form-group"> <label>Full Name <span class="pt-popover" data-toggle="popover"
                                        data-placement="right" data-content="Please enter your contact full name"
                                        title="" data-original-title="Full Name"><strong>[ ? ]</strong></span> </label>
                                <input id="contact-fullname" class="form-control" type="text" name="contact_fullname"
                                    placeholder="Please enter your contact full name" maxlength="255" value="beqa">
                                <p class="msg-contact-fullname error"></p>
                            </div>
                            <div class="form-group"> <label>Email Address <span class="pt-popover" data-toggle="popover"
                                        data-placement="right" data-content="Please enter your contact email" title=""
                                        data-original-title="Email Address"><strong>[ ? ]</strong></span> </label>
                                <input id="contact-email" class="form-control" type="text" name="contact_email"
                                    placeholder="Please type email" maxlength="255" value="arabidzebeqa@yahoo.com">
                                <p class="msg-contact-email error"></p>
                            </div>
                            <div class="form-group"> <label>Phone Number <span class="pt-popover" data-toggle="popover"
                                        data-placement="right" data-content="Please enter your contact phone number"
                                        title="" data-original-title="Phone Number"><strong>[ ? ]</strong></span>
                                </label>
                                <div class="form-group clearfix">
                                    <div class="intl-tel-input allow-dropdown">
                                        <div class="flag-container">
                                            <div class="selected-flag" tabindex="0" title="Georgia (საქართველო): +995">
                                                <div class="iti-flag ge"></div>
                                                <div class="iti-arrow"></div>
                                            </div>
                                            <ul class="country-list hide">

                                            </ul>
                                        </div>
                                        <input id="contact-phone" type="text" class="form-control "
                                            placeholder="Phone Number" value="" autocomplete="off">
                                    </div> <input name="phone_number" id="phoneNumber" type="hidden"
                                        value="+995555714539"> <input name="phone_country_code" id="phoneCountryCode"
                                        type="hidden" value="ge"> <input name="phone_valid" id="phoneValid"
                                        type="hidden" value="0">
                                    <p class="msg-phone error"></p>
                                </div>
                            </div>
                            <div class="form-group"> <label>Shipping Address <span class="pt-popover"
                                        data-toggle="popover" data-placement="right"
                                        data-content="Fill in your address where you want to receive your Company Kit (if any)"
                                        title="" data-original-title="Shipping Address"><strong>[ ? ]</strong> </span>
                                </label>
                                <div class="row">
                                    <div class="form-group col-md-4 col-sm-6"> <select id="country-billing-address"
                                            name="shipping_address_country_code" class="form-control">
                                            <option value="">Select a country</option>

                                        </select> </div>
                                    <div class="form-group col-md-8 col-sm-6"> <input id="billing-address"
                                            class="form-control" type="text" name="shipping_address"
                                            placeholder="Type your shipping address" maxlength="255" value="1256">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group"> <label>Special Request</label> <textarea name="special_request"
                                    rows="3" class="form-control" placeholder="Type your special request (optional)"
                                    style="height:auto;" maxlength="255"></textarea> </div>
                        </div> -->


                </form>




            </div>
            <div class="read-and-agreed">
                <div class="form-group">
                    <div class="checkbox">
                        <label for="confirm" class="correct heading-regular-font paragraph-small"> I would like to
                            confirm the above information is correct.
                            <input id="confirm"  type="checkbox" >
                            <!-- <span class="checkmark"></span> -->
                        </label>
                        <label for="read" class="agreed heading-regular-font paragraph-small"> I have read and agreed <a
                                href="/info/universal-terms-of-service" target="_blank"
                                title="Terms and Conditions">Terms and Conditions</a> 
                                <input id="read" type="checkbox" > 
                                <!-- <span class="checkmark"></span> -->
                        </label>
                    </div>
                </div>
            </div>
            <div class="text-center comp mobile-delete">
                <button onclick="submitEntiereService()" id="gtm_orderService_step1l" class="btn btn-submit heading-regular-font paragraph-small"
                    type="submit" form="step1-form" title="Next">Next</button>
            </div>

        </div>
        <div class="side-bar">
            <div class="side-padding">
                <div class="your-order comp">
                    <h3 class="heading-bold-font paragraph-big custom_styles">Summary of Your Order</h3>

                    <div class="form-group  border-top-bottom">
                        <div class="text">
                            <strong class="heading-bold-font  paragraph-small">Type of Service</strong>
                            <span class="pt-popover" data-toggle="popover" data-placement="left"
                                data-content="Please select type of the services" title=""
                                data-original-title="Type of Service"><strong class="question-mark">[ ? ]</strong>
                            </span>
                        </div>
                        <div class="value">
                            <span data-bind="text: globalData.typeOfServiceName"
                                class="heading-bold-font  paragraph-small">Please select type of the services</span>
                        </div>
                    </div>

                    <div class="total-value">
                        <div class="total heading-black-font paragraph-medium">Total</div>
                        <div class="price heading-black-font paragraph-medium">US$0.00</div>
                    </div>
                </div>
            </div>

            <div class="text-center comp mobile-button">
                <button id="gtm_orderService_step1l" class="btn btn-submit heading-regular-font paragraph-small"
                    type="submit" form="step1-form" title="Next">Next</button>
            </div>
        </div>
    </div>
    </div>
    </section>
</body>








<?php
  include("./includes/scripts.php")
?>



</html>