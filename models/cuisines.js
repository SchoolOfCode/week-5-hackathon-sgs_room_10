import { pool } from "../db/index.js";

export async function fetchAllCuisines() {
     const all_cuisines = await pool.query("SELECT * FROM cuisines;");
return all_cuisines.rows;
}