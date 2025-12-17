import express from "express";
import { cityBlogArray} from "../data.js";



const router = express.Router();

//INDEX
router.get("/", (req, res)=>{
    const response = {
        totalCitiesToVisit: cityBlogArray.length,
        listOfCities: cityBlogArray,
    }
    res.json (response)
})


//SHOW
router.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const resp = cityBlogArray.find(city => city.id===id);
    res.json (resp)
})

// STORE
router.post("/", (req, res) => {

  const newCity = req.body;

  //generating a new id:
  const newId = cityBlogArray.length > 0 
    ? Math.max(...cityBlogArray.map(city => city.id)) + 1 
    : 1;

  //creating a new blog object:
  const cityBlogToAdd  = {
    id: newId,
    title: newCity.title,
    content: newCity.content,
    // image: newCity.image,
    // tags: newCity.tags
  }
  
  cityBlogArray.push(cityToAdd);

  res.json(cityBlogToAdd);

});

// UPDATE
router.put("/:id", (req, res) => {

  res.json("Modify you blog");
});


//DESTROY
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const cityIndex = cityBlogArray.findIndex(city => city.id === id);

  const deletedCity = cityBlogArray.splice(cityId, 1);

  res.json("CityBlog " + deletedCity[0]);
});

export default router;