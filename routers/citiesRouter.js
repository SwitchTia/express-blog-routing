import express from "express";
import { citiesArray } from "../data.js";



const router = express.Router();

//INDEX
router.get("/cities", (req, res) => {

  const newArray = citiesArray.map((city) => {
    return {
      ...city,
      foto: `/cities/${city.title}.png`
    }
  })
  const city = {
    info: {
      total: citiesArray.length,
    },
    result: newArray
  };

  res.json(city);

})

// SHOW
router.get("/:id", (req, res) => {

  res.json("Show");
});

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