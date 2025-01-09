import express from "express";
import { getRecipeById, getRecipes, 
    // getRecipeById, 
    createRecipe,
    // updateRecipeById, 
    // deleteRecipeById, 
    } from "../controllers/recipes.js";
import app from "../app.js";

const router = express.Router();

router.get("/", getRecipes);
10-finish-createrecipe-function
router.post("/", createRecipe);
router.get("/:id", getRecipeById);
main

export default router;





    