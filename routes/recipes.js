import express from "express";
import { getRecipes, 
    // getRecipeById, 
    // createRecipe,
    // updateRecipeById, 
    // deleteRecipeById, 
    } from "../controllers/recipes.js";
import app from "../app.js";

const router = express.Router();

router.get("/", getRecipes);

export default router;





    