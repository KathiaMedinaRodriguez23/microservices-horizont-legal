const {resendSendEmail} = require('../utils/resend-send-email');
const {squemaEmailHtmlForgotPassword} = require("../utils/html-send");
const {generateToken, verifyToken} = require("../utils/jwt");
const dotenv = require("dotenv");
dotenv.config();

const sendUrlForgotPassword = async(req, res) => {
  try{
    const email = req.body.email;
    const jwt = await generateToken({email: email, action: "forgot-password"});
    const url = process.env.HOST_URL + process.env.ENDPOINT_URL + jwt;
    await resendSendEmail(email, squemaEmailHtmlForgotPassword(url), "HORITZONTE LEGAL: RESTABLECIMIENTO DE CONTRASEÑA");
    res.status(200).json({"status": true, "message": "Mensaje enviado con exito"});
  } catch (error) {
    console.error("[sendUrlForgotPassword]:", error);
    res.status(500).json({"status": false, "message": "Internal server error"});
  }
}

const verifyTokenForgotPassword = async(req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({"status": false, "message": "Token is required"});
    }
    const tokenWithoutBearer = token.replace("Bearer ", "");
    const decoded = await verifyToken(tokenWithoutBearer);
    if (decoded.action !== "forgot-password") {
      return res.status(400).json({"status": false, "message": "Invalid token action"});
    }
    res.status(200).json({"status": true, "message": "Token is valid", "data": decoded.email});
  } catch (error) {
    console.error("[verifyTokenForgotPassword]:", error);
    res.status(500).json({"status": false, "message": "Internal server error"});
  }
}



module.exports = {
  sendUrlForgotPassword,
  verifyTokenForgotPassword
};