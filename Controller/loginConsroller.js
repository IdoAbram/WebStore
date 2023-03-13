const { request, response } = require("express");
const loginService = require("../Services/loginService");
const customerController = require('../Controller/customer');

function loginForm(req, res) { res.render("../View/LoginPage/loginPage", {}) }

async function login(req, res) {
    const { firstName, lastName, password } = req.body

    const result = await loginService.login(firstName, lastName, password)
    if (result == "customer") {
      const customer = await customerController.getCustomersByFilter({Name: firstName,lastName: lastName,password:password});
      //res.session.customer = customer[0]._id;
      res.redirect("/homepage/customer/"+customer[0]._id);
    }
    else if (result == "admin") {
      res.cookie('id',customer[0]._id);
      //res.redirect("/homepage/admin/"+customer[0]._id);
    }
    else if (result == "supplier") {
      res.cookie('id',customer[0]._id);
      //res.redirect("/homepage/supplier/"+customer[0]._id);
    }
    else{
      res.render("../View/LoginPage/loginPage",{})
    }
  }

  function logout(req, res) {
    // res.session.destroy(()=>{
    //   res.redirect("/homepage/");
    // });
    res.redirect("/homepage/");
  }


  module.exports = {
    login,
    loginForm,
    logout
  }