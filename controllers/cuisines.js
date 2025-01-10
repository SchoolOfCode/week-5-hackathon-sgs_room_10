import {
    fetchAllCuisines,
  } from "../models/cuisines.js";
  
  export async function getCuisines(req, res) {
    try {
      const allCuisines = await fetchAllCuisines();
      res.status(200).json({ status: "success", data: allCuisines });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }