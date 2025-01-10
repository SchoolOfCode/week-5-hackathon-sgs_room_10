import { pool } from "../db/index.js";

export async function fetchAllCuisines() {
     const all_cuisines = await pool.query("SELECT * FROM cuisines;");
return all_cuisines.rows;
}

export async function fetchCuisineById(id) {
    const cuisine = await pool.query("SELECT * FROM cuisines WHERE id = $1;", [id]);
    return cuisine.rows[0];
}