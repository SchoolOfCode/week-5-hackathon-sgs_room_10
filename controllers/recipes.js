import {
    fetchAllRecipes,
    fetchRecipeById,
    insertRecipe,
    modifyRecipeById,
    removeRecipeById,
  } from "../models/recipes.js";
  
  export async function getRecipes(req, res) {
    try {
      const allRecipes = await fetchAllRecipes();
      res.status(200).json({ status: "success", data: allRecipes });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function getRecipeById(req, res) {
    try {
      const id = req.params.id;
      const recipe = await fetchRecipeById(id);
      if (!recipe) {
        return res
          .status(404)
          .json({ status: "fail", message: "Recipe not found" });
      }
      res.status(200).json({ status: "success", data: recipe});
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function createRecipe(req, res) {
    try {
      const { recipe_name, ingredients, method } = req.body;
      if (!recipe_name || !ingredients || !method) {
        return res
          .status(400)
          .json({ status: "fail", message: "Missing required fields" });
      }
      const recipe = await insertRecipe(recipe_name, ingredients, method);
      res.status(201).json({ status: "success", data: recipe });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function updateRecipeById(req, res) {
    try {
      const id = req.params.id;
      const { title, ingredients, directions, link, source, ner, site } = req.body;
      if (!title || !ingredients || !directions) {
        return res
          .status(400)
          .json({ status: "fail", message: "Missing required fields" });
      }
      const recipe = await modifyRecipeById(id, title, ingredients, directions,link, source, ner, site);
      console.log(recipe);
      if (!recipe) {
        return res
          .status(404)
          .json({ status: "fail", message: "Recipe not found" });
      }
      res.status(200).json({ status: "success", data: recipe });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function deleteRecipeById(req, res) {
    try {
      const id = req.params.id;
      const recipe = await removeRecipeById(id);
      if (!recipe) {
        return res
          .status(404)
          .json({ status: "fail", message: "Recipe not found" });
      }
      res.status(204).send(recipe); // 204 No Content
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  