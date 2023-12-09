export type SpaceshipDto = {
  id: number;
  name: string;
  class: string;
  capitan: string;
  cinematicUniverseId: number;
};

export type SpaceshipCreateDto = Omit<SpaceshipDto, "id">;
