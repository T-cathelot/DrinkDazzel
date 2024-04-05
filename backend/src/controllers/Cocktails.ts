import { Controller } from ".";
import { Request, Response } from "express";
import { Cocktail } from "../entities/Cocktail";
import { validate } from "class-validator";
import { Tag } from "../entities/Tag";
import { In } from "typeorm";

export class CocktailsController extends Controller {
  getAll = async (req: Request, res: Response) => {
    try {
      const cocktails = await Cocktail.find({
        relations: {
          category: true,
          tags: true,
        },
      });
      res.send(cocktails);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  };

  getOne = async (req: Request, res: Response) => {
    try {
      const cocktail = await Cocktail.findOne({
        where: { id: Number(req.params.id) },
        relations: {
          category: true,
          tags: true,
        },
      });
      res.send(cocktail);
    } catch (err: any) {
      console.error(err);
      res.status(500).send();
    }
  };

  createOne = async (req: Request, res: Response) => {
    try {
      const newCocktail = new Cocktail();
      newCocktail.description = req.body.description;
      newCocktail.name = req.body.name;
      newCocktail.category = req.body.categoryId;
      newCocktail.tags = req.body.tagsId;
      newCocktail.ingredients = req.body.ingredients;

      const tagIds: number[] = req.body.tagsId;
      const tags = await Tag.find({
        where: {
          id: In(tagIds),
        },
      });

      newCocktail.tags = tags;

      const errors = await validate(newCocktail);
      if (errors.length === 0) {
        await newCocktail.save();
        res.send(newCocktail);
      } else {
        res.status(400).json({ errors: errors });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  };

  deleteOne = async (req: Request, res: Response) => {
    try {
      const cocktail = await Cocktail.findOne({
        where: { id: Number(req.params.id) },
      });
      if (cocktail) {
        await cocktail.remove();
        res.status(204).send();
      } else {
        res.status(404).send();
      }
    } catch (err: any) {
      console.error(err);
      res.status(500).send();
    }
  };

  patchOne = async (req: Request, res: Response) => {
    try {
      const cocktail = await Cocktail.findOne({
        where: { id: Number(req.params.id) },
      });

      if (cocktail) {
        Object.assign(cocktail, req.body, { id: cocktail.id });
        if (req.body.categoryId) {
          cocktail.category = req.body.categoryId;
        }
        const errors = await validate(cocktail);
        if (errors.length === 0) {
          await cocktail.save();
          res.status(204).send();
        } else {
          res.status(400).json({ errors: errors });
        }
      } else {
        res.status(404).send();
      }
    } catch (err: any) {
      console.error(err);
      res.status(500).send();
    }
  };
}
