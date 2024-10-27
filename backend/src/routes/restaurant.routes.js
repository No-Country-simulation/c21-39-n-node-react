import express from 'express';
import RestaurantController from '../controllers/restaurant.controller.js';

const router = express.Router();

// ruta para obtener todos los restaurant de la db
router.get('/', RestaurantController.allRestaurants);
// ruta para filtrar los restaurant por nombre o categoria
router.get('/search', RestaurantController.searchRestaurants);
// ruta para editar o actualizar el restaurant
router.put('/:id', RestaurantController.updateRestaurant);

export default router;
