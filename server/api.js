const express = require("express");

// Import the routers
const envelopesRouter = require("./routes/envelopesRouter");

//Use the routers
const apiRouter = express.Router();

apiRouter.use("/envelopes", envelopesRouter);

module.exports = apiRouter;
