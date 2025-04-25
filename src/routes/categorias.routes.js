import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

/* crear el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get */
router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.postCategorias);
router.get("/:id", categoriaController.getCategory); // obtener una categoria por id
router.delete("/:id", categoriaController.deleteCategory); // eliminar una categoria por id
router.put("/:id", categoriaController.updateCategorias); // actualizar una categoria por id

/* hacemos disponible router en toda la app */
export default router;