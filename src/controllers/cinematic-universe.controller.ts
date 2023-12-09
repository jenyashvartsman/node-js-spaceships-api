import { Request, Response } from "express";
import cinematicUniverseService from "../services/cinematic-universe.service";
import { CinematicUniverseCreateDto } from "../dtos/cinematic-universe.dto";
import {
  createCinematicUniverseNameExistMessage,
  createCinematicUniverseNotFoundMessage,
} from "../utils/error.util";

const getAll = async (req: Request, res: Response): Promise<void> => {
  const cinematicUniverses = await cinematicUniverseService.getAll();
  res.status(200).json(cinematicUniverses);
};

const getOne = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const cinematicUniverse = await cinematicUniverseService.getOne(id);
  cinematicUniverse
    ? res.status(200).json(cinematicUniverse)
    : res.status(404).json(createCinematicUniverseNotFoundMessage(id));
};

const createOne = async (req: Request, res: Response): Promise<void> => {
  const data: CinematicUniverseCreateDto = req.body;

  const isNameExist = await cinematicUniverseService.isNameExist(data.name);
  if (isNameExist) {
    res.status(400).json(createCinematicUniverseNameExistMessage(data.name));
  } else {
    const cinematicUniverse = await cinematicUniverseService.createOne(data);
    res.status(200).json(cinematicUniverse);
  }
};

const updateOne = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const data: CinematicUniverseCreateDto = req.body;

  const isNameExist = await cinematicUniverseService.isNameExist(data.name);
  if (isNameExist) {
    res.status(400).json(createCinematicUniverseNameExistMessage(data.name));
  } else {
    const cinematicUniverse = await cinematicUniverseService.updateOne(
      id,
      data
    );
    cinematicUniverse
      ? res.status(200).json(cinematicUniverse)
      : res.status(404).json(createCinematicUniverseNotFoundMessage(id));
  }
};

const deleteOne = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const cinematicUniverse = await cinematicUniverseService.deleteOne(id);
  cinematicUniverse
    ? res.status(200).json(cinematicUniverse)
    : res.status(404).json(createCinematicUniverseNotFoundMessage(id));
};

export default { getAll, getOne, createOne, updateOne, deleteOne };
