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


export async function modifyRecipeById(id, recipe_name, ingredients, directions,link, source, ner, site) {
     const modifyRecipe = await pool.query("UPDATE recipes SET title = $1, ingredients = $2, directions = $3, link = $4, source = $5, ner = $6, site = $7 WHERE id = $8 RETURNING *;", [recipe_name, ingredients, directions, link, source, ner, site,id]);
     return modifyRecipe.rows[0];
}

export async function removeRecipeById(id) {
     const removeRecipe = await pool.query("DELETE FROM recipes WHERE id = $1", [id]);
     return removeRecipe.rows[0];
}

//PLAN
//After completing a GET request to find a recipe
//The client needs to be able to complete a GET request that shows both the recipe and cusine name together

//STEPS
//create function to fetch recipe and cuisine name
export async function fetchRecipeAndCuisineById(id) {
     //Write a query that joins the recipes and cuisines table with the cuisine_id and recipe_id
const recipeAndCusine = await pool.query(
     "SELECT recipes.title, cuisines.cuisine FROM recipes INNER JOIN cuisines ON recipes.id = cuisines.id WHERE recipes.id = $1;", [id])
     //Return recipe with cuisine name included in response with the recipe
     return recipeAndCusine.rows[0];
}
     