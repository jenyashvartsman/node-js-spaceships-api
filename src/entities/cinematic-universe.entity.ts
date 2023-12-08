import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "cinematic_universe" })
@Unique(["name"])
export class CinematicUniverse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, unique: true })
  name: string;
}
