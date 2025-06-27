const express = require("express");
const {sendCitationEmail, sendReminderCitationEmail, sendReprogramacionDeCitaEmail} = require("../controllers/citation-controller");

const router = express.Router();

router.post("/send-citation-email", sendCitationEmail);
router.post("/send-reminder-citation-email", sendReminderCitationEmail);
router.post("/send-reprogramacion-de-cita-email", sendReprogramacionDeCitaEmail);

module.exports = {
  routes: router,
}