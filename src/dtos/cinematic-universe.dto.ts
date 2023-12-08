export type CinematicUniverseDto = {
  id: number;
  name: string;
};

export type CinematicUniverseCreateDto = Omit<CinematicUniverseDto, "id">;
