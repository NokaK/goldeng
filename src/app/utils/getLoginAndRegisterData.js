window.getLoginData = () =>{
    let email = document.querySelector('[name="txtEmail"]').value
    let password = document.querySelector('[name="txtPassword"]').value

    let userLogin = {
        email: email,
        password: password
    }

    console.log(userLogin);
}



window.getRegisterData = () =>{
    let name =  document.querySelector('[name="txtName"]').value
    let email = document.querySelector('[name="txtEmail"]').value
    let password = document.querySelector('[name="txtPassword"]').value
    let conPassword = document.querySelector('[name="txtCPassword"]').value
    let phoneNumber = document.querySelector('[name="txtPhone"]').value

    

  
    let userRegister = {
        Full_Name: name,
        Email_Address: email,
        Password: password,
        Phone_Number: phoneNumber
    }


    console.log(userRegister)
    return userRegister;
}