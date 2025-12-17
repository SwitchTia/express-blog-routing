import express from "express";
import { cityBlogArray } from "../data.js";



const router = express.Router();



//INDEX
router.get("/", (req, res) => {
  const response = {

    totalCitiesToVisit: cityBlogArray.length,

    listOfCities: cityBlogArray,
  }
  res.json(response)
})



//SHOW
router.get("/:id", (req, res) => {

  const id = parseInt(req.params.id);


  const resp = cityBlogArray.find(city => city.id === id);

  res.json(resp)
})



// STORE
router.post("/", (req, res) => {

  const newCity = req.body;


  //creating a new blog object:
  const newCityBlogToAdd = {
    id: newId,
    title: newCity.title,
    content: newCity.content,
    // image: newCity.image,?
    tags: newCity.tags
  }

  cityBlogArray.push(cityToAdd);

  res.json(newCityBlogToAdd);

});



// UPDATE
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  //updated fields

  res.json("Modify you blog");
});




//MODIFY
router.patch("/:id", (req, res) => {

  const id = parseInt(req.params.id);


  const city = cityBlogArray.find(city => city.id === id);


  const updates = req.body;

  if (updates.title) {
    city.title = updates.title;
  }
  if (updates.content) {
    city.content = updates.content;
  }
  if (updates.image) {
    city.image = updates.image;
  }
  if (updates.tags) {
    city.tags = updates.tags;
  }


  res.json(city);

});



//DESTROY
router.delete("/:id", (req, res) => {

  const id = parseInt(req.params.id);


  const cityIndex = cityBlogArray.findIndex(city => city.id === id);

  const deletedCity = cityBlogArray.splice(cityIndex, 1);

  res.json("CityBlog " + deletedCity + "has been removed permanently");
});

export default router;