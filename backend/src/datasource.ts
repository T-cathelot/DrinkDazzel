import { DataSource } from "typeorm";
import { Category } from "./entities/Category";
import { Cocktail } from "./entities/Cocktail";
import { Tag } from "./entities/Tag";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./ShakeShare.sqlite",
  entities: [Category, Cocktail, Tag],
  synchronize: true,
  logging: true,
});
