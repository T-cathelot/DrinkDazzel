import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";
import { Length } from "class-validator";
import { Tag } from "./Tag";

@Entity()
export class Cocktail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  @Length(5, 100)
  name!: string;

  @Column({ length: 100 })
  description!: string;

  @Column({ length: 100 })
  ingredients!: string;

  @ManyToOne(() => Category, (category) => category.cocktail)
  category!: Category;

  @ManyToMany(() => Tag, (tag) => tag.cocktails)
  @JoinTable()
  tags!: Tag[];
}
