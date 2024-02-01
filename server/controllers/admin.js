import nodemailer from 'nodemailer';
import Products from '../models/product.js';
import Categories from '../models/category.js';
import Users from '../models/user.js';


// ============================= Categories ==============================================

// add category
export const registerCategory = async (req, res) => {
    try {
        const category = await Categories(req.body).save();
        res.json({"status": true,"message" : category});
    }catch (err) {
        res.json({"status": false,"message" : err});
    }
}

// update category
export const updateCategory = async (req, res) => {
    try { 
        const { _id , title , image } = req.body;
        const category = await Categories.findByIdAndUpdate(_id , {title , image});
        res.json({"status": true, "message" : category});
    }catch(err) {
        res.json({"status": false,"message" : err});
    }
}

// delete category
export const deleteCategory = async (req, res) => {
    try {
        const { _id } = req.params;
        const category = await Categories.findByIdAndDelete(_id);
        res.json({"status": true, "message" : category});
    }catch(err) {
        res.json({"status": false,"message" : err});
    }
}

// read one category
export const readCategory = async (req, res) => {
    try{
        const { _id } = req.params;
        const category = await Categories.findById(_id);
        res.json({"status": true, "message" : category});
    }catch(err) {
        res.json({"status": false,"message" : err});
    }
}

// read all categories 
export const readAllCategories = async (req, res) => {
    try{
        const categories = await Categories.find().sort({"createdAt" : -1});
        res.json({"status": true, "message" : categories});
    }catch(err) {
        res.json({"status": false,"message" : err});
    }
}

// read total number of categories
export const readTotalNumberOfCategories = async (req, res) => {
    try{
        const categories = await Categories.find().count();
        res.json({"status": true, "message" : categories});
    }catch(err){
        res.json({"status": false,"message" : err});
    }
}


// ============================= Products ==============================================

// add product
export const registerProduct = async (req , res) => {
    try {
        const product = await new Products(req.body).save();
        res.json({"status": true,"message" : product});
    } catch(err) {
        res.json({"status": false,"message" : err});
    }
}

// update product
export const updateProduct = async (req , res) => {
    try{
        const {_id , title , price , description , image , category} = req.body;
        const product = await Products.findByIdAndUpdate(_id , {title , price , description , image , category});
        res.json({"status": true, "message" : product});
    }catch(err) {
        res.json({"status": false, "message" : err});
    }
}

// delete product
export const deleteProduct = async (req , res) => {
    try{
        const  { _id }  = req.params;
        const product = await Products.findByIdAndDelete(_id);
        res.json({"status": true, "message" : product});
    }catch(err) {
        res.json({"status": false, "message" : err});
    }
}

// read one product
export const readProduct = async (req , res) => {
    try{
        const { _id } = req.params;
        const product = await Products.findById(_id);
        res.json({"status": true, "message" : product});
    }catch(err) {
        res.json({"status": false, "message" : err});
    }
}

// read all products
export const readAllProducts = async (req , res) => {
    try{
        const products = await Products.find().sort({"createdAt" : -1});
        res.json({"status": true, "message" : products});
    }catch(err) {
        res.json({"status": false, "message" : err});
    }
}

// read limited products
export const readLimitedProducts = async (req , res) => { 
    try {
        const {counter} = req.body;
        const products = await Products.find().sort({"createdAt" : -1}).limit(counter);
        res.json({"status": true, "message" : products});
    }catch(err) {
        res.json({"status": false, "message" : err});
    }
}

// read total number of products
export const readTotalNumberOfProduct = async (req , res) => {
    try{
        const products = await Products.find().count();
        res.json({"status": true, "message" : products});
    }catch(err) {
        res.json({"status": false, "message" : err});
    }
}


// ============================= Users ==========================================================

// add user
export const registerUser = async (req , res) => {
    try{
        const user = await new Users(req.body).save();
        res.json({"status": true, "message" : user});
    }catch(err) {
        res.json({"status": false, "message" : err});
    }
}

