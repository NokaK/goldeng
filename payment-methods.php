<?php

include("./includes/header.php")

?>



<body>
    <section class="sectionOne">
        <div class="container mx-auto">
            <div class="row">
                <div class="custom_container">
                    <div class="services-heading">
                        <p class="heading-black-font heading-3">Step 3:Payment methods</p>
                    </div>

                    <div class="step-form">
                        <div class="step-form-item">
                            <a href="#" target="_self" title="Step 1" class="step-item active">1</a>
                            <a href="#" target="_self" title="Step 2" class="step-item">2</a>
                            <a href="#" target="_self" title="Step 3" class="step-item">3</a>
                            <a href="#" target="_self" title="Step 4" class="step-item">4</a>
                        </div>
                    </div>

                    <form action="" class="form-setup" method="post">
                        <!-- <div class="setup-groups setup-service">
                            <div class="form-title heading-bold-font paragraph-big">Select your payment method</div>
                            <div class="payment-methods">
                                <div class="credit-cards">
                                    <img src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/payment-credit-or-debit-card.svg"
                                        alt="">
                                    <div class="card-name">Credit or Debit Card</div>
                                </div>
                                <div class="credit-cards">
                                    <img src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/payment-paypal.svg"
                                        alt="">
                                    <div class="card-name">Paypal</div>
                                </div>
                                <div class="credit-cards">
                                    <img src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/payment-wire-bank-transfer.svg"
                                        alt="">
                                    <div class="card-name">Wire Bank Transfer</div>
                                </div>
                            </div>
                        </div> -->

                        <div class="setup-groups setup-service">
                            <div class="form-title heading-bold-font paragraph-big">Credit Card or Debit Card Info</div>
                            <div class="card_number_container" >
                                <div class="form-group card-number">
                                    <label for="input_card_number">Card Number</label>
                                    <div class="input_card_number">
                                        <input id="input_card_number" type="text" class="form-control input_card_number"
                                            placeholder="●●●● ●●●● ●●●● ●●●●" maxlength="19"></div>

                                    <div class="icon-card">
                                        <img src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/card-type.png"
                                            alt="Card Number" title="Card Number"></div>
                                    <div class="error error_input"></div>
                                </div>

                                <!-- <div class="form-goup card-type-box">
                                    <ul class="card-type-card ">
                                        <li><img class="creditcard_visa"
                                                src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/pay-type-visa-card.png"
                                                alt="Visa" title="Visa"></li>
                                        <li><img class="creditcard_master"
                                                src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/pay-type-master-card.png"
                                                alt="Master Card" title="Master Card"></li>
                                        <li><img class="creditcard_amex"
                                                src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/pay-type-american-express.png"
                                                alt="American Express" title="American Express"></li>
                                    </ul>
                                </div> -->
                            </div>

                            <div class="expire_date">
                                <div class="expiried-date-ccv-code ">
                                    <div class="form-group expiried-date"> <label for="input_expired_month"
                                            class="form-label form-block">Expiry Date</label>
                                        <div class="month_year">
                                            <select class="form-control month" id="input_expired_month">
                                                <option value="">Month</option>

                                            </select>
                                            <select id="input_expired_year" class="form-control year">
                                                <option value="">Year</option>

                                            </select> </div>
                                        <div class="error error_input"></div>
                                    </div>

                                </div>
                                <div class="form-group ccv-code">
                                    <label for="input_card_cvv2">CVV <span class="pt-popover" data-toggle="popover"
                                            data-placement="left" title="" data-original-title="CVV"><strong>[ ?
                                                ]</strong>
                                        </span></label>
                                    <input id="input_card_cvv2" type="text" class="form-control" placeholder="CVV">
                                    <div class="error error_input"></div>
                                </div>
                            </div>
                        </div>

                        <div class="setup-groups billing-information">
                            <div class="form-title">Billing Information</div>
                            <div class="form-group"> <label for="input_first_name">First Name</label> <input
                                    id="input_first_name" type="text" class="form-control"
                                    placeholder="Type your first name">
                                <div class="error error_input"></div>
                            </div>
                            <div class="form-group"> <label for="input_last_name">Last Name</label> <input
                                    id="input_last_name" type="text" class="form-control"
                                    placeholder="Type your last name">
                                <div class="error error_input"></div>
                            </div>
                            <div class="form-group"> <label for="input_country">Country</label> <select
                                    id="input_country" class="form-control">
                                    <option value="AF">Afghanistan</option>

                                </select>
                                <div class="error error_input"></div>
                            </div>
                            <div class="form-group row_states" style="display: none"> <label
                                    for="slb_states">State</label> <select id="slb_states" class="form-control">
                                </select>
                                <div class="error error_input"></div>
                            </div>
                            <div class="form-group"> <label for="input_address">Address</label> <input
                                    id="input_address" type="text" class="form-control" placeholder="Type your address">
                                <div class="error error_input"></div>
                            </div>
                            <div class="form-group"> <label for="input_city" class="form-label">City/County</label>
                                <input id="input_city" class="form-control" value=""
                                    placeholder="Type your city/county">
                                <div class="error error_input"></div>
                            </div>
                            <div class="form-group row_state"> <label for="input_state">State/Province/Region</label>
                                <input id="input_state" type="text" class="form-control"
                                    placeholder="Type your state/province/region">
                                <div class="error error_input"></div>
                            </div>
                            <div class="form-group"> <label for="input_zipcode">ZIP/Postal code</label> <input
                                    id="input_zipcode" type="text" class="form-control"
                                    placeholder="Type your postal code">
                                <div class="error error_input"></div>
                            </div>
                        </div>



                    </form>
                    <div class="text-center comp mobile-delete">
                        <button id="gtm_orderService_step1l" class="btn btn-submit heading-regular-font paragraph-small"
                            type="submit" form="step1-form" title="Next">Next</button>
                    </div>
                    

                </div>
                <div class="side-bar">
            <div class="side-padding">
                <div class="your-order comp">
                    <h3 class="heading-bold-font paragraph-big custom_styles">Summary of Your Order</h3>

                    <div class="form-group  border-top-bottom flex-for-form-group">
                        <div class="text">
                            <strong class="heading-bold-font  paragraph-small">Type of Service</strong>
                            <span class="pt-popover" data-toggle="popover" data-placement="left" data-content="Please select type of the services" title="" data-original-title="Type of Service"><strong class="question-mark">[ ? ]</strong>
                            </span>
                        </div>
                        <div class="value">
                            <span data-bind="text: globalData.typeOfServiceName" class="heading-bold-font  paragraph-small">Please select type of the services</span>
                        </div>
                    </div>

                    <div class="total-value">
                        <div class="total heading-black-font paragraph-medium">Total</div>
                        <div class="price heading-black-font paragraph-medium">US$0.00</div>
                    </div>
                </div>
            </div>

            <div class="text-center comp mobile-button">
                <button id="gtm_orderService_step1l" class="btn btn-submit heading-regular-font paragraph-small" type="submit" form="step1-form" title="Next">Next</button>
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