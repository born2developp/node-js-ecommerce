import Joi from "@hapi/joi";

// Validation schema 
const schema  = Joi.object({
    name : Joi.string().required(),
    // gender : Joi.string().required(),
    // phone : Joi.string().required(),
    // email : Joi.string().email().required(),
    // username : Joi.string().min(6).required(),
    // password : Joi.string().min(6).required(),
});

export default schema;