// read one user -- read by id
export const readUser = async (req , res) => {
    try {
        const { _id } = req.params;
        const user =  await Users.findById(_id);
        res.json({"status": true, "message" : user});
    }catch(err) {
        res.json({"status": false, "message" : err});
    }
}

// read one user -- read by username
export const readUserByUserName = async (req , res) => {
    try {
        const { username } = req.body;
        const user = await Users.findOne({username});
        if(user) return res.json({"status": true, "data" : "User Already is Registred" ,"message" : user});
        res.json({"status": true, "data" : "User Not Found" , "message" : user});
    }catch(err) {
        res.json({"status": false, "message" : err});
    } 
}

// read one user -- read by username and password
export const readUserByUserNameAndPassword = async (req , res) => {
    try {
        const { username , password } = req.body;
        const user = await Users.findOne({username , password});
        if(user) return res.json({"status": true, "message" : user});
        res.json({"status": true, "data" : "User Not Found" , "message" : user});
    }catch(err) {
        res.json({"status": false, "message" : err});
    }
}

// read all users
export const readAllUsers = async (req , res) => {
    try {
        const users = await Users.find();
        res.json({"status": true, "message" : users});
    }catch (err) {
        res.json({"status": false, "message" : err});
    }
}

// block user
export const blockUser = async (req , res) => {
    try {
        const { _id , status } = req.body;
        const user = await Users.findByIdAndUpdate(_id , {status});
        res.json({"status": true, "message" : user});
    }catch (err) {
        res.json({"status": false, "message" : err});
    }
}

// unblock user
export const unBlockUser = async (req, res) => {
    try{
        const { _id  , status } = req.body;
        const user = await Users.findByIdAndUpdate(_id , {status});
        res.json({"status": true, "message" : user});
    }catch (err) {
        res.json({"status": false, "message" : err});
    }
}

// delete user
export const deleteUser = async (req , res) => {
    try{
        const { _id } = req.params;
        const user = await Users.findByIdAndDelete(_id);
        res.json({"status": true, "message" : user});
    }catch(err) {
        res.json({"status": false, "message" : err});
    }
}

// forget password for user
export const sendForgetPsswordLink = async (req  , res) => {
    const { email } = req.body;

    try {
        const user = await Users.findOne({ email: email});
        if(!user) {
            return res.json({"status": false, "data" : "Email Not Exist" ,"mail" : email});
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            service: 'gmail',
            auth: {
                user: 'ahmad.abdallah.1400@gmail.com',
                pass: 'TCOS BML Y HAC R PUV R'
            }
        });

        const editedgmail = email.split('.');
        
        const mailOptions = {
            from: 'ahmad.abdallah.1400@gmail.com',
            to: email,
            subject: 'Forget Password',
            text: `http://localhost:5173/set-new-password/${editedgmail}`,
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.json({"status": true, "message" : `Forget Password Link has been send to ${email}`});
            }
        });

    }
    catch(err) {
        res.json({"status": false, "message" : err});
    }
}

// update password for user account
export const updateUserPassword = async (req, res) => {
    try {
        const { email , password } = req.body;
        const user = await Users.findOne({email});
        if(!user) {
            res.json({"status": false, "message" : "Invalid Email"});
        }

        const updatePassword = await Users.updateOne({ email: email }, { $set: { password: password } });
        if(updatePassword) {
            res.json({"status": true, "message" : "Password has been updated successfully..."});
        }
        else {
            res.json({"status": false, "message" : "Somthing wromg..."});
        }
    } catch(err) {
        res.json({"status": false, "message" : err});
    }
}

// read total number of users
export const readTotalNumbersOfusers = async (req, res) => {
    try{
        const users = await Users.find().count();
        res.status(200).json({"status": true, "message" : users});
    }catch(err) {
        res.json({"status": false, "message" : err});
    }
}
