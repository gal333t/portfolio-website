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
  blogDiv.classList = "blog-block bg-secondary";

  const h3 = document.createElement("h3"); // blog
  h3.textContent = blog.title;
  h3.classList = "blog-title";

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

  divRow.append(blogDiv);
  return divRow;
}
