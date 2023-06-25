function aboutMe() {
  const divRow = document.getElementById("divRow");
  const div = document.createElement("div");
  div.classList = "container";

  div.innerHTML = `
<div class="row about-me">
  <h3>Welcome to my coding project showcase!</h3>
            <p> My name is Galit, and for the past five years, I have been deeply engaged in the captivating world of
                television scheduling. With a solid foundation in administrative tasks, I have acquired valuable
                experience and refined my organisational skills within this fast-paced industry. However, my journey has
                recently taken an exhilarating turn as I have delved into the captivating realm of coding.</p>
            <p>Driven by a desire for more engaging and dynamic work, I've eagerly embraced the world of programming.
                Equipped with a diverse skill set that includes <em>Javascript, HTML, CSS, Express.js, NodeJs,
                    Postgres,and MongoDB</em>, I've honed my abilities to bring my ideas to life through code. As my
                course slowly
                comes to an end now, I am hoping to get some more of my own personal projects in here. Does this website
                count as one? I have been experimenting with Bootstrap for this website, trying to teach myself
                something new as CSS can be quite daunting. How did I do?
            </p>
</div>
<div class="row about-me">
<h3>Some other random info about me:</h3>
<ul>
    <li>I loooove dumplings and noodles, biang biang noods *chefs kiss* and some eggplant dumplings? Say no
        more!
    </li>
    <li>Been vegan since January 1st 2017, basically the only time a new years resolution has ever stuck.
        If you ever want some vegan recommendations, some good grocery finds, happy to share!
    </li>
    <li>Love binge watching Law and Order - have done a watch through of every episode twice now. All spin
        offs but UK... SVU will always be my favourite. Stabler forever.
    </li>
    <li>I am a diehard NRL fan. My team are the Roosters, but I am a bit of a Broncos fan too (much to the disappointment of my family). I love the
        rugby league community & how it brings people together. And I also love to match my makeup & nails to my game day attire.</li>
    <li>I've been learning Yiddish on Duolingo for over 430 days now. I should add a counter that updates
        on the daily to show off my streak, maybe one day.
    </li>
    <li>I'm really passionate about recycling and one of my favourite things to do when I had weekends and free time, was
        to sort out recylcing through <a class="link" href="https://banish.com.au/pages/recycling-program"
            target="_blank">Banish's BRAD
            program</a>
    </li>
    <li>Unlike a lot of coders it seems, I'm not much of a gamer. But I do love playing The Sims 4.</li>
</ul>
</div>

`;
  divRow.replaceChildren(div);
}
