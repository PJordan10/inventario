import { Router } from "express";
import { methodHTTP as clienteController } from "../controllers/clientes.controllers.js";

const router = Router();

router.get("/", clienteController.getClientes); // obtener todos los clientes
router.post("/", clienteController.postClientes); // crear un cliente

export default router;