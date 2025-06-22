const sendCitationEmail = async (req, res) => {
  res.status(200).json({"status": true, "message": "Citation email endpoint is not implemented yet."});
}

module.exports = {
  sendCitationEmail
}