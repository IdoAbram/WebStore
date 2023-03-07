const loginService = require("../Services/loginService");

function loginForm(req, res) { res.render("../View/LoginPage/loginPage", {}) }

async function login(req, res) {
    const { firstName, lastName, password } = req.body
  
    const result = await loginService.login(firstName, lastName, password)
    if (result) {
        let coockieVal = "token=/"+firstName+"/"+lastName+"/"+password;
        res.Cookies = coockieVal; 
    
      res.redirect("/customers/get")
    }
    else
      res.redirect("NotFound404")
  }

  module.exports = {
    login,
    loginForm
  }