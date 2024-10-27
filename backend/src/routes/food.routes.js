import express from "express";
import FoodController from "../controllers/food.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

// Ruta para obtener todos los productos de comida
router.get("/", FoodController.allFoods);
// Ruta para buscar productos de comida por categoría o nombre --> usa query pero no se si cambiarlo a params...AGREGO PROTECT Y authorizeRoles
router.get(
  "/search", 
  FoodController.searchFood
);
// Ruta para agregar comida --> falta agregar un filtro paraque solo acceda un cliente que sea vendedor, para limitar la vista
router.post(
  "/add",
  FoodController.addFood
);
// Ruta para actualizar los datos de un producto de un restaurante específico por id de resto y id de comida
router.put('/restaurants/:restaurantId/foods/:foodId', FoodController.updateFood);

export default router;
