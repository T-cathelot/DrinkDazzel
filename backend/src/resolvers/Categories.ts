import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { Category, CategoryCreateInput } from "../entities/Category";
import { validate } from "class-validator";

@Resolver(Category)
export class CategoryResolver {
  @Query(() => [Category])
  async allCategories(): Promise<Category[]> {
    const category = Category.find({
      relations: { cocktail: true },
    });
    return category;
  }

  @Query(() => Category, { nullable: true })
  async category(@Arg("id", () => ID) id: number): Promise<Category | null> {
    const category = await Category.findOne({
      where: { id: id },
    });
    return category;
  }

  @Mutation(() => Category)
  async createCategories(
    @Arg("data", () => CategoryCreateInput) data: CategoryCreateInput
  ): Promise<Category> {
    const newCategories = new Category();
    Object.assign(newCategories, data);

    const errors = await validate(newCategories);
    if (errors.length === 0) {
      await newCategories.save();
      return newCategories;
    } else {
      throw new Error(`Error occured: ${JSON.stringify(errors)}`);
    }
  }

  @Mutation(() => Category, { nullable: true })
  async deleteCategories(
    @Arg("id", () => ID) id: number
  ): Promise<Category | null> {
    const category = await Category.findOne({ where: { id: id } });
    if (category) {
      await category.remove();
      category.id = id;
    }
    return category;
  }
}
