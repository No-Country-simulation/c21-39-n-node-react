#FoodDelivery

## Tabla de Contenidos
1. [Requisitos Previos](#requisitos-previos)
2. [Instalación](#instalación)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [API Endpoints](#api-endpoints)
6. [Licencia](#licencia)


### Requisitos Previos
- **Node.js** v14 o superior
- **Dependencias** solo ingresar en consola `npm install`.

### Instalación
Clona el repositorio y ejecuta el siguiente comando para instalar las dependencias:
```bash
git clone https://github.com/No-Country-simulation/c21-39-n-node-react.git
cd backend
npm install
```

### Estructura del Proyecto 
- **Backend**: Contiene la lógica de negocio y la API RESTful.
    - `src/` - Carpeta principal de código fuente
        - `controllers/` - Controladores de lógica de negocio
        - `models/` - Modelos de base de datos
        - `routes/` - Rutas de la API
        - `middleware/` - Middlewares de autenticación y validación
        - `config/` - Configuraciones generales
        - `utils/` - Utilidades y funciones auxiliares

### API Endpoints

#### user
----
- **POST api/users/register**: Crea un nuevo usuario
- **POST api/users/login**: Inicia sesión con un usuario existente
----
#### food
----
- **GET api/foods**: Obtiene la lista de platos disponibles
- **POST api/foods/add**: Crea un nuevo plato
- **GET api/foods/search**: Para buscar productos de comida por categoria o nombre
- **PUT api/foods/restaurants/:restaurantId/foods/:foodId**: Para actualizar los datos de un plato de un restaurante especifico.
-----
#### restaurant
-----
- **GET api/restaurants**: Obtiene la lista de restaurantes disponibles
- **POST api/restaurants/search**: Busca un restaurant por nombre o categoria
- **PUT api/restaurants/:id**: para editar el resto de un id especifico
-----

### Licencia

Este proyecto es de código abierto y se distribuye bajo la Licencia MIT. Puedes usar, modificar y distribuir el código según los términos de esta licencia.

Consulta el archivo [LICENSE](./LICENSE) para obtener más detalles.








