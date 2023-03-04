let firstName, lastName, password;
function logIn(){
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

function isExist(){
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    password = document.getElementById("password").value;
    //return database.contains(username,password)
    return true;
}

function isAllreadyLogin(){
    let username = document.cookie.split("/");
    return !(username[1].length == 0);
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