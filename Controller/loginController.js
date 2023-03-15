const { request, response } = require("express");
const loginService = require("../Services/loginService");
const customerController = require('./customer');
const adminController = require('./admin');
const supplierController = require('./supplier');


function loginForm(req, res) { res.render("../View/LoginPage/loginPage", {}) }

async function login(req, res) {
    const { email, password } = req.body
    
    let result = await loginService.login(email,password);
    if(result == null){
      result="guest";
    }
    req.session.userType =result;
    if (result == "customer") {
      const customer = await customerController.getCustomersByFilter({password: password,email: email});
      req.session.user = customer[0]._id;
      res.redirect("/homepage/");
    }
    else if (result == "admin") {
      const admin = await adminController.getAdminsByFilter({password: password,Email: email});
      req.session.user = admin[0]._id;
      res.redirect("/homepage/");
    }
    else if (result == "supplier") {
      const supplier = await supplierController.getSuppliersByFilter({password: password,email: email});
      req.session.user = supplier[0]._id;
      res.redirect("/homepage/");
    }
    else{

      res.render("../View/LoginPage/loginPage",{})
    }
  }

  function logout(req, res) {
    
    req.session.destroy(() => {
      
      res.redirect("/homepage/");
    });
    
  }


  module.exports = {
    login,
    loginForm,
    logout
  }