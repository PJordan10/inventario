import { Router } from "express";
import { methodHTTP as empleadosController } from "../controllers/empleados.controllers.js";

/* crear el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get */
router.get("/", empleadosController.getEmpleados);

/* hacemos disponible router en toda la app */
export default router;