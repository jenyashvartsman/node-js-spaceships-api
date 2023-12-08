import { ErrorDto } from "../dtos/error.dto";

const createNotFoundMessage = (id: number): ErrorDto => {
  return { message: `Cinematic universe with id '${id}' was not found` };
};

const createNameExistMessage = (name: string): ErrorDto => {
  return {
    message: `Cinematic universe with the name '${name}' already exist`,
  };
};

export { createNotFoundMessage, createNameExistMessage };
