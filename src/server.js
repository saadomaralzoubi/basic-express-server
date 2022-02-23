"use strict";

const express = require("express");

const errorHandler = require("./error-handlers/500.js");
const notFoundHandler = require("./error-handlers/404.js");
const logger = require("./middlewares/logger.js");
const validator = require("./middlewares/validator.js");

const app = express();

app.get("/person", validator, (req, res) => {
  res.json({
    name: req.query.name,
  });
});

app.use("*", notFoundHandler);
app.use(errorHandler);
app.use(logger);

function start(port) {
  app.listen(port, () => {
    console.log(`you in port ${port}`);
  });
}

module.exports = {
  app: app,
  start: start,
};
