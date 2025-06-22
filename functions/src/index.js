const {onRequest} = require("firebase-functions/v2/https");
const forgot_password = require("./routes/forgot-password-routes");
const citation = require("./routes/citation-routes");

const {setupApp} = require("./utils/request-comon")

const forgotPasswordEmail = setupApp();
const citationEmail =  setupApp();

forgotPasswordEmail.use("/api/v1", forgot_password.routes);
citationEmail.use("/api/v1", citation.routes);

exports.forgot_password_email = onRequest(forgotPasswordEmail);
exports.citation_email = onRequest(citationEmail);