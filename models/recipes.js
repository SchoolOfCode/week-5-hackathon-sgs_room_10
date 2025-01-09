import { pool } from "../db/index.js";

export async function fetchAllRecipes() {
     const all_recipes = await pool.query("SELECT * FROM recipes;");
return all_recipes.rows;
}

export async function fetchRecipeById(id) {
     const fetchRecipeID = await pool.query("SELECT * FROM recipes WHERE id = $1;" [id]);
     return fetchRecipeID.rows[0] || null;
}

export async function insertRecipe(title, ingredients, directions) {
    const insertRecipe = await pool.query(
        "INSERT INTO recipes (title, ingredients, directions) VALUES ($1, $2, $3) RETURNING *;", 
        [title, ingredients, directions]
    );
    return insertRecipe.rows[0];
}

export async function modifyRecipeById(id, first_name, last_name) {}

export async function removeRecipeById(id) {}
