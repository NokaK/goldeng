<?php

include("./includes/header.php")

?>



<body>
    <div class="container mx-auto">
        <div class="row">
            <div class="custom_container">
                <div class="services-heading">
                    <p class="heading-black-font heading-3">Step 1:Type of your service</p>
                </div>

                <div class="step-form">
                    <div class="step-form-item">
                        <a href="#" target="_self" title="Step 1" class="step-item active">1</a>
                        <a href="#" target="_self" title="Step 2" class="step-item">2</a>
                        <a href="#" target="_self" title="Step 3" class="step-item">3</a>
                        <a href="#" target="_self" title="Step 4" class="step-item">4</a>
                    </div>
                </div>

                <form action="#" class="form-setup">
                    <div class="container">
                        <div class="setup-service">
                            <div>
                                <p class="heading-bold-font paragraph-big">Setup Service</p>
                            </div>
                            <div class="type-of-service">
                                <p class="heading-regular-font paragraph-small">
                                    Type of Service
                                    <strong class="question-mark">[ ? ]</strong>
                                </p>
                            </div>
                            <select name="service-type"
                                class="form-control  block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state">
<<<<<<< HEAD
                                <option value="" hidden>Please select type of the services</option>
                            </select>
                            <div class="type-of-service">
                                <p class="heading-regular-font paragraph-small">
                                    Type of Service
                                    <strong class="question-mark">[ ? ]</strong>
                                </p>
                            </div>
                            <select name="option_select"
                                class="form-control  block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state">
                                <option value="" hidden>Please select type of the services</option>
=======
                                <option value="" disabled hidden>Please select type of the services</option>
                                <!-- <option value="Company">Company Formation/Incorporation
                                </option>
                                <option value="Trust">Trust Formation </option>
                                <option value="Foundation">Foundation Formation</option>
                                <option value="Bank">Open Bank Account </option> -->
