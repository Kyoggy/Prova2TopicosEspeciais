import { Router } from "express";
import { DespesaController } from "../controllers/despesa.controller";

const router: Router = Router();

router.post("/", new DespesaController().cadastrar);
router.get("/", new DespesaController().listar);
router.get("/total", new DespesaController().total);

export { router };
