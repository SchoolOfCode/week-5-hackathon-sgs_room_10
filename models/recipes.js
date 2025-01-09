import { pool } from "../db/index.js";

export async function fetchAllRecipes() {
     const all_recipes = await pool.query("SELECT * FROM recipes;");
return all_recipes.rows;
}

export async function fetchRecipeById(id) {
     const fetchRecipeID = await pool.query("SELECT * FROM recipes WHERE id = $1;", [id]);
     return fetchRecipeID.rows[0] || null;
}

export async function insertRecipe(title, ingredients, directions) {
    const insertRecipe = await pool.query(
        "INSERT INTO recipes (title, ingredients, directions) VALUES ($1, $2, $3) RETURNING *;", 
        [title, ingredients, directions]
    );
    return insertRecipe.rows[0];
}

let apple = 1;


export async function modifyRecipeById(id, recipe_name, ingredients, directions,link, source, ner, site) {
     const modifyRecipe = await pool.query("UPDATE recipes SET title = $1, ingredients = $2, directions = $3, link = $4, source = $5, ner = $6, site = $7 WHERE id = $8 RETURNING *;", [recipe_name, ingredients, directions, link, source, ner, site,id]);
     return modifyRecipe.rows[0];
}

export async function removeRecipeById(id) {
     const removeRecipe = await pool.query("DELETE FROM recipes WHERE id = $1", [id]);
     return removeRecipe.rows[0];
}
