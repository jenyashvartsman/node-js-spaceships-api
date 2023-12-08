import { CinematicUniverseDto } from "../dtos/cinematic-universe.dto";
import { CinematicUniverse } from "../entities/cinematic-universe.entity";

const cinematicUniverseToDto = (
  entity: CinematicUniverse
): CinematicUniverseDto => {
  return {
    id: entity.id,
    name: entity.name,
  };
};

export default cinematicUniverseToDto;
