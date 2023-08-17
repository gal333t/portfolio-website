const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();

app.use(express.json());
app.use(express.static("client"));

const { MongoClient } = require("mongodb");
const mongoClient = new MongoClient(process.env.MONGO_DB_CONNECTION_STRING);

let projectsCollection;
let blogsCollection;

mongoClient.connect().then((_) => {
  const db = mongoClient.db("Portfolio");
  projectsCollection = db.collection("projects");
});

app.get("/api/project", (_, response) => {
  projectsCollection
    .find()
    .toArray()
    .then((projects) => {
      response.json(projects);
    });
});

mongoClient.connect().then((_) => {
  const db = mongoClient.db("Portfolio");
  blogsCollection = db.collection("blogs");
});

app.get("/api/blog", (_, response) => {
  blogsCollection
    .find()
    .toArray()
    .then((blog) => {
      response.json(blog);
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
