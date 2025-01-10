import { pool } from "../db/index.js";

export async function fetchAllCuisines() {
     const all_cuisines = await pool.query("SELECT * FROM cuisines;");
return all_cuisines.rows;
}

export async function fetchCuisineById(id) {
    const cuisine = await pool.query("SELECT * FROM cuisines WHERE id = $1;", [id]);
    return cuisine.rows[0];
}

export async function createNewCuisine(cuisine) {
    const new_cuisine = await pool.query("INSERT INTO cuisines (cuisine) VALUES ($1) RETURNING *;", [cuisine]);
    return new_cuisine.rows[0]
}

export async function updateSpecificCuisine(id, cuisine) {
    const updated_cuisine = await pool.query("UPDATE cuisines SET cuisine = $1 WHERE id = $2 RETURNING *;",[cuisine, id]);
    return updated_cuisine.rows[0];
}

export async function removeCuisineId(id) {
    const remove_cuisine = await pool.query("DELETE FROM cuisines WHERE id = $1 RETURNING *;",[id]);
    return remove_cuisine.rows[0]
}