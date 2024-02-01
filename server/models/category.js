import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    title : {
        type : String
    },
    image:{
        type : String
    }
}, {timestamps : true});

const Categories = mongoose.model('categories' , categorySchema);

export default Categories;