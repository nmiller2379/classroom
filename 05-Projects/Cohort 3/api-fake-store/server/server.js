const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const port = 8080;
const mongoose = require("mongoose");




// app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb://127.0.0.1:27017/new", () => {
    console.log("MongoDB is now connected")
}, e => console.log(e));

app.get("/",(req,res)=>{
res.send("hello world")
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});