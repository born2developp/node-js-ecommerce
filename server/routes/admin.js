import express from 'express';
import 
{ 
    registerCategory,
    updateCategory,
    deleteCategory,
    readCategory,
    readAllCategories,
    readTotalNumberOfCategories,
    registerProduct, 
    updateProduct, 
    deleteProduct, 
    readProduct, 
    readAllProducts,
    readLimitedProducts,
    readTotalNumberOfProduct,
    registerUser,
    readUser,
    readUserByUserName,
    readUserByUserNameAndPassword,
    readAllUsers,
    blockUser,
    unBlockUser,
    deleteUser,
    readTotalNumbersOfusers,
    sendForgetPsswordLink,
    updateUserPassword
} from '../controllers/admin.js';


const router = express.Router();

// category routes
router.post('/register-category' , registerCategory);
router.post('/update-category' , updateCategory);
router.delete('/delete-category/:_id' , deleteCategory);
router.get('/read-category/:_id' , readCategory);
router.get('/read-all-categories' , readAllCategories);
router.get('/read-total-number-of-categories' , readTotalNumberOfCategories);

// product routes
router.post('/register-product' , registerProduct);
router.post('/update-product' , updateProduct);
router.delete('/delete-product/:_id', deleteProduct);
router.get('/read-product/:_id' , readProduct);
router.get('/read-all-products' , readAllProducts);
router.post('/get-limited-products' , readLimitedProducts);
router.get('/read-total-number-of-product' , readTotalNumberOfProduct);

// user routes
router.post('/register-user' , registerUser);
router.get('/read-user/:_id' , readUser);
router.post('/read-user-by-username' , readUserByUserName);
router.post('/read-user-by-username-and-password' , readUserByUserNameAndPassword);
router.get('/read-all-users' , readAllUsers);
router.post('/block-user' , blockUser);
router.post('/unblock-user' , unBlockUser);
router.delete('/delete-user/:_id' , deleteUser);
router.get('/read-total-number-of-users' , readTotalNumbersOfusers);
router.post('/send-forget-password-email', sendForgetPsswordLink);
router.post('/update-user-password', updateUserPassword);

export default router;

