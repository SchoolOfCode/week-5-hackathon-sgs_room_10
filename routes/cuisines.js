import express from "express";
import { getCuisines, 
         getCuisineById,
         createCuisine,
         updateCuisineById,
         deleteCuisineById
    } from "../controllers/cuisines.js";
import app from "../app.js";

const router = express.Router();

router.get("/", getCuisines);
router.get("/:id", getCuisineById);
router.post("/", createCuisine);
router.patch("/:id", updateCuisineById);
router.delete("/:id", deleteCuisineById);

export default router;
