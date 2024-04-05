import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cocktail } from "./Cocktail";
import { Length } from "class-validator";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  @Length(5, 100)
  name!: string;

  @OneToMany(() => Cocktail, (cocktail) => cocktail.category)
  cocktail!: Cocktail[];
}
