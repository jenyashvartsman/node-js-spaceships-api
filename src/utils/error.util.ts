import { ErrorDto } from "../dtos/error.dto";

const createCinematicUniverseNotFoundMessage = (id: number): ErrorDto => {
  return { message: `Cinematic universe with id '${id}' was not found` };
};

const createCinematicUniverseNameExistMessage = (name: string): ErrorDto => {
  return {
    message: `Cinematic universe with the name '${name}' already exist`,
  };
};

const createSpaceshipNotFoundMessage = (id: number): ErrorDto => {
  return { message: `Spaceship with id '${id}' was not found` };
};

const createSpaceshipNameExistMessage = (name: string): ErrorDto => {
  return {
    message: `Spaceship with the name '${name}' already exist for this cinematic universe`,
  };
};

export {
  createCinematicUniverseNotFoundMessage,
  createCinematicUniverseNameExistMessage,
  createSpaceshipNotFoundMessage,
  createSpaceshipNameExistMessage,
};
