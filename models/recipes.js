import { pool } from "../db/index.js";

export async function fetchAllRecipes() {
     const all_recipes = await pool.query("SELECT * FROM recipes;");
return all_recipes.rows;
}

export async function fetchRecipeById(id) {
     const fetchRecipeID = await pool.query("SELECT * FROM recipes WHERE id = $1;" [id]);
     return fetchRecipeID.rows[0] || null;
}

export async function insertRecipe(recipe_name, ingredients, method) {
    const insertRecipe = await pool.query("INSERT INTO recipes (recipe_name, ingredients, method) VALUES ($1, $2, $3);" [recipe_name, ingredients, method]);
    return insertRecipe.rows[0];
}

export async function modifyAuthorById(id, first_name, last_name) {}

export async function removeAuthorById(id) {}