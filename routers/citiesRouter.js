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
  const id = parseInt(req.params.id);

  const cityIndex = cityBlogArray.findIndex(city => city.id === id);

  const deletedCity = cityBlogArray.splice(cityId, 1);

  res.json("CityBlog " + deletedCity[0]);
});

export default router;