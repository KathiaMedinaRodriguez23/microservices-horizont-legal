const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {successResponse, errorResponse} = require("./estandard-response");

/**
 * @param {any} res
 * @param {any} req
 * @param {Function<Promise<any>>} callback
*/
async function requestResponseCallback(res, req, callback) {
  try {
    console.log("=> Start Endpoind: " + req.originalUrl);
    console.log("Body Request: ", req.body);
    const result = await callback();
    console.log("Resultado de la consulta: ", result);
    res.status(200).send(successResponse(result));
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).send(errorResponse(error.message));
  }
}

/**
 * @return {express.Express}
 */
function setupApp() {
  const app = express();
  app.use(cors({
    "origin": true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  }));
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  return app;
}

module.exports = {
  requestResponseCallback,
  setupApp,
};
