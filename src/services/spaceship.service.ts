import { dataSource } from "../config/orm.config";
import { SpaceshipCreateDto, SpaceshipDto } from "../dtos/spaceship.dto";
import { CinematicUniverse } from "../entities/cinematic-universe.entity";
import { Spaceship } from "../entities/spaceship.entity";
import spaceshipToDto from "../mappers/spaceship.mapper";

const getAll = async (): Promise<SpaceshipDto[]> => {
  const spaceships = await dataSource.manager.find(Spaceship, {
    relations: { cinematicUniverse: true },
  });
  return spaceships.map((spaceship) => spaceshipToDto(spaceship));
};

const getOne = async (id: number): Promise<SpaceshipDto | null> => {
  const spaceship = await dataSource.manager.findOne(Spaceship, {
    where: { id },
    relations: { cinematicUniverse: true },
  });
  return spaceship ? spaceshipToDto(spaceship) : null;
};

const createOne = async (
  data: SpaceshipCreateDto
): Promise<SpaceshipDto | null> => {
  const cinematicUniverse = await dataSource.manager.findOne(
    CinematicUniverse,
    { where: { id: data.cinematicUniverseId } }
  );

  if (cinematicUniverse) {
    const spaceship = await dataSource.manager.save(Spaceship, {
      name: data.name,
      class: data.class,
      capitan: data.capitan,
      cinematicUniverse: cinematicUniverse,
    });
    return spaceshipToDto(spaceship);
  } else {
    return null;
  }
};

const updateOne = async (
  id: number,
  data: SpaceshipCreateDto
): Promise<SpaceshipDto | null> => {
  const spaceship = await dataSource.manager.findOne(Spaceship, {
    where: { id },
    relations: { cinematicUniverse: true },
  });

  if (spaceship) {
    spaceship.name = data.name;
    spaceship.class = spaceship.class;
    spaceship.capitan = data.capitan;
    await dataSource.manager.save(spaceship);
    return spaceshipToDto(spaceship);
  } else {
    return null;
  }
};

const deleteOne = async (id: number): Promise<SpaceshipDto | null> => {
  const spaceship = await getOne(id);

  if (spaceship) {
    await dataSource.manager.delete(Spaceship, id);
    return spaceship;
  } else {
    return null;
  }
};

const isNameExist = async (
  name: string,
  cinematicUniverseId: number
): Promise<boolean> => {
  return await dataSource.manager.exists(Spaceship, {
    where: { name, cinematicUniverse: { id: cinematicUniverseId } },
    relations: { cinematicUniverse: true },
  });
};

export default { getAll, getOne, createOne, updateOne, deleteOne, isNameExist };
