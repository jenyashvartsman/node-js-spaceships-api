import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
} from "typeorm";
import { Spaceship } from "./spaceship.entity";

@Entity({ name: "cinematic_universe" })
@Unique(["name"])
export class CinematicUniverse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, unique: true })
  name: string;

  @OneToMany(() => Spaceship, (spaceship) => spaceship.cinematicUniverse)
  spaceships: Spaceship[];
}
