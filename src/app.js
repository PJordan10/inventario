/* importamos al framework express */
import express from "express";
import cors from "cors";
import categoriaRoutes from "./routes/categorias.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import productosRoutes from "./routes/productos.routes.js";

/* Asignamos a app toda funcionalidad para el server web */
const app = express();

/* setear un puerto al web server */
app.set("port", 5000);

app.use(express.json()); // habilitar el server para recibir json

app.use(cors()); // habilitar cors para que el cliente pueda acceder a la api

/* routes */
app.use("/api/categorias", categoriaRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/productos", productosRoutes);

/* hacemos disponible al server app para toda la aplicacion */
export default app;