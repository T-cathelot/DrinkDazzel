import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Length } from "class-validator";
import { Cocktail } from "./Cocktail";

@Entity()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  @Length(3, 100)
  name!: string;

  @ManyToMany(() => Cocktail, (cocktail) => cocktail.tags)
  cocktails!: Cocktail[];
}
