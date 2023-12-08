import { dataSource } from "../config/orm.config";
import {
  CinematicUniverseCreateDto,
  CinematicUniverseDto,
} from "../dtos/cinematic-universe.dto";
import { CinematicUniverse } from "../entities/cinematic-universe.entity";
import cinematicUniverseToDto from "../mappers/cinematic-universe.mapper";

const getAll = async (): Promise<CinematicUniverseDto[]> => {
  const cinematicUniverses = await dataSource.manager.find(CinematicUniverse);
  return cinematicUniverses.map((cinematicUniverse) =>
    cinematicUniverseToDto(cinematicUniverse)
  );
};

const getOne = async (id: number): Promise<CinematicUniverseDto | null> => {
  const cinematicUniverse = await dataSource.manager.findOne(
    CinematicUniverse,
    { where: { id } }
  );
  return cinematicUniverse ? cinematicUniverseToDto(cinematicUniverse) : null;
};

const createOne = async (
  data: CinematicUniverseCreateDto
): Promise<CinematicUniverseDto> => {
  const newCinematicUniverse = await dataSource.manager.save(
    CinematicUniverse,
    { name: data.name }
  );
  return cinematicUniverseToDto(newCinematicUniverse);
};

const updateOne = async (
  id: number,
  data: CinematicUniverseCreateDto
): Promise<CinematicUniverseDto | null> => {
  const updateCinematicUniverse = await dataSource.manager.findOne(
    CinematicUniverse,
    { where: { id } }
  );

  if (updateCinematicUniverse) {
    updateCinematicUniverse.name = data.name;
    dataSource.manager.save(updateCinematicUniverse);
    return cinematicUniverseToDto(updateCinematicUniverse);
  } else {
    return null;
  }
};

const deleteOne = async (id: number): Promise<CinematicUniverseDto | null> => {
  const cinematicUniverse = await getOne(id);

  if (cinematicUniverse) {
    await dataSource.manager.delete(CinematicUniverse, id);
    return cinematicUniverse;
  } else {
    return null;
  }
};

const isNameExist = async (name: string): Promise<boolean> => {
  return await dataSource.manager.exists(CinematicUniverse, {
    where: { name },
  });
};

export default { getAll, getOne, createOne, updateOne, deleteOne, isNameExist };
