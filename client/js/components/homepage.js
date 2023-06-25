function renderHomePage() {
  const divRow = document.getElementById("divRow");
  const div = document.createElement("div");
  div.classList = "container";
  div.innerHTML = `
  <div class="row about-me">
    <h3 class="about-me-heading">Welcome to my coding project showcase!</h3>
              <p> My name is Galit, and for the past five years, I have been deeply engaged in the captivating world of
                  television scheduling. With a solid foundation in administrative tasks, I have acquired valuable
                  experience and refined my organisational skills within this fast-paced industry. However, my journey has
                  recently taken an exhilarating turn as I have delved into the captivating realm of coding.</p>
              <p>Driven by a desire for more engaging and dynamic work, I've eagerly embraced the world of programming.
                  Equipped with a diverse skill set that includes <em>Javascript, HTML, CSS, Python, Express.js, NodeJs,
                      Postgres,and MongoDB</em>, I've honed my abilities to bring my ideas to life through code. As my
                  course slowly
                  comes to an end now, I am hoping to get some more of my own personal projects in here. Does this website
                  count as one? I have been experimenting with Bootstrap for this website, trying to teach myself
                  something new as CSS can be quite daunting. How did I do?
              </p>
  </div>
  `;
  divRow.replaceChildren(div);
}
