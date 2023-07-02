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

mongoClient
  .connect()
  .then((_) => {
    const db = mongoClient.db("Portfolio");
    // db.dropCollection("projects");
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
      {
        project: "Homework",
        name: "Ron Swanson API",
        info: "This is a wildcard, but I really loved this homework that I did in collaboration with a classmate. We used Javascript and APIs to create a Ron Swanson Quote Generator. Their CSS skills really took it to the next level, such a fun website to use anytime you'd like a handy Ron Swanson quote!",
        github: "https://github.com/gal333t/ronswanson",
      },
      {
        project: "Website",
        name: "Galit's Portfolio",
        info: "Couldn't forget to add one of the funnest and most challenging projects I've worked on. This website! A combination (so far) of 2 Sundays, I put together a website to showcase my work. Incorporating Bootstrap which I had never used before, and testing my new backend Javascript skills. I reckon I did alright! Very proud of this one and can't wait to continue to work on this and improve it even further. My README will have a more in depth of the progress this website went through.",
        github: "https://github.com/gal333t/portfolio-website",
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
