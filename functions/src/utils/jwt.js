const {sign, verify} = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

async function generateToken(payload) {
  return sign(payload, JWT_SECRET, {expiresIn: '1h', algorithm: 'HS256'});
}

async function verifyToken(token) {
  try {
    return verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
}

module.exports = {
  generateToken,
  verifyToken
}