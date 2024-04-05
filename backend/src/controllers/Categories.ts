import { Controller } from ".";
import { Request, Response } from "express";
import { Category } from "../entities/Category";
import { validate } from "class-validator";

export class CategoriesController extends Controller {
  getAll = async (req: Request, res: Response) => {
    Category.find()
      .then((categories) => {
        res.send(categories);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send();
      });
  };

  getOne = async (req: Request, res: Response) => {
    try {
      const cocktails = await Category.findOne({
        where: { id: Number(req.params.id) },
      });
      res.send(cocktails);
    } catch (err: any) {
      console.error(err);
      res.status(500).send();
    }
  };

  createOne = async (req: Request, res: Response) => {
    try {
      const newCategory = new Category();
      newCategory.name = req.body.name;

      const errors = await validate(newCategory);
      if (errors.length === 0) {
        await newCategory.save();
        res.send(newCategory);
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
      const cocktails = await Category.findOne({
        where: { id: Number(req.params.id) },
      });
      if (cocktails) {
        await cocktails.remove();
        res.status(204).send();
      } else {
        res.status(404).send();
      }
    } catch (err: any) {
      // typeguards
      console.error(err);
      res.status(500).send();
    }
  };

  patchOne = async (req: Request, res: Response) => {
    try {
      const cocktails = await Category.findOne({
        where: { id: Number(req.params.id) },
      });

      if (cocktails) {
        Object.assign(cocktails, req.body, { id: cocktails.id });
        const errors = await validate(cocktails);
        if (errors.length === 0) {
          await cocktails.save();
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
