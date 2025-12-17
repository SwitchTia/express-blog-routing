import express from "express";
import { citiesArray } from "../data.js";



const router = express.Router();

//INDEX
router.get("/", (req, res)=>{
    const response = {
        totalCitiesToVisit: citiesArray.length,
        listOfCities: citiesArray,
    }
    res.json (response)
})


//SHOW
router.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const resp = citiesArray.find(city => city.id===id);
    res.json (resp)
})


// STORE
router.post("/", (req, res) => {

  res.json("Create a new city blog");
});


// UPDATE
router.put("/:id", (req, res) => {

  res.json("Modify you blog");
});


//MODIFY
router.patch("/:id", (req, res) => {
  res.json("Change something in a blog");
});


//DESTROY
router.delete("/:id", (req, res) => {
  res.json("Delete the blog");
});

export default router;