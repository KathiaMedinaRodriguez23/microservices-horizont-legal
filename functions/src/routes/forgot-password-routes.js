const express = require("express");
const {forgotPassword} = require("../controllers/forgot-password-controller");

const router = express.Router();

router.post("/forgot-password", forgotPassword);

module.exports = {
  routes: router,
}