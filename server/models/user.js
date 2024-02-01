import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        require : true
    },
    gender: {
        type: String,
        require : true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type : String,
        require: true
    },
    username: { 
        type: String,
        require : true
    },
    password: { 
        type: String,
        require : true
    },
    status: { 
        type: Boolean,
        require : true
    },
    card: {
        type: Array
    },
    orders: {
        type: Array
    },
} , {timestamps : true});

const Users = mongoose.model('users' , userSchema);

export default Users;