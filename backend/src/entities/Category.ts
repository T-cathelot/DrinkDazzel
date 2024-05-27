import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Length, Min } from "class-validator";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Cocktail } from "./Cocktail";

@Entity()
@ObjectType()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;
  @Column()
  @Length(5, 20)
  @Field()
  name!: string;

  @Column({ nullable: true })
  @Field()
  link!: string;

  @OneToMany(() => Cocktail, (cocktail) => cocktail.categories)
  @Field(() => [Cocktail])
  cocktail!: Cocktail[];
}

@InputType()
export class CategoryCreateInput extends BaseEntity {
  @Field()
  name!: string;
}
