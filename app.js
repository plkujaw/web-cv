const projects = [
  {
    id: 1,
    name: "Community Video",
    info:
      "Platform where users can upload videos sharing their skills. It was inspired by the CoVid19 outbreak where most of the world had to respect social distancing and have most of their lives occur in the online world. The goal was to allow community members to be able to learn new skills during the time of lockdown and support each other.",
    stack:
      "Tech stack: Ruby on Rails, PostgreSQL, PayPal API, JavaScript, CSS, RSpec, Capybara.",
    links: `<a href="https://github.com/plkujaw/co-vid20-20" target="_blank" rel="noreferrer"><img src="img/github.png" alt="github repo" class="icon"></a>
            <a href="https://youtu.be/xNpah5xL_l0?t=2597" target="_blank" rel="noreferrer"><img src="img/yt.png" alt="demo video" class="icon-long"></a>`,
    img: "img/cov.png",
  },
  {
    id: 2,
    name: "Rock, paper, scissors",
    info:
      "Classic rock, paper, scissors game developed following TDD principles.",
    stack: "Tech stack: Ruby, Sinatra, CSS, RSpec, Capybara.",
    links: `<a href="https://github.com/plkujaw/rps-challenge" target="_blank" rel="noreferrer"><img src="img/github.png" alt="rock paper scissors" class="icon"></a>`,
    img: "img/rps.png",
  },
  {
    id: 3,
    name: "Colour flipper",
    info:
      "Background colour generator and flipper written in Vanilla JavaScript.",
    stack: "Tech stack: Vanilla JavaScript, HTML, CSS.",
    links: `<a href="https://github.com/plkujaw/js-colour-flipper" target="_blank" rel="noreferrer"><img src="img/github.png" alt="github repo" class="icon"></a>
            <a href="https://plkujaw.github.io/js-colour-flipper/index.html" target="_blank" rel="noreferrer"><img src="img/www.png" alt="website" class="icon"></a>`,
    img: "img/flipper-demo.gif",
  },
  {
    id: 4,
    name: "Corona Run Game",
    info: `Project built for <a href="https://twitter.com/hashtag/hackforheroes" target="_blank" rel="noreferrer">#hackforheroes</a>, a two days and a half hackathon organized by Makers. The main theme was developing an app inspired by the Covid-19 crisis.`,
    stack: "Tech stack: JavaScript, p5.js.",
    links: `<a href="https://github.com/plkujaw/hfh_corona_game" target="_blank" rel="noreferrer"><img src="img/github.png" alt="hack for heroes" class="icon"></a>`,
    img: "img/hfh.png",
  },
  {
    id: 5,
    name: "Palindrome detector",
    info: "Check if the given phrase is a palindrome.",
    stack: "Tech stack: Vanilla JavaScript, Mocha, HTML, CSS.",
    links: `<a
            href="https://github.com/plkujaw/js-palindrome-detector"
            target="_blank"
            rel="noreferrer"
            ><img src="img/github.png" alt="github repo" class="icon"
          /></a>
          <a
            href="https://plkujaw.github.io/js-palindrome-detector/"
            target="_blank"
            rel="noreferrer"
            ><img src="img/www.png" alt="website" class="icon"
          /></a>
          <a
            href="https://www.npmjs.com/package/plkujaw-palindrome"
            target="_blank"
            rel="noreferrer"
            ><img src="img/npm.png" alt="npm" class="icon"
          /></a>`,
    img: "img/palindrome.gif",
  },
  {
    id: 6,
    name: "Big City",
    info:
      "(Work in progress) Create a responsive, fuctioning website based on the Photoshop UI layout/design.",
    stack: "Tech stack: HTML, CSS, JavaScript, Jest.",
    links: `<a
            href="https://github.com/plkujaw/bigcity"
            target="_blank"
            rel="noreferrer"
            ><img src="img/github.png" alt="github repo" class="icon"
          /></a>
          <a
            href="https://plkujaw.github.io/bigcity/"
            target="_blank"
            rel="noreferrer"
            ><img src="img/www.png" alt="website" class="icon"
          /></a>`,
    img: "img/bigcity.png",
  },
];

const img = document.getElementById("project-img");
const name = document.getElementById("name");
const info = document.getElementById("info");
const stack = document.getElementById("stack");
const links = document.getElementById("links");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 2;

window.addEventListener("DOMContentLoaded", () => {
  showProject(currentItem);
});

showProject = (project) => {
  const item = projects[project];
  img.src = item.img;
  title.textContent = item.name;
  info.innerHTML = item.info;
  stack.textContent = item.stack;
  links.innerHTML = item.links;
};

nextBtn.addEventListener("click", () => {
  currentItem++;
  // when we reach last element in the array we start from the beginning
  if (currentItem > projects.length - 1) {
    currentItem = 0;
  }
  showProject(currentItem);
  window.location.replace("index.html#projects");
});

// show previous review

prevBtn.addEventListener("click", () => {
  currentItem--;
  // when we reach last element in the array we start from the last item
  if (currentItem < 0) {
    currentItem = projects.length - 1;
  }
  showProject(currentItem);
  window.location.replace("index.html#projects");
});

// show random review

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * projects.length);
  showProject(currentItem);
  window.location.replace("index.html#projects");
});
