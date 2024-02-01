import express from 'express';
import { userSign } from '../controllers/auth.js';

const router = express.Router();

router.post('/signin' , userSign);

export default router;
