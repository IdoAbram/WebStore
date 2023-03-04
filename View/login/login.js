let username, password;

function logIn(){
    if(isExist()){
        console.log("exist");
    }else{
        document.getElementById("demo").innerHTML = "Wrong password or username";
    }
}

function isExist(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    //return database.contains(username,password)
    return false;
}
