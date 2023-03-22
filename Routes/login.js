const express = require("express")
const router = express.Router();
const loginController = require("../Controller/LoginController/loginController");

router.get('/',loginController.loginForm);
router.post('/', loginController.login);
router.get('/signOut',loginController.logout);
router.get('/register',loginController.registerForm);
router.post('/register',loginController.register);
router.get('/createAdmin',loginController.adminPage);
router.post('/createAdmin',loginController.createAdmin);

module.exports = router;