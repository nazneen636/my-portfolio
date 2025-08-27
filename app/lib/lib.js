import tech1 from "../public/tech1.png";
import oribi1 from "../public/oribi1.png";
import css1 from "../public/css1.png";
import responsive1 from "../public/responsive1.png";
import js1 from "../public/js1.png";

const _ = {};

// 1️⃣ Categories
_.categories = [
  { title: "Show all" },
  { title: "CSS" },
  { title: "JavaScript" },
  { title: "Responsive Design" },
  { title: "E-commerce Website" },
];

// 2️⃣ E-commerce Projects
_.ecommerceItem = [
  {
    image: tech1,
    title: "E-commerce",
    description:
      "This e-commerce platform, built using React, Redux, and Tailwind CSS, provides a seamless shopping experience with an intuitive user interface.",
    github: "https://github.com/nazneen636/elcectronics-ecommerce",
    liveLink: "https://techstore-ecommerce.vercel.app/",
  },
  {
    image: oribi1,
    title: "E-commerce",
    description:
      "This e-commerce platform, built using React, Redux, and Tailwind CSS, provides a seamless shopping experience with an intuitive user interface.",
    github: "https://github.com/nazneen636/Oribi-ecommerce",
    liveLink: "",
  },
];

// 3️⃣ CSS Projects
_.cssItem = [
  {
    image: css1,
    title: "Portfolio with Raw CSS",
    description:
      "A static portfolio website styled only with raw CSS to showcase strong fundamentals of web styling and layout.",
    github: "https://github.com/nazneen636/raw-css-portfolio",
    liveLink: "https://rawcss-portfolio.vercel.app/",
  },
];

// 4️⃣ Responsive Projects
_.responsiveItem = [
  {
    image: responsive1,
    title: "Responsive Landing Page",
    description:
      "A fully responsive landing page built with HTML, CSS, and media queries for all screen sizes.",
    github: "https://github.com/nazneen636/responsive-landing",
    liveLink: "https://responsive-landing.vercel.app/",
  },
];

// 5️⃣ JavaScript Projects
_.javascriptItem = [
  {
    image: js1,
    title: "JavaScript Calculator",
    description:
      "A functional calculator built with vanilla JavaScript, handling basic arithmetic operations and clean UI.",
    github: "https://github.com/nazneen636/js-calculator",
    liveLink: "https://js-calculator.vercel.app/",
  },
];

// 6️⃣ ShowAll = Merge All Projects
_.ShowAll = [
  ..._.ecommerceItem,
  ..._.cssItem,
  ..._.responsiveItem,
  ..._.javascriptItem,
];

export default _;
