import express from "express";
import { getCuisines, 
    } from "../controllers/cuisines.js";
import app from "../app.js";

const router = express.Router();

router.get("/", getCuisines);

export default router;
