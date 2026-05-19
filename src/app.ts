import express from "express";
import cors from "cors";
import router from "./routes";

export function buildApp() {
  const app = express();

  app.disable("x-powered-by");

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

  app.use((request, _, next) => {
    console.log(
      `[${new Date().toISOString()}] ${request.method} ${request.url}`
    );

    next();
  });

  app.get("/", (_, response) => {
    return response.status(200).json({
      project: "Champions League API",
      version: "2.0.0",
      status: "online",
    });
  });

  app.use("/api/v1", router);

  return app;
}
