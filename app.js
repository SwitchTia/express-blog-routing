console.log("hey");
import express from "express"
import citiesRouter from "./routers/citiesRouter.js"



const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server of my blog")
})

app.use("/cities", citiesRouter);



app.listen(port, function () {
  console.log("Server is connected on port " + port);
});

