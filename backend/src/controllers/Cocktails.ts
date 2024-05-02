import { Controller } from ".";
import { Request, Response } from "express";
import { Cocktail } from "../entities/Cocktail";
import { validate } from "class-validator";
import { Tag } from "../entities/Tag";
import { In } from "typeorm";

export class CocktailsController extends Controller {
  getAll = async (req: Request, res: Response) => {
    const cocktails = await Cocktail.find({
      relations: {
        category: true,
        tags: true,
      },
    });
    res.send(cocktails);
  };

  getOne = async (req: Request, res: Response) => {
    const cocktail = await Cocktail.findOne({
      where: { id: Number(req.params.id) },
      relations: {
        category: true,
        tags: true,
      },
    });
    res.send(cocktail);
  };

  createOne = async (req: Request, res: Response) => {
    const newCocktail = new Cocktail();
    newCocktail.description = req.body.description;
    newCocktail.name = req.body.name;
    newCocktail.category = req.body.category;
    newCocktail.tags = req.body.tags;
    newCocktail.ingredients = req.body.ingredients;
    newCocktail.imgUrl = req.body.imgUrl;

    const errors = await validate(newCocktail);
    if (errors.length === 0) {
      await newCocktail.save();
      res.status(201).json({ id: newCocktail.id });
    } else {
      res.status(400).json({ errors: errors });
    }
  };

  deleteOne = async (req: Request, res: Response) => {
    const cocktail = await Cocktail.findOne({
      where: { id: Number(req.params.id) },
    });
    if (cocktail) {
      await cocktail.remove();
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  };

  patchOne = async (req: Request, res: Response) => {
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
  };
}
