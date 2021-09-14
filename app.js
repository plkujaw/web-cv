const projects = [
  {
    id: 1,
    name: 'The Kings Arms',
    info: 'WordPress website for a local pub.',
    stack:
      'Tech stack: WordPress, Timber/Twig, ACF, SCSS, gulp.js, JavaScript, jQuery.',
    links: `<a href="https://kingsarmsatstrete.co.uk/" target="_blank" rel="noreferrer"><img src="img/www.png" alt="website" class="icon"></a>`,
    img: 'img/tka.png',
  },
  {
    id: 2,
    name: 'Biotechflow',
    info: 'WordPress build for a bio-technology company that specialises in intensified bio separations, Downstream Process using Expanded Bed Adsorption chromatography step.',
    stack:
      'Tech stack: WordPress, Timber/Twig, ACF, SCSS, gulp.js, JavaScript, jQuery, Lottie.',
    links: `<a href="https://biotechflow.com/" target="_blank" rel="noreferrer"><img src="img/www.png" alt="website" class="icon"></a>`,
    img: 'img/btf.png',
  },
  {
    id: 3,
    name: 'Hightide',
    info: 'WordPress website for kayak school and hire company based in Switzerland.',
    stack:
      'Tech stack: WordPress, Timber/Twig, ACF, SCSS, gulp.js, JavaScript, jQuery. Used Gutenberg blocks for modularity.',
    links: `<a href="http://hightide.ch/" target="_blank" rel="noreferrer"><img src="img/www.png" alt="website" class="icon"></a>`,
    img: 'img/ht.png',
  },
  {
    id: 4,
    name: 'E28 BMW M5 website.',
    info: `If the E28 BMW M5 was a brand new car on sale today...`,
    stack: 'Tech stack: HTML, CSS, jQuery, Lottie, Bootstrap.',
    links: `<a href="https://pistonnerd.com/" target="_blank" rel="noreferrer"><img src="img/www.png" alt="website" class="icon"></a>`,
    img: 'img/bmw.png',
  },
  {
    id: 5,
    name: 'Tumu Consulting',
    info: 'WordPress build for a civil engineering consultancy.',
    stack:
      'Tech stack: WordPress, Timber/Twig, ACF, SCSS, gulp.js, JavaScript, jQuery',
    links: `<a
            href="https://www.tumuconsulting.com/"
            target="_blank"
            rel="noreferrer"
            ><img src="img/www.png" alt="website" class="icon"></a>
          `,
    img: 'img/tumu.png',
  },
  
  {
    id: 6,
    name: 'Greenheart',
    info: 'Build a custom WordPress website and theme for social & environmental impact consultancy',
    stack:
      'Tech stack: WordPress, Timber/Twig, Advanced Custom Fields, HTML, SCSS, JavaScript, Gulp.js.',
    links: `<a
            href="https://greenheartbusiness.com/"
            target="_blank"
            rel="noreferrer"
            ><img src="img/www.png" alt="website" class="icon"
          /></a>`,
    img: 'img/greenheart.jpg',
  },
  
    {
    id: 7,
    name: 'ARC Ratings',
    info: 'Build a custom WordPress website and theme for a credit rating agency',
    stack:
      'Tech stack: WordPress, Custom Post Types, Custom Taxonomies, Advanced Custom Fields, HTML, SCSS, JavaScript, Gulp.js.',
    links: `<a
            href="https://arcratings.com/"
            target="_blank"
            rel="noreferrer"
            ><img src="img/www.png" alt="website" class="icon"
          /></a>`,
    img: 'img/arc.jpg',
  },
];

const img = document.getElementById('project-img');
const name = document.getElementById('name');
const info = document.getElementById('info');
const stack = document.getElementById('stack');
const links = document.getElementById('links');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = projects.length - 1;

window.addEventListener('DOMContentLoaded', () => {
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

nextBtn.addEventListener('click', () => {
  currentItem++;
  // when we reach last element in the array we start from the beginning
  if (currentItem > projects.length - 1) {
    currentItem = 0;
  }
  showProject(currentItem);
  // window.location.replace("index.html#projects");
});

// show previous review

prevBtn.addEventListener('click', () => {
  currentItem--;
  // when we reach last element in the array we start from the last item
  if (currentItem < 0) {
    currentItem = projects.length - 1;
  }
  showProject(currentItem);
  // window.location.replace("index.html#projects");
});

// show random review

 // randomBtn.addEventListener('click', () => {
 //   currentItem = Math.floor(Math.random() * projects.length);
 //   showProject(currentItem);
 //   window.location.replace('index.html#projects');
 // });
