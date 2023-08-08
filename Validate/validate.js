const Joi = require('joi');

// Define the validation schema
const schema = Joi.object({
  Source: Joi.string().required(),
  Destination: Joi.string().required(),
  Date: Joi.date().iso().required()
});

module.exports=schema;