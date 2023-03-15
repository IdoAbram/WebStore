const express = require("express")
const router = express.Router();
const loginController = require("../Controller/loginController");

router.get('/',loginController.loginForm);
router.post('/', loginController.login);
router.get('/signOut',loginController.logout);

module.exports = router;