const express = require("express"); //Import Express ro create routes
const envelopesController = require("../controllers/envelopesController"); // Import the controller where is the logic to handle the envelopes
const envelopesRouter = express.Router();

envelopesRouter.get("/", envelopesController.getEnvelopes);
envelopesRouter.get("/:id", envelopesController.getEnvelopeByID);
envelopesRouter.post("/", envelopesController.createEnvelope);
envelopesRouter.put("/:id", envelopesController.updateEnvelope);
envelopesRouter.delete("/:id", envelopesController.deleteEnvelope);

module.exports = envelopesRouter;
