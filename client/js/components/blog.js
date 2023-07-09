function blogDisplay() {
  const divRow = document.getElementById("divRow"); // grabbing the row to append to
  divRow.textContent = "";
  axios.get("/api/blog").then((response) => {
    const blogElements = response.data.map((blog) => renderBlog(blog));
    divRow.appendChild(...blogElements);
  });
}

function renderBlog(blog) {
  const divRow = document.getElementById("divRow"); // grabbing the row to append to
  divRow.classList = "row";

  const blogDiv = document.createElement("div");
  blogDiv.classList = "blog-title-div";

  const h2 = document.createElement("h2"); // blog
  h2.textContent = blog.title;
  h2.classList = "blog-title";

  h2.addEventListener("click", () => {
    renderBlogPosts(blog);
  });

  blogDiv.append(h2);
  divRow.append(blogDiv);
  return divRow;
}

function renderBlogPosts(blog) {
  const divRow = document.getElementById("divRow"); // grabbing the row to append to
  divRow.classList = "row";

  const blogDiv = document.createElement("div");
  blogDiv.classList = "blog-block";

  const h3 = document.createElement("h3"); // blog
  h3.textContent = blog.title;

  blogDiv.append(h3);
  // prettier-ignore
  const blogpost = blog.blogpost
  const lines = blogpost.split("\n"); // picks up the line between each paragraph to later display in paragraphs and not one big group of text
  console.log(lines);
  lines.forEach((paragraph) => {
    let element;
    element = document.createElement("p");
    element.textContent = paragraph;
    console.log(paragraph);
    blogDiv.append(element);
  });

  const btnDiv = document.createElement("div");
  btnDiv.classList = "btnDiv";
  const goBackBtn = document.createElement("button");
  goBackBtn.textContent = "Back to all blogs";
  goBackBtn.classList = "btn btn-dark"; // makes the link a button with css classes
  goBackBtn.addEventListener("click", () => {
    blogDisplay();
  });

  btnDiv.append(goBackBtn);
  divRow.replaceChildren(blogDiv, btnDiv);
  return divRow;
}
