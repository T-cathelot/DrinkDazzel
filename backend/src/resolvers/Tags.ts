import { Tag } from "../entities/Tag";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { validate } from "class-validator";

@Resolver(Tag)
export class TagsResolver {
  @Query(() => [Tag])
  async allTags(): Promise<Tag[]> {
    return Tag.find();
  }

  @Mutation(() => Tag)
  async createTag(@Arg("name") name: string): Promise<Tag> {
    const newTag = new Tag();
    newTag.name = name;

    const errors = await validate(newTag);
    if (errors.length === 0) {
      await newTag.save();
      return newTag;
    } else {
      throw new Error(`Error creatign tag : ${errors}`);
    }
  }
}
