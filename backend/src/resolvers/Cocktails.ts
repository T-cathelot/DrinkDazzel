import {
  Arg,
  Authorized,
  Ctx,
  ID,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import {
  Cocktail,
  CocktailCreateInput,
  CocktailUpdateInput,
  CocktailWhere,
} from "../entities/Cocktail";
import { validate } from "class-validator";
//   import { merge } from "../utils";
import { In, LessThanOrEqual, Like, MoreThanOrEqual } from "typeorm";

@Resolver(Cocktail)
export class CocktailResolver {
  @Query(() => [Cocktail])
  async allCocktails(
    @Ctx() context: { req: any; res: any },
    @Arg("where", { nullable: true })
    where?: CocktailWhere,
    @Arg("take", () => Int, { nullable: true }) take?: number,
    @Arg("skip", () => Int, { nullable: true }) skip?: number
  ): Promise<Cocktail[]> {
    const queryWhere: any = {};

    if (where?.categories) {
      queryWhere.categories = { id: In(where.categories) };
    }

    if (where?.searchName) {
      queryWhere.name = Like(`%${where.searchName}%`);
    }

    /* const order: any = {};
      if (
        typeof req.query.orderByTitle === "string" &&
        ["ASC", "DESC"].includes(req.query.orderByTitle)
      ) {
        order.title = req.query.orderByTitle; // req.query.orderByTitle = ASC | DESC
      }
  
      if (
        typeof req.query.orderByPrice === "string" &&
        ["ASC", "DESC"].includes(req.query.orderByPrice)
      ) {
        order.price = req.query.orderByPrice; // req.query.orderByTitle = ASC | DESC
      } */

    const cocktails = await Cocktail.find({
      take: take ?? 50,
      skip,
      where: queryWhere,
      //order,
      relations: {
        categories: true,
        tags: true,
        //   createdBy: true,
      },
    });
    return cocktails;
  }

  @Query(() => Int)
  async allCocktailsCount(
    @Arg("where", { nullable: true }) where?: CocktailWhere
  ): Promise<number> {
    const queryWhere: any = {};

    if (where?.categories) {
      queryWhere.categories = { id: In(where.categories) };
    }

    if (where?.searchName) {
      queryWhere.name = Like(`%${where.searchName}%`);
    }

    /* const order: any = {};
      if (
        typeof req.query.orderByTitle === "string" &&
        ["ASC", "DESC"].includes(req.query.orderByTitle)
      ) {
        order.title = req.query.orderByTitle; // req.query.orderByTitle = ASC | DESC
      }
  
      if (
        typeof req.query.orderByPrice === "string" &&
        ["ASC", "DESC"].includes(req.query.orderByPrice)
      ) {
        order.price = req.query.orderByPrice; // req.query.orderByTitle = ASC | DESC
      } */

    const count = await Cocktail.count({
      where: queryWhere,
    });
    return count;
  }

  // @Authorized()
  @Query(() => Cocktail, { nullable: true })
  async Cocktail(@Arg("id", () => ID) id: number): Promise<Cocktail | null> {
    const ad = await Cocktail.findOne({
      where: { id: id },
      relations: { categories: true, tags: true },
    });

    return ad;
  }

  // @Authorized()
  @Mutation(() => Cocktail)
  async createCocktail(
    @Ctx() context: any,
    @Arg("data", () => CocktailCreateInput) data: CocktailCreateInput
  ): Promise<Cocktail> {
    const newAds = new Cocktail();
    Object.assign(newAds, data, {
      createdBy: context.user,
    });

    const errors = await validate(newAds);
    if (errors.length === 0) {
      await newAds.save();
      return newAds;
    } else {
      throw new Error(`Error occured: ${JSON.stringify(errors)}`);
    }
  }

  // @Authorized()
  // @Mutation(() => Cocktail, { nullable: true })
  // async updateAds(
  //   @Ctx() context: any,
  //   @Arg("id", () => ID) id: number,
  //   @Arg("data") data: CocktailUpdateInput
  // ): Promise<Cocktail | null> {
  //   const ad = await Cocktail.findOne({
  //     where: { id: id },
  //     relations: { tags: true,
  //         //  createdBy: true
  //          },
  //   });

  //   console.log("User in context:", context.user);

  //   if (ad && ad.createdBy.id === context.user?.id) {
  //     merge(ad, data);
  //     const errors = await validate(ad);
  //     if (errors.length === 0) {
  //       await Ads.save(ad);
  //       return await Ads.findOne({
  //         where: { id: id },
  //         relations: {
  //           categories: true,
  //           tags: true,
  //         },
  //       });
  //     } else {
  //       throw new Error(`Error occured: ${JSON.stringify(errors)}`);
  //     }
  //   } else {
  //     return null;
  //   }
  // }

  @Query(() => [Cocktail])
  async getCocktailByTag(
    @Arg("tagId", () => ID) tagId: number
  ): Promise<Cocktail[]> {
    const cocktail = await Cocktail.find({
      where: {
        tags: {
          id: tagId,
        },
      },
      relations: { tags: true, categories: true },
    });
    if (!cocktail) {
      throw new Error("Pas de cocktail liée à ce'tagId'");
    }
    return cocktail;
  }

  @Mutation(() => Cocktail, { nullable: true })
  async deleteCocktail(
    @Arg("id", () => ID) id: number
  ): Promise<Cocktail | null> {
    const cocktail = await Cocktail.findOne({ where: { id: id } });
    if (cocktail) {
      await cocktail.remove();
      cocktail.id = id;
    }
    return cocktail;
  }
}
