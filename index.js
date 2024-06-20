const express = require("express");
const urlRoute = require("./routes/url");
const homeRoute = require("./routes/home");
const {connectToMongoDb} = require("./connect");

const app = express();
const port = 8001;

connectToMongoDb("mongodb://localhost:27017/short-url").
then(() => console.log("connected to MongoDb"));

app.use(express.json());

app.use("/url", urlRoute);

app.use("/", homeRoute);

app.listen(port, () => console.log(`Server started at port ${port}`));