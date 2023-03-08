const { request, response } = require("express");
const loginService = require("../Services/loginService");

function loginForm(req, res) { res.render("../View/LoginPage/loginPage", {}) }

async function login(req, res) {
    const { firstName, lastName, password } = req.body
  
    const result = await loginService.login(firstName, lastName, password)
    if (result) {
        writeCoockie(req,res,firstName, lastName, password);
        res.redirect("/customers/get");
    }
    else
      res.redirect("NotFound404");
  }

  module.exports = {
    login,
    loginForm
  }