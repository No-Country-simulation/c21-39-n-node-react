// ya configure la variable de entorno
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import configObject from './config/config.js';
import open from 'open';  // Importa el paquete open para abrir de una la pagina al iniciar
import userRoutes from './routes/user.routes.js';
import foodRoutes from './routes/food.routes.js';
import cartRoutes from './routes/cart.routes';
import restaurantRoutes from './routes/restaurant.routes.js';
import {MercadoPagoConfig, Preference} from "mercadopago";

const app = express();
const { mongo_url, puerto } = configObject;
// conexion a la base de datos [done mi cluster]
mongoose.connect(mongo_url)
    .then(() => console.log("Conexión exitosa!"))
    .catch((error) => console.log("Error en la conexión", error));

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/cart', cartRoutes);

//Para mercado pago // falta configuracion - con mp.
app.post("/create-preference", async (req, res) =>{
    try {
        const body ={
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS"
                }
            ],
            back_urls: {
                success: "http://www.mercadolibre.com.ar/",
                failure: "http://www.mercadolibre.com.ar/",
                pending: "http://www.mercadolibre.com.ar/"
            },
            auto_return: "approved",
        };
        const preference = new Preference(client);
        const result = await preference.create({body});
        res.json(
            {
                id: result.id
            }
        )
    } catch (error) {
        console.log(error)
        res.send("error");
    }
})

// Inicia el servidor y abre la página en el navegador
app.listen(puerto, async () => {
    console.log(`Servidor en funcionamiento en http://localhost:${puerto}`);
    await open(`http://localhost:${puerto}`);  // Abre la URL en el navegador
});
