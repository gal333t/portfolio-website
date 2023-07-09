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
  blogDiv.classList = "blog-title";

  const h2 = document.createElement("h2"); // blog
  h2.textContent = blog.title;

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

  const h2 = document.createElement("h2"); // blog
  h2.textContent = blog.title;

  blogDiv.append(h2);
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

  divRow.replaceChildren(blogDiv);
  return divRow;
}
