const express = require('express');
const app = express();
const port = 4000;

const indexRoute = require("./routes/index");
//const singlePostRoute = require("./routes/singlePost");
//const createPostRoute = require("./routes/createPost");

app.use("/", indexRoute);

app.listen(port, () => {
    console.log (`Exercise 5 on port ${port}`);
})