>>>>>>> dec43ce942b2d15fdfc417c8a64595af44b518e8
                            </select>
                        </div>

                        <div class="setup-groups core-service setup-service">
                            <div class="form-title heading-bold-font paragraph-big">Recommend Services</div>
                            <div class="collapsible-group">
                                <div id="class-open-bank-account-checkbox"
                                    class="btn btn-toggle collapsed checkbox border-bottom paragraph-medium heading-black-font"
                                    data-toggle="collapse" data-target="#open-bank" aria-expanded="false">
                                    Open Bank
                                    <!-- <input
                    id="open-bank-account-checkbox"
                    name="open-bank-account-checkbox"
                    type="checkbox"
                    value="1"
                  /> -->
                                    <div class="checkbox-arrow">
                                        <div class="selected "></div>
                                        <!-- <div class="arrow">
                                            <img src="src/assets/pictures/gray-line.svg" alt="">
                                        </div> -->
                                    </div>

                                </div>
                                <div class="collapse-none">
                                    <div class="form-group">
                                        <label for="bank-country-on-checkbox paragraph-small heading-regular-font">Bank
                                            Country</label>
                                        <select name="bank-country-on-checkbox" id="bank-country-on-checkbox"
                                            class="form-control">
                                            <option value="">Please select</option>
                                            <option value="">Belize</option>
                                            <option value="">Hong Kong</option>
                                            <option value="">Lithuania</option>
                                            <option value="">Mauritius</option>
                                            <option value="">Puerto Rico (U.S. territory)</option>
                                            <option value="">Saint Kitts and Nevis</option>
                                            <option value="">Saint Lucia</option>
                                            <option value="">Singapore</option>
                                            <option value="">Switzerland</option>
                                            <option value="">United Arab Emirates (UAE)</option>
                                            <option value="">Vanuatu</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="bank-name-on-checkbox paragraph-small heading-regular-font">Bank
                                            Name</label>
                                        <select name="bank-name-on-checkbox" id="bank-name-on-checkbox"
                                            class="form-control" disabled>
                                            <option value="">Please select</option>
                                        </select>
                                    </div>
                                </div>
                                <p class="red text-smallstyle heading-regular-font  paragraph-small">
                                    One Time with Only from
                                    <span value="299" class="currencyValue">US$ 299</span>
                                </p>
                            </div>

                            <div class="collapsible-group">
                                <div class="btn btn-toggle collapsed checkbox border-bottom">
                                    <span class="paragraph-medium heading-black-font">Nominee Director/Shareholder
                                        Services</span>

                                    <div class="checkbox-arrow">
                                        <div class="selected"></div>
                                        <!-- <div class="arrow">
                                            <img src="src/assets/pictures/gray-line.svg" alt="">
                                        </div> -->
                                    </div>


                                </div>
                                <div class="collapse-none">
                                    <div class="form-group"
                                        data-bind="visible: NomiDir.noOfNominee() &amp;&amp; NomiDir.isActive()"
                                        style=""> <label>Number of Nominee Director(s)</label>
                                        <div class="input-group col-2"> <select class="form-control nominee-dir"
                                                id="nomidir-number" name="nomidir-number" title=""
                                                data-bind="enable: NomiDir.isActive()">
                                                <option value="0" selected="">0</option>
                                                <option value="1">1</option>
                                            </select>
                                            <div class="cost"><span
                                                    data-bind="text: globalData.currencySymbol">US$</span> <span
                                                    data-bind="text: globalData.totalOfNomiDir">0</span></div>
                                        </div>
                                    </div>

                                    <div class="form-group"
                                        data-bind="visible: NomiDir.noOfNominee() &amp;&amp; NomiDir.isActive()"
                                        style=""> <label>Number of Nominee Director(s)</label>
                                        <div class="input-group col-2"> <select class="form-control nominee-dir"
                                                id="nomidir-number" name="nomidir-number" title=""
                                                data-bind="enable: NomiDir.isActive()">
                                                <option value="0" selected="">0</option>
                                                <option value="1">1</option>
                                            </select>
                                            <div class="cost"><span
                                                    data-bind="text: globalData.currencySymbol">US$</span> <span
                                                    data-bind="text: globalData.totalOfNomiDir">0</span></div>
                                        </div>
                                    </div>
                                </div>
                                <p class="red text-smallstyle heading-regular-font  paragraph-small">
                                    One Time with Only from
                                    <span value="299" class="currencyValue">US$ 299</span>
                                </p>


                            </div>


                            <div class="addition-services">
                                <div class="class-office-checkbox">
                                    <label class="clearfix heading-regular-font paragraph-small checkbox"
                                        for="office-checkbox">
                                        Serviced Office

                                        <span class="checkmark" id="Serviced"></span>
                                        <div class="cost">
                                            <span heading-regular-font paragraph-small>US$</span>
                                            <span class="zero heading-regular-font  paragraph-small">0</span>
                                            <img class="question_mark" src="src/assets/pictures/question.svg" alt="#">
                                        </div>
                                    </label>
                                    <div class="div-addition-services collapse-off">
                                        <div class="form-group">
                                            <label for="office-country"
                                                class="heading-bold-font paragraph-medium">Choose jurisdictions of
                                                your serviced office</label>
                                            <select id="office-country" name="office-country"
                                                class="form-control heading-regular-font  paragraph-small">
                                                <option value="">Please select</option>

                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Choose Package Fees</label>
                                            <div class="radio choose-fees active">
                                                <label class="red-button flex-box" for="">
                                                    <div class="text margin-left">
                                                        <span class="heading-black-font paragraph-medium">3 months
                                                            (Monthly payment)</span>
                                                    </div>
                                                    <div class="cost margin-right">
                                                        <span class="heading-black-font paragraph-medium">US$</span>
                                                        <span class="zero heading-black-font paragraph-medium ">299</span>
                                                        <img class="question_mark"
                                                            src="src/assets/pictures/question.svg" alt="#">
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="class-office-checkbox">
                                    <label class="clearfix" for="office-checkbox">
                                        Merchant Account Online

                                        <span class="checkmark checkbox" id="Merchant"></span>
                                        <div class="cost">
                                            <span>US$</span>
                                            <span class="zero">99</span>
                                            <img class="question_mark" src="src/assets/pictures/question.svg" alt="#">
                                        </div>
                                    </label>

                                </div>
                                <div class="class-office-checkbox">
                                    <label class="clearfix" for="office-checkbox">
                                        IP Services

                                        <span class="checkmark checkbox"></span>
                                        <div class="cost">
                                            <span>US$</span>
                                            <span class="zero  paragraph-medium ">299</span>
                                            <img class="question_mark" src="src/assets/pictures/question.svg" alt="#">
                                        </div>
                                    </label>

                                </div>
                                <div class="class-office-checkbox">
                                    <label class="clearfix" for="office-checkbox">
                                        Bookkeeping

                                        <span class="checkmark checkbox"></span>
                                        <div class="cost">
                                            <span>US$</span>
                                            <span class="zero">0</span>
                                            <img class="question_mark" src="src/assets/pictures/question.svg" alt="#">
                                        </div>
                                    </label>
                                    <div class="div-addition-services collapse-off">
                                        <div class="form-group"> 
                                        <label for="bookkeeping">Select estimate of your
                                                company transaction in monthly</label> <select id="bookkeeping"
                                                name="bookkeeping" class="form-control"
                                                
                                                disabled="">
                                                <option value="">Please select</option>
                                                <option value="501">From 1 to 50</option>
                                                <option value="502">From 51 to 100</option>
                                                <option value="503">From 101 to 300</option>
                                                <option value="504">From 301 to 500</option>
                                                <option value="506">From 500 to unlimited</option>
                                            </select> </div>
                                        <div class="form-group" id="bookkeeping-period"
                                            >
                                            <label>Select report of bookkeeping by monthly or quarterly</label>
                                            <div class="radio choose-fees active">
                                                <label class="red-button flex-box" for="">
                                                    <div class="text margin-left">
                                                        <span class="heading-black-font paragraph-medium">3 months
                                                            (Monthly payment)</span>
                                                    </div>
                                                    <div class="cost margin-right">
                                                        <span class="heading-black-font paragraph-small">US$</span>
                                                        <span class="zero heading-black-font paragraph-medium">299</span>
                                                        <img class="question_mark"
                                                            src="src/assets/pictures/question.svg" alt="#">
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="radio choose-fees active">
                                                <label class="red-button flex-box" for="">
                                                    <div class="text margin-left">
                                                        <span class="heading-black-font paragraph-medium">3 months
                                                            (Monthly payment)</span>
                                                    </div>
                                                    <div class="cost margin-right">
                                                        <span class="heading-black-font paragraph-small">US$</span>
                                                        <span class="zero heading-black-font   paragraph-medium">299</span>
                                                        <img class="question_mark"
                                                            src="src/assets/pictures/question.svg" alt="#">
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                </form>
                <div class="text-center comp mobile-delete">
                    <button id="gtm_orderService_step1l" class="btn btn-submit heading-regular-font paragraph-small"
                        type="submit" form="step1-form" title="Next">Next</button>
                </div>
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

    <footer class="about">
        <div class="container mx-auto grid-about">
            <div class="about_text ">
                <div class="heading heading-black-font  heading-3">About Us</div>
                <div class="text heading-bold-font paragraph-medium">
                    We are always proud of being an experienced Financial and Corporate Services provider in the
                    international market. We provide the best and most competitive value to you as valued customers to
                    transform your goals into a solution with a clear action plan. Our Solution, Your Success. </div>
            </div>
            <div class="about_btn btn btn-submit">Read more</div>
        </div>

    </footer>



</body>

<?php
  include("./includes/scripts.php")
?>

</html>