const express = require("express");
const {sendCitationEmail, sendReminderCitationEmail} = require("../controllers/citation-controller");

const router = express.Router();

router.post("/send-citation-email", sendCitationEmail);
router.post("/send-reminder-citation-email", sendReminderCitationEmail);

module.exports = {
  routes: router,
}