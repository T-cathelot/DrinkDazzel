import "reflect-metadata";
import express from "express";
import { dataSource } from "./datasource";
import { CocktailsController } from "./controllers/Cocktails";
import { CategoriesController } from "./controllers/Categories";
import { TagsController } from "./controllers/Tags";
import cors from "cors";

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

const asyncController = (controller: Function) => {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      console.log(err, "Backend Error");
      res.status(500).send;
    }
  };
};

const cocktailsController = new CocktailsController();
app.get("/cocktails", asyncController(cocktailsController.getAll));
app.get("/cocktails/:id", asyncController(cocktailsController.getOne));
app.get("/cocktails/byTag/:id", asyncController(cocktailsController.getByTags));
app.post("/cocktails", asyncController(cocktailsController.createOne));
app.delete("/cocktails/:id", asyncController(cocktailsController.deleteOne));
app.patch("/cocktails/:id", asyncController(cocktailsController.patchOne));
app.put("/cocktails/:id", asyncController(cocktailsController.updateOne));

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

// app.use(
//   (
//     err: any,
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction
//   ) => {
//     console.error(err.stack);
//     res.status(500).send("Something broke!");
//   }
// );

app.listen(port, async () => {
  const time = new Date().toString();
  await dataSource.initialize();
  console.log(`Server ready on http://localhost:${port} 👽`);
  console.log(`at: ${time}`);
});
