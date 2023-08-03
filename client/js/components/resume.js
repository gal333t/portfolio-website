resumeDisplay = () => {
  const divRow = document.getElementById("divRow");
  divRow.textContent = "";
  const p = document.createElement("p");
  p.textContent =
    "* NOT FINAL SOFTWARE! But jokes aside, this is a continuous work in progress but my experience is relevant and up to date 😊";
  p.classList.add("resume-p");
  const image = document.createElement("img");
  image.setAttribute(
    "src",
    "https://i.ibb.co/pLC76f7/Galit-Moss-CV-July-2023-2.jpg"
  );
  image.classList.add("resume");
  divRow.append(image, p);
  return divRow;
};
