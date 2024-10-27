// controllers/cart.controller.js
import Cart from '../models/cart.model.js';

class CartController {
    // para agregar un producto al carrito
    async addToCart(req, res) {
        const { userId, foodId, quantity = 1 } = req.body;

        try {
            let cart = await Cart.findOne({ userId });
            if (!cart) {
                cart = new Cart({ userId, order: [{ food: foodId, quantity }] });
            } else {
                const itemIndex = cart.order.findIndex(item => item.food.equals(foodId));
                if (itemIndex > -1) {
                    cart.order[itemIndex].quantity += quantity;
                } else {
                    cart.order.push({ food: foodId, quantity });
                }
            }
            await cart.save();
            res.status(200).json({ message: 'Comida añadida al carrito', cart });
        } catch (error) {
            res.status(500).json({ message: 'Error al añadir comida al carrito', error: error.message });
        }
    }

    // Método para actualizar la cantidad de un producto en el carrito
    async updateProductQuantity(req, res) {
        const { cartId, foodId, quantity } = req.body;
        try {
            const cart = await Cart.findById(cartId);
            if (!cart) {
                return res.status(404).json({ message: 'Carrito no encontrado' });
            }
            const itemIndex = cart.order.findIndex(item => item.food.equals(foodId));
            if (itemIndex > -1) {
                cart.order[itemIndex].quantity = quantity;
                await cart.save();
                res.status(200).json({ message: 'Cantidad del producto actualizada', cart });
            } else {
                res.status(404).json({ message: 'Producto no encontrado en el carrito' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar la cantidad del producto', error: error.message });
        }
    }

    //método para borrar un producto de un carrito
    async deleteProductFromCart(req, res) {
        const { cid, pid } = req.params;
        try {
            await cartService.removeProductFromCart(cid, pid);
            res.status(200).json({ message: 'Producto eliminado del carrito' });
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el producto', error });
        }
    }
}

export default new CartController();

