const express = require("express");
const { resolve } = require("path");
const webhooks = require("./routes/webhooks");

const app = express();

app.use("/webhooks", webhooks);
app.use(express.static(resolve(__dirname, "..", "static")));

module.exports = app;
