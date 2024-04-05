import "reflect-metadata";
import express from "express";
import { dataSource } from "./datasource";
import { CocktailsController } from "./controllers/Cocktails";
import { CategoriesController } from "./controllers/Categories";
import { TagsController } from "./controllers/Tags";

const app = express();
const port = 3000;
app.use(express.json());

const cocktailsController = new CocktailsController();
app.get("/cocktails", cocktailsController.getAll);
app.get("/cocktails/:id", cocktailsController.getOne);
app.post("/cocktails", cocktailsController.createOne);
app.delete("/cocktails/:id", cocktailsController.deleteOne);
app.patch("/cocktails/:id", cocktailsController.patchOne);
app.put("/cocktails/:id", cocktailsController.updateOne);

const categoriesController = new CategoriesController();
app.get("/categories", categoriesController.getAll);
app.get("/categories/:id", categoriesController.getOne);
app.post("/categories", categoriesController.createOne);
app.delete("/categories/:id", categoriesController.deleteOne);
app.patch("/categories/:id", categoriesController.patchOne);
app.put("/categories/:id", categoriesController.updateOne);

const tagsController = new TagsController();
app.get("/tags", tagsController.getAll);
app.get("/tags/:id", tagsController.getOne);
app.post("/tags", tagsController.createOne);
app.delete("/tags/:id", tagsController.deleteOne);
app.patch("/tags/:id", tagsController.patchOne);
app.put("/tags/:id", tagsController.updateOne);

app.listen(port, async () => {
  const time = new Date().toString();
  await dataSource.initialize();
  console.log(`Server ready on http://localhost:${port} 👽`);
  console.log(`at: ${time}`);
});
