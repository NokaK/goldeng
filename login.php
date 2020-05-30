<?php

include("./includes/header.php")

?>

<body>

    <section class="sectionOne">
    <div class="container mx-auto container_flex ">
        <div class="login_row">
            <div class="login-form">
                <div class="heading">
                    <p class="heading-black-font heading-4">Login</p>
                </div>
                
                    <div class="form-group">
                        <label class="heading-black-font paragraph-regular  email">Email</label>
                        <input value="" type="text" name="txtEmail" id="txtEmail" class="form-control"
                            placeholder="Email">
                        <p class="msg-email error">

                        </p>
                    </div>

                    <div class="form-group relative"> 
                        <label class="heading-black-font paragraph-regular email">Password</label> 
                        <input type="password" name="txtPassword"
                            id="txtPassword" class="form-control pass" placeholder="Password">
                        <p class="msg-pass error"></p>
                        <div class="eyes">
                            <img
                                src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/eye-icon-close.png"
                                alt="Show/hide password" title="Show/hide password">
                        </div>
                    </div>
                    <div class="form-group keep-me-signed clearfix paragraph-small heading-bold-font email">
                         <a href="/login/forgot" title="Forgot Password?"  target="_self" class="forgot-password">Forgot Password?</a> 
                    </div>
                    <div class="custom_flex form-group text-center text-mobile-center ">
                        <button onclick="postUserLogin()" style="width: 100%" class="btn btn-submit "  name="btnSignin">
                            Sign In
                        </button>
                        <!-- <span class="margin-between">OR</span>
                        <a href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;redirect_uri=https%3A%2F%2Fwww.offshorecompanycorp.com%2Flogin%2Fgoogle&amp;client_id=584623121139-5s9cpio2ld1pstp44e1mo3g64imvjhho.apps.googleusercontent.com&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&amp;access_type=offline&amp;approval_prompt=force" title="Login with Google" class="login-with-google">
                        <img src="https://dusyzh85wmzqh.cloudfront.net/frontend/images/login-with-google-icon.png" alt="Login with Google" title="Login with Google" class="google_logo"> Continue with Google</a> -->
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