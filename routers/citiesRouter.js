import express from "express";


const router = express.Router();
router.get("/", (req, res) => {
  
  res.json(risposta);
});

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