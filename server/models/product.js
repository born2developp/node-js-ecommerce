import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    }
} , {timestamps : true});

const Products = mongoose.model('products', productSchema);

export default Products;