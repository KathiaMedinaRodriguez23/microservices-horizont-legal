const express = require("express");
const {sendUrlForgotPassword, verifyTokenForgotPassword} = require("../controllers/forgot-password-controller");

const router = express.Router();

router.post("/send-url-forgot-password", sendUrlForgotPassword);
router.get("/verify-token", verifyTokenForgotPassword);

module.exports = {
  routes: router,
}