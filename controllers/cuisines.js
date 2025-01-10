import {
    fetchAllCuisines,
    fetchCuisineById,
  } from "../models/cuisines.js";
  
  export async function getCuisines(req, res) {
    try {
      const allCuisines = await fetchAllCuisines();
      res.status(200).json({ status: "success", data: allCuisines });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

   export async function getCuisineById(req, res) {
      try {
        const id = req.params.id;
        const cuisine = await fetchCuisineById(id);
        if (!cuisine) {
          return res
            .status(404)
            .json({ status: "fail", message: "Cuisine not found" });
        }
        res.status(200).json({ status: "success", data: cuisine});
      } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
      }
    }