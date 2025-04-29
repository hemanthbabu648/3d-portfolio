import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  php,
  bootstrap,
  mysql,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  gitamw,
  biiitup,
  threejs,
  gitamw_web,
  tictoctoe_web,
  medium_web,
  eLibrary,
  fakeStore,
  portfolio
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const socialIcons = [
  {
    title: "Linked In",
    url: "https://www.linkedin.com/in/hemanthbabu648/",
    network: "linkedin"
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/hemanthbabu648/",
    network: "instagram"
  },
  {
    title: "Twitter",
    url: "https://twitter.com/hemanthbabu648",
    network: "twitter"
  },
  {
    title: "Facebook",
    url: "",
    network: "facebook"
  },
  {
    title: "Telegram",
    url: "https://t.me/s-hemanthbabu-648",
    network: "telegram"
  }
]
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Next JS Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    value: 80
  },
  {
    name: "CSS 3",
    icon: css,
    value: 80
  },
  {
    name: "JavaScript",
    icon: javascript,
    value: 75
  },
  {
    name: "TypeScript",
    icon: typescript,
    value: 100
  },
  {
    name: "React JS",
    icon: reactjs,
    value: 75
  },
  {
    name: "Next JS",
    icon: nextjs,
    value: 75
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    value: 75
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    value: 100
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    value: 80
  },
  {
    name: "PHP",
    icon: php,
    value: 75
  },
  {
    name: "My SQL",
    icon: mysql,
    value: 75
  },
  {
    name: "git",
    icon: git,
    value: 75
  },
  {
    name: "figma",
    icon: figma,
    value: 80
  },
  // {
  //   name: "docker",
  //   icon: docker,
  //   value: 100
  // },
];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "BiiitUp",
    icon: biiitup,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Developing web applications using Next.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "BiiitUp",
    icon: biiitup,
    iconBg: "#383E56",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "BiiitUp",
    icon: biiitup,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Developing web applications using Next.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Free Lancer",
    icon: gitamw,
    iconBg: "#E6DEDD",
    date: "June 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Free Lancer",
    icon: gitamw,
    iconBg: "#383E56",
    date: "June 2022 - January 2023",
    points: [
      "Developing and maintaining web applications using PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    date: '2023-09-01',
    name: "E-Library",
    description:
      "It's a place where you find the all resources at free of  Cost, Just Sign In",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "MongooDB",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
      {
        name: "REST APIs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },

    ],
    image: eLibrary,
    source_code_link: "https://github.com/fsdhemanth648/E-Library",
    live_url: "https://e-library-fsdhemanth648.vercel.app/"
  },
  {
    date: '2023-05-01',
    name: "Fake Store [Redux Implementation]",
    description:
      "It's a web application that basically display the fake products of e-commerce and it is implemented in 'redux'",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Rest API",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: fakeStore,
    source_code_link: "https://github.com/fsdhemanth648/",
    live_url: "https://github.com/fsdhemanth648/"
  },
  {
    date: '2023-04-01',
    name: "Personal Portfolio",
    description:
      "It's a web application that basically showcase the portfolio of a person",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/fsdhemanth648/portfolio",
    live_url: "https://portfolio-fsdhemanth648-gmailcom.vercel.app/"
  },
  {
    date: '2023-03-01',
    name: "Medium Blog",
    description:
      "Web application but also responsive for mobile and it is place to post medium sized blog and showcase the blogs of you.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: medium_web,
    source_code_link: "https://github.com/fsdhemanth648/blogClone",
    live_url: "https://blogclone-hemanthbabus.vercel.app/"
  },
  {
    date: '2022-09-01',
    name: "Tic Tac Toe",
    description:
      "Web application that enables users to play a simple GAME",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tictoctoe_web,
    source_code_link: "https://github.com/fsdhemanth648/",
    live_url: "https://hemanthtic-tac-toe.netlify.app/"
  },
  {
    date: '2022-07-01',
    name: "GITAMW",
    description:
      "It is a web application for college/university to represent the basic information, facilities, education and management of student and faculty deatails",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mySql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: gitamw_web,
    source_code_link: "https://github.com/fsdhemanth648/",
    live_url: "https://github.com/fsdhemanth648/"
  },
];

const labels = {
  '2023-09-01': 'Project-1',
  '2023-05-01': 'Project-2',
  '2023-04-01': 'Project-3',
  '2023-03-01': 'Project-4',
  '2022-09-01': 'Project-5',
  '2022-07-01': 'Project-6',
};



export { services, technologies, experiences, testimonials, projects, socialIcons, labels };