import Joi from '@hapi/joi';
import schema from '../validation.js';

export const userSign = async (req , res) => {
    try{
        // Validation data before create user 
        const {name} = req.body;
        const validation = Joi.validate(req.body , schema);
        if(validation) return res.status(400).json({"status" : true , "data" : validation});
        res.status(200).json({"status" : true , "data" : "Sign in successfully"});
    }catch(err) {
        res.status(404).json({"status:" : false , "data" : err});
    }
}