<?php

//require_once('./DK_PHP/Logon_Verification.php');
include("./includes/header.php");

?>




<body>
    <section class="sectionOne">
    <div class="container mx-auto container_flex ">
        <div class="login_row">
            <div class="login-form">
                <div class="heading">
                    <p class="heading-black-font heading-4">Register</p>
                </div>
                
                    <div class="form-group ">
                        <label class="heading-black-font paragraph-medium  email">Full Name <span
                                class="text-danger">*</span>
                        </label>
                        <input maxlength="255" value="" type="text" name="txtName" class="form-control"
                            placeholder="Full Name">
                        <p class="msg-name error"></p>
                    </div>

                    <div class="form-group "> <label class="heading-black-font paragraph-medium  email">Email Address
                            <span class="text-danger">*</span></label> <input maxlength="255" value="" type="text"
                            name="txtEmail" class="form-control" placeholder="Email Address">
                        <p class="msg-email error"></p>
                    </div>

                    <div class="form-group relative ">
                        <label class="heading-black-font paragraph-medium  email">Password <span
                                class="text-danger">*</span>
                            <label>
                                <span class="warning-capslock" hidden="">Warning: <strong>CAPS Lock</strong> is
                                    on</span> <input maxlength="255" name="txtPassword" type="password"
                                    class="form-control pass" placeholder="Password">
                                <div class="eyes">
                                    <img src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/eye-icon-close.png"
                                        alt="Show/hide password" title="Show/hide password"></div>
                                <p class="msg-pass error"></p>
                    </div>

                    <div class="form-group relative "> <label class="heading-black-font paragraph-medium  email">Confirm
                            Password <span class="text-danger">*</span></label> <input maxlength="255"
                            name="txtCPassword" type="password" class="form-control pass"
                            placeholder="Confirm Password">
                        <p class="msg-repass error"></p>
                    </div>


                    <div class="form-group">
                        <label class="heading-black-font paragraph-medium  email">
                            Phone Number <span class="text-danger">*</span>
                        </label>
                        <div class="form-group allow-dropdown">
                            <input value="" id="txtPhone" name="txtPhone" type="text" class="form-control"
                                placeholder="Type your Phone Number" autocomplete="off">
                        </div>
                        <p class="msg-phone error"></p>
                    </div>

                    <div class="form-group" style="display:none"> <label class="heading-black-font paragraph-medium  email">Skype ID </label>
                        <input maxlength="255" value="" name="txtSkype" type="text" class="form-control"
                            placeholder="Skype ID"> </div>

                    <div class="form-group" style="display:none">
                        <label class="heading-black-font paragraph-medium  email">Shipping Address <span
                                class="text-danger">*</span></label>
                        <div class="select_country">
                            <div class="form-group col-md-5 "> <select id="slcAddressCountry" name="slcAddressCountry"
                                    class="form-control">
                                    <option value="">Select a country</option>
                                  
                                </select>
                                <p class="msg-address-country error"></p>
                            </div>

                            <div class="form-group col-md-6 "> <input id="txtAddress" class="form-control" type="text"
                                    name="txtAddress" placeholder="Shipping Address" maxlength="255" value="">
                                <p class="msg-address error"></p>
                            </div>
                        </div>


                    </div>

                    <div class="form-group custom_flex">
                        <div class="have-account pull-left ">Already have an account?
                          </div> 
                          <button onclick="postUserData()"
                            name="btnCreateaccount" class=" btn btn-submit btn-primary pull-right ">
                            Create your account
                          </button>
                    </div>

                    <p class="agree heading-regular-font paragraph-small email">
                        By clicking Create an account, you agree to our 
                        <a style="text-decoration:underline" href="/info/universal-terms-of-service" title="Terms of Service" target="_blank">Terms of
                            
                        Service</a> and confirm that you have read our 
                        <a style="text-decoration:underline" href="/info/privacy-policy" target="_blank" title="Privacy Policy">Privacy Policy</a>.</p>
                
            </div>
        </div>

    </div>
    </section>

    <!-- <button class="modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full">Open Modal</button> -->
  
  <!--Modal-->
  <div class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
    
    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
      
      <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
        <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
        <span class="text-sm">(Esc)</span>
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="modal-content py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold">Error!</p>
          <div class="modal-close cursor-pointer z-50">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>

        <!--Body-->
        <p style="color:red; font-weight: bold">an error occurred</p>

        <!--Footer-->
        <div class="flex justify-end pt-2">
          <!-- <button class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action</button> -->
          <button onclick="postUserData()" class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close</button>
        </div>
        
      </div>
    </div>
  </div>

  <!-- <script>
    var openmodal = document.querySelectorAll('.modal-open')
    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener('click', function(event){
    	event.preventDefault()
    	toggleModal()
      })
    }
    
    const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', toggleModal)
    
    var closemodal = document.querySelectorAll('.modal-close')
    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener('click', toggleModal)
    }
    
    document.onkeydown = function(evt) {
      evt = evt || window.event
      var isEscape = false
      if ("key" in evt) {
    	isEscape = (evt.key === "Escape" || evt.key === "Esc")
      } else {
    	isEscape = (evt.keyCode === 27)
      }
      if (isEscape && document.body.classList.contains('modal-active')) {
    	toggleModal()
      }
    };
    
    
    function toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    }
    
     
  </script> -->
</body>







<?php
  include("./includes/scripts.php")
?>

</html>