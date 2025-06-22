const express = require("express");
const {sendCitationEmail} = require("../controllers/citation-controller");

const router = express.Router();

router.post("/send-citation-email", sendCitationEmail);

module.exports = {
  routes: router,
}