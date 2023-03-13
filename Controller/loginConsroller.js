const { request, response } = require("express");
const loginService = require("../Services/loginService");
const customerController = require('../Controller/customer');
const adminController = require('../Controller/admin');
const supplierController = require('../Controller/supplier');


function loginForm(req, res) { res.render("../View/LoginPage/loginPage", {}) }

async function login(req, res) {
    const { firstName, lastName, password } = req.body

    const result = await loginService.login(firstName, lastName, password)
    if (result == "customer") {
      const customer = await customerController.getCustomersByFilter({Name: firstName,lastName: lastName,password:password});
      res.redirect("/homepage/customer/"+customer[0]._id);
    }
    else if (result == "admin") {
      const admin = await adminController.getAdminsByFilter({Name: firstName,lastName: lastName,password:password});
      res.redirect("/homepage/admin/"+admin[0]._id);
    }
    else if (result == "supplier") {
      const supplier = await supplierController.getSuppliersByFilter({Name: firstName,lastName: lastName,password:password});
      res.redirect("/homepage/supplier/"+supplier[0]._id);
    }
    else{
      res.render("../View/LoginPage/loginPage",{})
    }
  }

  function logout(req, res) {
    res.redirect("/homepage/");

  }


  module.exports = {
    login,
    loginForm,
    logout
  }