import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { IsInt, Length, ValidateIf } from "class-validator";
import { Category } from "./Category";
import { Tag } from "./Tag";
import { Field, ID, InputType, Int, ObjectType } from "type-graphql";
// import { User } from "./User";

@Entity()
@ObjectType()
export class Cocktail extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Length(3, 100)
  @Field()
  name!: string;

  @Column()
  @Field()
  ingredients!: string;

  @Column({ nullable: true })
  @Field()
  imgUrl!: string;

  @Column({ nullable: true })
  @Length(0, 5000)
  @ValidateIf((object, value) => !!value)
  @Field()
  description!: string;

  @ManyToOne(() => Category, (categories) => categories.cocktail)
  @Field(() => Category, { nullable: true })
  categories!: Category;

  @ManyToMany(() => Tag, (tag) => tag.ads)
  @JoinTable()
  @Field(() => [Tag], { nullable: true })
  tags!: Tag[];

  @CreateDateColumn()
  @Field()
  createdAt!: Date;

  // @ManyToOne(() => User, (user) => user.ads)
  // @Field(() => User)
  // createdBy!: User;

  // @ManyToOne(() => User, (user) => user.ads)
  // @Field(() => User)
  // createdBy!: User;
}

@InputType()
export class ObjectId {
  @Field(() => ID)
  id!: number;
}

@InputType()
export class CocktailCreateInput {
  @Field()
  name!: string;

  @Field({ nullable: true })
  imgUrl!: string;

  @Field({ nullable: true })
  description!: string;

  @Field({ nullable: true })
  ingredients!: string;

  @Field({ nullable: true })
  categories!: ObjectId;

  @Field(() => [ObjectId], { nullable: true })
  tags!: ObjectId[];
}

@InputType()
export class CocktailUpdateInput {
  @Field()
  name!: string;

  @Field({ nullable: true })
  imgUrl!: string;

  @Field({ nullable: true })
  description!: string;

  @Field({ nullable: true })
  ingredients!: string;

  @Field({ nullable: true })
  categories!: ObjectId;

  @Field(() => [ObjectId], { nullable: true })
  tags!: ObjectId[];
}

@InputType()
export class CocktailWhere {
  @Field(() => [ID], { nullable: true })
  categories?: number[];

  @Field(() => String, { nullable: true })
  searchName?: string;
}
