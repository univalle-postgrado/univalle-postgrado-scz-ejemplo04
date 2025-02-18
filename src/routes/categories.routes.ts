import * as express from "express";
import { CategoriesController } from "../controllers/categories.controller";

const Router = express.Router();

// registramos rutas routes
Router.get("/categories", CategoriesController.index)
Router.post("/categories", CategoriesController.create)
Router.get("/categories/:id", CategoriesController.read)
Router.put("/categories/:id", CategoriesController.update)
Router.patch("/categories/:id", CategoriesController.patch)
Router.delete("/categories/:id", CategoriesController.delete)

export { Router as CategoriesRouter };