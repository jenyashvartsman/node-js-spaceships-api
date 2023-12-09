import { Request, Response } from "express";
import spaceShipService from "../services/spaceship.service";
import {
  createCinematicUniverseNotFoundMessage,
  createSpaceshipNameExistMessage,
  createSpaceshipNotFoundMessage,
} from "../utils/error.util";
import { SpaceshipCreateDto } from "../dtos/spaceship.dto";
import cinematicUniverseService from "../services/cinematic-universe.service";

const getAll = async (req: Request, res: Response): Promise<void> => {
  const spaceships = await spaceShipService.getAll();
  res.status(200).json(spaceships);
};

const getOne = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const spaceship = await spaceShipService.getOne(id);
  spaceship
    ? res.status(200).json(spaceship)
    : res.status(404).json(createSpaceshipNotFoundMessage(id));
};

const createOne = async (req: Request, res: Response): Promise<void> => {
  const data: SpaceshipCreateDto = req.body;

  const isNameExist = await spaceShipService.isNameExist(
    data.name,
    data.cinematicUniverseId
  );

  const isCinematicUniverseIdExist = await cinematicUniverseService.isIdExist(
    data.cinematicUniverseId
  );

  if (isNameExist) {
    res.status(400).json(createSpaceshipNameExistMessage(data.name));
  } else if (!isCinematicUniverseIdExist) {
    res
      .status(400)
      .json(createCinematicUniverseNotFoundMessage(data.cinematicUniverseId));
  } else {
    const spaceship = await spaceShipService.createOne(data);
    res.status(200).json(spaceship);
  }
};

const updateOne = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const data: SpaceshipCreateDto = req.body;

  const isNameExist = await spaceShipService.isNameExist(
    data.name,
    data.cinematicUniverseId
  );
  if (isNameExist) {
    res.status(400).json(createSpaceshipNameExistMessage(data.name));
  } else {
    const cinematicUniverse = await spaceShipService.updateOne(id, data);
    cinematicUniverse
      ? res.status(200).json(cinematicUniverse)
      : res.status(404).json(createSpaceshipNotFoundMessage(id));
  }
};

const deleteOne = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const spaceship = await spaceShipService.deleteOne(id);
  spaceship
    ? res.status(200).json(spaceship)
    : res.status(404).json(createSpaceshipNotFoundMessage(id));
};

export default { getAll, getOne, createOne, updateOne, deleteOne };
