// routes/cart.routes.js
import express from 'express';
import CartController from '../controllers/cart.controller.js';

const router = express.Router();

//para agregar un producto al carrito
router.post('/add', CartController.addToCart);
//para cambiar la cantidad del producto centro del carrito
router.put('/update', CartController.updateProductQuantity);
//para borrar un producto del carrito
router.delete('/:cid/products/:pid/delete', CartController.deleteProductFromCart);

export default router;
