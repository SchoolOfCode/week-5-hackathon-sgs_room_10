import express from "express";
import { getCuisines, 
         getCuisineById
    } from "../controllers/cuisines.js";
import app from "../app.js";

const router = express.Router();

router.get("/", getCuisines);
router.get("/:id", getCuisineById);

export default router;
