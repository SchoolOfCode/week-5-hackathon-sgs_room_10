// Import the required modules
import express from "express";
import morgan from "morgan";
import dotenv from 'dotenv';

dotenv.config();

import recipeRouter from "./routes/recipes.js";
import cuisineRouter from "./routes/cuisines.js";

// Initialize the express app
const app = express();

// Middleware
app.use(morgan("dev")); // Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Use sub-routers
app.use("/recipes", recipeRouter);
app.use("/cuisines", cuisineRouter);

export default app;
