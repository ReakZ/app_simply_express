const Joi = require("joi");

const registerValidation = (data) => {
    
  const schemaValidate = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  console.log(schemaValidate.validate(data))
  return schemaValidate.validate(data)
};

const loginValidation = (data) => {
  const schemaValidate = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return schemaValidate.validate(data)
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
