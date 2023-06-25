function projectDisplay() {
  axios.get("/api/project").then((response) => {
    const listElements = response.data.map((project) => renderList(project));
  });
}

function renderList(project) {
  const divRow = document.getElementById("divRow"); // grabbing the row to append to

  const divCol = document.createElement("div"); // creating the column div
  divCol.classList = "col project-block bg-secondary";

  const h3 = document.createElement("h3"); // project
  h3.textContent = project.project;

  const h4 = document.createElement("h4"); // name (project name)
  h4.textContent = project.name;
  h4.classList = "project-name";

  const p = document.createElement("p"); // info
  p.textContent = project.info;

  const githubBtn = document.createElement("a"); // creating the Github button through an a tag
  githubBtn.textContent = "Github";
  githubBtn.classList = "btn btn-dark"; // makes the link a button with css classes
  let url = project.github; // fetches the url from the db
  githubBtn.setAttribute("href", url); // sets the link to the github db
  githubBtn.setAttribute("target", "_blank"); // adds the _blank so link opens in new page

  const page = document.getElementById("page");
  page.textContent = "";

  divCol.append(h3, h4, p, githubBtn); // adding all the above elements into the divCol
  divRow.append(divCol); // adding that divCol now to the row

  // const footer = document.getElementById("footer");
  // footer.innerHTML = `<p class="footer">Some of the text on this page was written with the help of ChatGPT 🫶🏼</p>`;

  return divRow;
}