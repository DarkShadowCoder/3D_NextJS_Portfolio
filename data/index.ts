import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently creating 30 Mobile apps within 30 Days",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-based Object Recognition Mobile App",
    des: "Complete mobile app that integrated AI-based algorithms to detect and recognize object in real time throught phone camera.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "GeoQuery - Human management & tracking ",
    des: "Simplify your teamwork management using GeoQuery to easily program your agenda and track your team during workshop.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Microservice for Ecommerce Website ",
    des: "Full-Stack ecommerce website build with 2 programming languages with microservices architecture to ensure isolation and reliability.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/DarkShadowCoder/",
  },
  {
    id: 5,
    title: "AI-based Movie recommendation website",
    des: "Full-Stack AI-based movie recommendation website.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/DarkShadowCoder/",
  },
  {
    id: 6,
    title: "Curriculum Vitae Analysis and recommendaion system",
    des: "Full-Stack AI-based CV analysis and recommendation app that facilitate decision making purposes. ",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/DarkShadowCoder/",
  },
  {
    id: 7,
    title: "Sentiment Analysis Deep Learning Model",
    des: "Deep learning Model for sentiment analysis build with python that can be integrated in multiple platforms.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/DarkShadowCoder/",
  },
  {
    id: 8,
    title: "30 Days - 30 Apps Challenge",
    des: "A collection of 30 mobile Apps created every day during 30 days",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/DarkShadowCoder/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Yvan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Yvan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Yvan is the ideal partner.",
    name: "Abdel Diakite",
    title: "CEO Clever's startup",
  },
  {
    quote:
      "Collaborating with Yvan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Yvan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Yvan is the ideal partner.",
    name: "ANGOS GABAIN",
    title: "CEO of KHORFUS",
  },
  {
    quote:
      "Collaborating with Yvan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Yvan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Yvan is the ideal partner.",
    name: "Abdel Diakite",
    title: "CEO Clever's startup",
  },
  {
    quote:
      "Collaborating with Yvan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Yvan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Yvan is the ideal partner.",
    name: "ANGOS GABAIN",
    title: "CEO of KHORFUS",
  },
  {
    quote:
      "Collaborating with Yvan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Yvan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Yvan is the ideal partner.",
    name: "Abdel Diakite",
    title: "CEO Clever's startup",
  },
];

export const companies = [
  {
    id: 1,
    name: "SyndaTech SARL",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "BIG DATA CENTER SARLU",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "SKYNESYS",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "KHORFUS",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "FullStack Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead FullStack Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/DarkShadowCoder/github.com/DarkShadowCoder"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: ""
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://github.com/DarkShadowCoder/www.linkedin.com/in/yvan-landry-mbohou-mounpou-51aa1a2bb"
  },
];
