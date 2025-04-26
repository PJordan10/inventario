import { Router } from "express";
import { methodHTTP as productoController } from "../controllers/productos.controllers.js";

const router = Router();

router.get("/", productoController.getProductos); // obtener todos los productos
router.put("/:id", productoController.updateProductos); // actualizar un producto por id

export default router;