const { request, response } = require("express");
const loginService = require("../Services/loginService");
const customerController = require('../Controller/customer');

function loginForm(req, res) { res.render("../View/LoginPage/loginPage", {}) }

async function login(req, res) {
    const { firstName, lastName, password } = req.body

    const customer = await customerController.getCustomersByFilter({Name: firstName,lastName: lastName,password:password});
    const result = await loginService.login(firstName, lastName, password)
    if (result) {
        res.redirect("/homepage/user/"+customer[0]._id);
    }
    else
      res.redirect("NotFound404");
  }

  module.exports = {
    login,
    loginForm
  }