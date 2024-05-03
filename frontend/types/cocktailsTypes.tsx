import { categoryType } from "./categoriesTypes";
import { TagArray } from "./tagsTypes";

export type CocktailProps = {
  id: number;
  link: string;
  imgUrl: string;
  name: string;
  description: string;
  ingredients: string;
  tags: TagArray[];
  category: categoryType;
};
