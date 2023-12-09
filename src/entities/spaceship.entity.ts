import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { CinematicUniverse } from "./cinematic-universe.entity";

@Entity({ name: "spaceship" })
@Unique(["name"])
export class Spaceship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, unique: true })
  name: string;

  @Column({ length: 255 })
  class: string;

  @Column({ length: 255 })
  capitan: string;

  @ManyToOne(
    () => CinematicUniverse,
    (cinematicUniverse) => cinematicUniverse.spaceships
  )
  @JoinColumn({ name: "cinematic_universe_id" })
  cinematicUniverse: CinematicUniverse;
}
