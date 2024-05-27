import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Length } from "class-validator";

import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Cocktail } from "./Cocktail";

@Entity()
@ObjectType()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Length(3, 100)
  @Field()
  name!: string;

  @ManyToMany(() => Cocktail, (cocktails) => cocktails.tags)
  @Field(() => [Cocktail])
  ads!: Cocktail[];
}

@InputType()
export class TagCreateInput extends BaseEntity {
  @Field()
  name!: string;
}
