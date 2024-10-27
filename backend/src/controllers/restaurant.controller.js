// controllers/restaurant.controller.js
import Restaurant from '../models/restaurant.model.js';
import mongoose from "mongoose";

class RestaurantController { 
    // Método para obtener todos los restaurantes
    async allRestaurants(req, res) {
        try {
            const restaurants = await Restaurant.find();
            res.status(200).json(restaurants);
        } catch (error) {
            res.status(500).json({ message: 'Error obteniendo los restaurantes: ' + error.message });
        }
    }

     // Método para obtener restaurantes por categoría o nombre usando query
    async searchRestaurants(req, res) {
        try {
            const { category, name } = req.query;
            let filter = {};
            if (category) {
                filter.category = category;
            }
            if (name) {
                filter.name = { $regex: name, $options: 'i' };
            }
            const restaurants = await Restaurant.find(filter);
            res.status(200).json(restaurants);
        } catch (error) {
            res.status(500).json({ message: 'Error buscando restaurantes: ' + error.message });
        }
    }

    // Método para actualizar un restaurante por ID
    async updateRestaurant(req, res) {
        try {
            const { id } = req.params;
            const updatedData = req.body;

            // Verifica que el ID sea válido
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ message: 'ID inválido' });
            }

            const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, updatedData, {
                new: true,
                runValidators: true,
            });

            if (!updatedRestaurant) {
                return res.status(404).json({ message: 'Restaurante no encontrado' });
            }

            res.status(200).json(updatedRestaurant);
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el restaurante: ' + error.message });
        }
    }

}

export default new RestaurantController();
