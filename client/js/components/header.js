function renderPage() {
  setHeaderHtml();
  renderHomePage();
}

function setHeaderHtml() {
  const header = document.getElementById("header");
  header.innerHTML = `
<h1 class="name">Galit Moss <span class="pronouns">she/her</span></h1>
<h2 class="subheading">Passionate TV enthusiast turned Software Developer 🚀</h2>
<nav class="navbar navbar-expand-lg border-bottom border-bottom-dark" data-bs-theme="dark">
    <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item nav-link" onClick="renderAbout()">About Me</li>
        <li class="nav-item nav-link" onClick="projectDisplay()">Projects</li>
        <li class="nav-item nav-link" onClick="blogDisplay()">Blog</li>
        <li class="nav-item">
            <a class="nav-link" href="https://www.linkedin.com/in/galitmoss/" target="_blank">LinkedIn</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="https://github.com/gal333t/" target="_blank">GitHub</a> </li>
        </ul>
    </div>
</nav>`;
}
