import express from "express";
import { getRecipes,
    getRecipeById, 
    createRecipe,
    updateRecipeById, 
    deleteRecipeById,
    getRecipeAndCuisinebyId
    } from "../controllers/recipes.js";
import app from "../app.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.post("/", createRecipe);
router.patch("/:id", updateRecipeById);
router.delete("/:id", deleteRecipeById);
router.get("/:id/cuisines", getRecipeAndCuisinebyId)

export default router;
