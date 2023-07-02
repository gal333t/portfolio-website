function projectDisplay() {
  const divRow = document.getElementById("divRow"); // grabbing the row to append to
  divRow.textContent = "";
  axios.get("/api/project").then((response) => {
    const listElements = response.data.map((project) => renderList(project));
  });
}

function renderList(project) {
  const divRow = document.getElementById("divRow"); // grabbing the row to append to

  const divCol = document.createElement("div"); // creating the column div
  divCol.classList = "col project-block";

  const h3 = document.createElement("h3"); // project
  h3.textContent = project.project;

  const h4 = document.createElement("h4"); // name (project name)
  h4.textContent = project.name;
  h4.classList = "project-name";

  const p = document.createElement("p"); // info
  p.textContent = project.info;
  p.classList = "mb-5"; // adds a bottom margin of 5px so the button div doesn't overlap

  const btnDiv = document.createElement("div");
  btnDiv.classList = "btnDiv";
  const githubBtn = document.createElement("a"); // creating the Github button through an a tag
  githubBtn.textContent = "Github";
  githubBtn.classList = "btn btn-dark"; // makes the link a button with css classes
  let url = project.github; // fetches the url from the db
  githubBtn.setAttribute("href", url); // sets the link to the github db
  githubBtn.setAttribute("target", "_blank"); // adds the _blank so link opens in new page

  btnDiv.append(githubBtn);

  divCol.append(h3, h4, p, btnDiv); // adding all the above elements into the divCol
  divRow.append(divCol); // adding that divCol now to the row

  return divRow;
}
