// routes/cart.routes.js
import express from 'express';
import CartController from '../controllers/cart.controller.js';

const router = express.Router();

router.post('/add', CartController.addToCart);
router.put('/update', CartController.updateProductQuantity);

export default router;
