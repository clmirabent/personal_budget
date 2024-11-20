let Envelopes = [];

const createEnvelope = (title, budget) => {
  //this function will create the envelope in the db
  const id = Envelopes.length + 1; //will create an id
  return {
    id: id,
    title: title,
    budget: budget,
  };
};

const saveEnvelope = (envelope) => {
  //this function will save the envelope created
  Envelopes.push(envelope);
};

const getAllEnvelopes = () => {
  return Envelopes;
};

const getEnvelopeByID = (envelopeId) => {
  return Envelopes.find((envelope) => envelope.id === envelopeId);
};

// udpate is {title: string, budget: number}
const updateEnvelope = (id, update) => {
  const instanceIndex = Envelopes.findIndex((element) => element.id === id); //find the element's position

  if (instanceIndex === -1) return null;

  let element = Envelopes[instanceIndex];

  if (update.title) {
    //check if in update there is a title. Update is an object in this case
    element.title = update.title; // the object element will take the value of the update in case it exists
  }

  if (update.budget) {
    //check if in update there is a budget. Update is an object in this case
    element.budget = update.budget; //the object element will take the value of the update in case it exists
  }

  Envelopes[instanceIndex] = element; //update the element

  return element;
};
const deleteEnvelope = (id) => {
  let index = Envelopes.findIndex((element) => element.id === id); //find the element's position
  if (index === -1) return null;

  Envelopes = Envelopes.filter((element) => element.id !== id);
  return Envelopes; // Return the updated array
};

module.exports = {
  createEnvelope,
  saveEnvelope,
  getAllEnvelopes,
  getEnvelopeByID,
  updateEnvelope,
  deleteEnvelope,
};
