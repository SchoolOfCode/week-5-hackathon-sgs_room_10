import {
    fetchAllCuisines,
    fetchCuisineById,
    createNewCuisine,
    updateSpecificCuisine,
    removeCuisineId
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
        const {cuisine} = req.body
        const updated_cuisine = await fetchCuisineById(id,cuisine);
        if (!updated_cuisine) {
          return res
            .status(404)
            .json({ status: "fail", message: "Cuisine not found" });
        }
        res.status(200).json({ status: "success", data: updated_cuisine});
      } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
      }
    }


    export async function createCuisine(req,res) {
      try {
        const {cuisine} = req.body;
        const new_cuisine = await createNewCuisine(cuisine);
        res.status(201).json({status : "success", data: new_cuisine})
      } catch (error) {
        res.status(500).json({status: "fail", message: error.message})
      }
    }


    export async function updateCuisineById(req,res) {
      try{
        const id = req.params.id
        const {cuisine} = req.body;
        console.log(id)
        console.log(cuisine)
        const updated_cuisine = await updateSpecificCuisine(id,cuisine);
        console.log(updated_cuisine)
        if(!cuisine){
          return res.status(404).json({status:"fail", message: "Cuisine not found"})
        }
        res.status(200).json({status:"success",data: updated_cuisine});
      } catch(error){
        res.status(500).json({status: "fail", message: error.message})
      }
    }


    export async function deleteCuisineById(req,res){
      try {
      const id = req.params.id;
      const deleted = await removeCuisineId(id);
      console.log(`Deleted cuisine: ${JSON.stringify(deleted)}`);
      if(!deleted) {
        res.status(404).json({status: "fail",message: "Cuisine not found"})
      }
      console.log("success");
      res.status(204).json({status:"success", data: deleted})
    } catch(error) {
      res.status(500).json({status:"fail",message: error.message})
    }
  }