const express = require("express");
const dataBase = require("../database");

const getEnvelopes = (req, res) => {
  return res.status(200).json(dataBase.getAllEnvelopes());
};

const createEnvelope = (req, res) => {
  const envelope = dataBase.createEnvelope(req.body.title, req.body.budget);

  dataBase.saveEnvelope(envelope);

  if (envelope) {
    return res.status(201).json(envelope);
  } else {
    return res.status(400).send("There is an error creating your envelope");
  }
};

const getEnvelopeByID = (req, res) => {
  // req.params.id is string data but integer is been saved as id in the database, so you need to parse it to integer
  const envelopeById = dataBase.getEnvelopeByID(parseInt(req.params.id));
  if (envelopeById) {
    return res.status(200).json(envelopeById);
  } else {
    return res.status(404).send();
  }
};

const updateEnvelope = (req, res) => {
  const updatedEnvelope = dataBase.updateEnvelope(
    parseInt(req.params.id),
    req.body
  );
  if (updatedEnvelope) {
    return res.status(200).json(updatedEnvelope);
  } else {
    return res.status(404).send();
  }
};

const deleteEnvelope = (req, res) => {
  const removeEnvelope = dataBase.deleteEnvelope(parseInt(req.params.id));

  if (removeEnvelope) {
    return res.status(200).json(removeEnvelope);
  } else {
    return res.status(404).send();
  }
};

module.exports = {
  createEnvelope,
  getEnvelopes,
  getEnvelopeByID,
  updateEnvelope,
  deleteEnvelope,
};
