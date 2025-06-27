const {resendSendEmail} = require('../utils/resend-send-email');
const {
  esquemaEmailCitacionAudiencia,
  esquemaEmailRecordatorioCitacionAudiencia, esquemaEamilReprogramacionDeCita
} = require("../utils/html-send");
const dotenv = require("dotenv");
dotenv.config();

const sendCitationEmail = async (req, res) => {
  try {
    const {fecha, hora, idCaso, email} = req.body;
    await resendSendEmail(email, esquemaEmailCitacionAudiencia(fecha, hora, idCaso), "HORITZONTE LEGAL: CITACION A AUDIENCIA");
    res.status(200).json({"status": true, "message": "Mensaje enviado con éxito"});
  } catch (e) {
    console.error("[sendCitationEmail]:", e);
    res.status(500).json({"status": false, "message": "Internal server error"});
  }
}

const sendReminderCitationEmail = async (req, res) => {
  try {
    const {fecha, hora, idCaso, email} = req.body;
    await resendSendEmail(email, esquemaEmailRecordatorioCitacionAudiencia(fecha, hora, idCaso), "HORITZONTE LEGAL: RECORDATORIO DE CITACION A AUDIENCIA");
    res.status(200).json({"status": true, "message": "Mensaje enviado con éxito"});
  } catch (e) {
    console.error("[sendReminderCitationEmail]:", e);
    res.status(500).json({"status": false, "message": "Internal server error"});
  }
}

const sendReprogramacionDeCitaEmail = async (req, res) => {
  try {
    const {fecha, hora, idCaso, email} = req.body;
    await resendSendEmail(email, esquemaEamilReprogramacionDeCita(fecha, hora, idCaso), "HORITZONTE LEGAL: REPROGRAMACION DE CITA");
    res.status(200).json({"status": true, "message": "Mensaje enviado con éxito"});
  } catch (e) {
    console.error("[sendReprogramacionDeCitaEmail]:", e);
    res.status(500).json({"status": false, "message": "Internal server error"});
  }
}

module.exports = {
  sendCitationEmail,
  sendReminderCitationEmail,
  sendReprogramacionDeCitaEmail
}