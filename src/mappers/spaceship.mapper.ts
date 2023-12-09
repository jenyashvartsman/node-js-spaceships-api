import { SpaceshipDto } from "../dtos/spaceship.dto";
import { Spaceship } from "../entities/spaceship.entity";

const spaceshipToDto = (entity: Spaceship): SpaceshipDto => {
  return {
    id: entity.id,
    name: entity.name,
    class: entity.class,
    capitan: entity.capitan,
    cinematicUniverseId: entity.cinematicUniverse.id,
  };
};

export default spaceshipToDto;
