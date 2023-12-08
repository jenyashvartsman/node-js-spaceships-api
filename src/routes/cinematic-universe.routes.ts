import express from "express";
import cinematicUniverseController from "../controllers/cinematic-universe.controller";

const router = express.Router();

router
  .get("/", cinematicUniverseController.getAll)
  .get("/:id", cinematicUniverseController.getOne)
  .post("/", cinematicUniverseController.createOne)
  .put("/:id", cinematicUniverseController.updateOne)
  .delete("/:id", cinematicUniverseController.deleteOne);

export default router;
