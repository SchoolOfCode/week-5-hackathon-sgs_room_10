import express from "express";
import { getRecipeById, getRecipes, 
    // getRecipeById, 
    // createRecipe,
    // updateRecipeById, 
    // deleteRecipeById, 
    } from "../controllers/recipes.js";
import app from "../app.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipeById);

export default router;





    