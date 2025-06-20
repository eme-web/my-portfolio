import {
  faMdb,
  faGitAlt,
  faPython,
  faJs,
  faNode,
  faNodeJS,
  faNodeJs,
  faPhp,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "./Images/RealtorPage.png";
import img2 from "./Images/codeBookPage.png";
import img3 from "./Images/cinemaHomePage.png";
import img4 from "./Images/Omnifood.png";
import img5 from "./Images/Decamper.png";
import img6 from "./Images/Blogging-api.png";

const aboutMe = [
  {
    id: 1,
    para: "My name is Eme Udobong and I love design and build things for the web.",
  },
];

const education = [
  {
    id: 1,
    schoolName: "University of Calabar",
    specialization: "B.Sc Public Health",
    class: "Second Class Upper",
    year: 2018,
  },
];

const skills = [
  {
    id: "express",
    name: "Express",
    icon: faNodeJs,
  },
  {
    id: "JavaScript",
    name: "JavaScript",
    icon: faJs,
  },
  {
    id: "Php",
    name: "PHP",
    icon: faPhp,
  },
  {
    id: "Laravel",
    name: "LARAVEL",
    icon: faLaravel,
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: faNode,
  },
  {
    id: "mongo",
    name: "MongoDB",
    icon: faMdb,
  },
  {
    id: "git",
    name: "Git",
    icon: faGitAlt,
  },
];

const projects = [
  {
    id: 1,
    imgSrc: img1,
    alt: "Realtor-Clone - Real Estate platform",
    projectName: "Realtor Clone - Real Estate Application",
    technologies: "React.js Tailwindcss, Firebase",
    description:
      "Realtor-Clone is a real estate platform where users can buy, sell, and rent properties in the most desirable neigborhood.",
    projectLink: "https://realtor-clone-lilac.vercel.app/",
    githubLink: "https://github.com/eme-web/Realtor-clone",
  },
  {
    id: 2,
    imgSrc: img2,
    alt: "CodeBook - E-commerce platform",
    projectName: "CodeBook - E-commerce Application",
    technologies: "React.js, Tailwind CSS, JSON Server, JWTAuth, Context API",
    description:
      "An E-commerce application where a user can search for a coding book of choice and make purchase.",
    projectLink: "https://codebook-snowy.vercel.app/",
    githubLink: "https://github.com/eme-web/codebook",
  },
  {
    id: 3,
    imgSrc: img3,
    alt: "Cinema - A Movie web application",
    projectName: "Cinema - A Movie Web Application",
    technologies: "React.js, Tailwind CSS, TMDB API ",
    description:
      "A web application where users can have access to search and watch movie of their choice.",
    projectLink: "https://cinema-nu-six.vercel.app/",
    githubLink: "https://github.com/eme-web/cinema",
  },
  {
    id: 4,
    imgSrc: img4,
    alt: "Omnifood - A Meal web application",
    projectName: "Omnifood - A meal Web Application",
    technologies: "Html, CSS",
    description:
      "A web application where users can have a meal plan, get food recipes and also order food.",
    projectLink: "https://foodie-six-mocha.vercel.app/",
    githubLink: "https://github.com/eme-web/Foodie",
  },
  {
    id: 5,
    imgSrc: img5,
    alt: "Tech-BootcampAPI",
    projectName: "Tech-Bootcamp",
    technologies: "Express, Node.js, MongoDB, JWT",
    description:
      "Backend API for Tech-Bootcamp application to manage bootcamps, courses, reviews, users and authentication.",
    projectLink: "https://bootcamper-api-onqm.onrender.com/",
    githubLink: "https://github.com/eme-web/TechBootcamperAPI.git",
  },
  {
    id: 6,
    imgSrc: img6,
    alt: "BloggingAPI",
    projectName: "Blogging Platform",
    technologies: "Express, Node.js, MongoDB, JWT",
    description:
      "Backend API for Blogging application to manage blog posts, users and authentication.",
    projectLink: "https://blogging-api-295u.onrender.com/",
    githubLink: "https://github.com/eme-web/Blogging-api.git",
  },
];

export { aboutMe, education, skills };
export default projects;
