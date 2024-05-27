import "reflect-metadata";
import { dataSource } from "./datasource";
import cors from "cors";
import { buildSchema } from "type-graphql";
import { TagsResolver } from "./resolvers/Tags";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { CocktailResolver } from "./resolvers/Cocktails";
import { CategoryResolver } from "./resolvers/Categories";
import express from "express";
import http from "http";
import { expressMiddleware } from "@apollo/server/express4";

export type ContextType = {
  req: any;
  res: any;
  // user?: User;
};

const start = async () => {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [TagsResolver, CocktailResolver, CategoryResolver],
    // authChecker: customAuthChecker,
  });

  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer<ContextType>({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(
    "/",
    cors<cors.CorsRequest>({
      credentials: true,
      origin: "http://localhost:3000",
    }),
    express.json({ limit: "50mb" }),
    expressMiddleware(server, {
      context: async (args) => {
        return {
          req: args.req,
          res: args.res,
        };
      },
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 5000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:5000/`);
};

start();
