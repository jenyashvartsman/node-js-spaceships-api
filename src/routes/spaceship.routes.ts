import express from "express";
import spaceShipController from "../controllers/spaceship.controller";

const router = express.Router();

router
  .get("/", spaceShipController.getAll)
  .get("/:id", spaceShipController.getOne)
  .post("/", spaceShipController.createOne)
  .put("/:id", spaceShipController.updateOne)
  .delete("/:id", spaceShipController.deleteOne);

export default router;
