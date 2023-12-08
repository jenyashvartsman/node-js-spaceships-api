import { Request, Response } from "express";
import spaceShipService from "../services/spaceship.service";

const getAll = async (req: Request, res: Response): Promise<void> => {
  const cinematicUniverses = await spaceShipService.getAll();
  res.status(200).json(cinematicUniverses);
};

const getOne = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const cinematicUniverse = await spaceShipService.getOne(id);
  res.status(200).json(cinematicUniverse);
};

const createOne = async (req: Request, res: Response): Promise<void> => {
  const data = req.body;
  const cinematicUniverse = await spaceShipService.createOne(data);
  res.status(200).json(cinematicUniverse);
};

const updateOne = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const data = req.body;
  const cinematicUniverse = await spaceShipService.updateOne(id, data);
  res.status(200).json(cinematicUniverse);
};

const deleteOne = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const cinematicUniverse = await spaceShipService.deleteOne(id);
  res.status(200).json(cinematicUniverse);
};

export default { getAll, getOne, createOne, updateOne, deleteOne };
