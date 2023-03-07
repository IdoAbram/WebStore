const customerController = require("../../Controller/Customer");

async function isExist(){
    return (customerController.getCustomersByFilter(
        {
            Name: firstName,
            lastName: lastName,
            password: password
        }
    ) != null);
}

function isAllreadyLogin(){
    return !(document.cookie.split("/")[1].length == 0);
}

function signOut(){}


function test(){
    let username = document.cookie.split("/");
    if(isAllreadyLogin()){
        document.getElementById("demo").innerHTML = "allready looged in as: "+username[1]+" "+username[2];
    }else{
        document.getElementById("demo").innerHTML = "";
    }
}


function logIn(){
    let firstName, lastName, password;
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    password = document.getElementById("password").value;
    if(document.cookie == ""){
        document.cookie = "token=///";
    }
    if(isExist()){
        console.log("exist");
        test();
        let cookievalue = firstName+"/"+lastName +"/"+password;
        document.cookie = "token=/"+cookievalue;
        //join to the home page with your account
    }else{
        document.getElementById("demo").innerHTML = "Wrong password or username";
    }
}