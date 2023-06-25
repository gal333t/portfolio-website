const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();

app.use(express.json());
app.use(express.static("client"));

const { MongoClient } = require("mongodb");
const mongoClient = new MongoClient(process.env.MONGO_DB_CONNECTION_STRING);

let projectsCollection;

mongoClient
  .connect()
  .then((_) => {
    const db = mongoClient.db("Portfolio");
    db.dropCollection("projects");
    projectsCollection = db.collection("projects");
    projectsCollection.insertMany([
      {
        project: "Project One",
        name: "Word Galactica",
        info: "Being an avid Worlde player myself, working on this project was an absolute blast! It provided an excellent opportunity to apply our recently acquired skills in HTML, JavaScript, and CSS to craft our unique version inspired by Wordle. Although it felt a bit overwhelming as it was my first project, I've enjoyed revisiting it after submission and making further improvements. Currently the only bug I am stuck with is to do with duplicate letters, something I will come back and fix Unlike Wordle, my game allows you to refresh and play as many times as you desire!",
        github: "https://github.com/gal333t/Project-One",
      },
      {
        project: "Project Two",
        name: "Mother's Day",
        info: "Our second unit was focused on Python, Flask and Postgres. The timing of this project gave me the idea to create a website that would serve as a card for Mother's Day. I had a table of users, which included my siblings and myself that allowed users to write/edit/delete messages for our mum. When you were done, you could view whatever you had written but only my mum could go in and see everyone's messages together. My mum loved it so much, a pity Render only stores it for 6 months. Thankfully took some screenshots for her, and I will try hosting on other websites in the future to bring it back to life.",
        github: "https://github.com/gal333t/project-2",
      },
    ]);
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/api/project", (_, response) => {
  projectsCollection
    .find()
    .toArray()
    .then((projects) => {
      response.json(projects);
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
