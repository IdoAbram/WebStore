const express = require("express")
const router = express.Router();
const loginController = require("../Controller/loginConsroller");

router.get('/',loginController.loginForm)
router.post("/", loginController.login);

module.exports = router;