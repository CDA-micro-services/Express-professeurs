import express from "express";
import ProfesseurController from "./Professeur.controller";
import ProfesseurService from "./Professeur.service";
import {professeurConnector} from "./Professeur.repository";

const service = new ProfesseurService(professeurConnector);
const controller = new ProfesseurController(service);

const router = express.Router();

router.get("/", controller.getAll);
router.get("/matiere/:matiere", controller.getByMatiere);
router.get("/:id", controller.getById);
router.post("/", controller.post);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
