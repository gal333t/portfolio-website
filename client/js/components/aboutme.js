function aboutMe() {
  const page = document.getElementById("page");
  const div = document.createElement("div");
  div.classList = "container";
  div.innerHTML = `
    <div class="row bg-secondary about-me">
        <h3>Some other random info to get to know me:</h3>
        <ul>
            <li>I loooove dumplings and noodles, biang biang noods *chefs kiss* and some eggplant dumplings? Say no
                more!
            </li>
            <li>Been vegan since January 1st 2017, basically the only time a new years resolution has ever stuck.
                If you ever want some vegan recommendations, some good grocery finds, happy to share!
            </li>
            <li>Love binge watching Law and Order - have done a watch through of every episode twice now. All spin
                offs
                but UK... SVU will always be my favourite. Stabler forever.
            </li>
            <li>I am a diehard NRL fan. My team are the Roosters, but I am a bit of a Broncos fan too. I love the
                rugby league community & how it brings people together. On game day you'll catch me in head to toe
                gear,
                with some red & blue makeup and nails to match. </li>
            <li>I've been learning Yiddish on Duolingo for over 400 days now. I should add a counter that updates
                on the daily to show off my streak, maybe one day.
            </li>
            <li>I'm really passionate about recycling and one of my favourite things to do when I had weekends, was
                to sort out recylcing through <a class="link" href="https://banish.com.au/pages/recycling-program"
                    target="_blank">Banish's BRAD
                    program</a>
            </li>
            <li>Unlike a lot of coders it seems, I'm not much of a gamer. But I do love playing The Sims 4.</li>
        </ul>
    </div>
`;
  page.replaceChildren(div);
  console.log("About me js is working");
}
