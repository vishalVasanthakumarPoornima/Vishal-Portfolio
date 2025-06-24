
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  { name: "Java", icon: backend },
  { name: "Python", icon: backend },
  { name: "C++", icon: backend },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "PySpark", icon: mongodb },
  { name: "SQL", icon: mysql },
  { name: "Assembly", icon: backend },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Vishal proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Vishal does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Vishal optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Parking-Garage-Group-7",
    description: "An application for managing parking garage operations.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "sql", color: "green-text-gradient" },
    ],
    image: project2,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/Parking-Garage-Group-7",
  },
  {
    name: "Vacation_Planner_Website",
    description: "Website to plan and organize travel itineraries.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "white-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: gearXpert,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/Vacation_Planner_Website",
  },
  {
    name: "AI-Futures-Hackathon",
    description: "Hackathon project exploring future AI applications.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ai", color: "green-text-gradient" },
    ],
    image: project3,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/AI-Futures-Hackathon",
  },
  {
    name: "Plant-Growth-Prediction",
    description: "Machine learning model to predict plant growth trends.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ml", color: "green-text-gradient" },
    ],
    image: project2,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/Plant-Growth-Prediction",
  },
  {
    name: "Taxi-Fare-Prediction",
    description: "Predicting taxi fares using data science techniques.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "pyspark", color: "green-text-gradient" },
    ],
    image: gearXpert,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/Taxi-Fare-Prediction",
  },
  {
    name: "Blackjack",
    description: "Simple blackjack game implemented in Python.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
    ],
    image: project3,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/Blackjack",
  },
  {
    name: "PythonPOC",
    description: "Collection of Python proof of concept scripts.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
    ],
    image: project2,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/PythonPOC",
  },
  {
    name: "trip-dreamscape-planner",
    description: "Travel planner built with React.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "white-text-gradient" },
    ],
    image: gearXpert,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/trip-dreamscape-planner",
  },
  {
    name: "Vishal-Portfolio",
    description: "Source code for this portfolio website.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "white-text-gradient" },
    ],
    image: project3,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/Vishal-Portfolio",
  },
  {
    name: "first-repo",
    description: "My very first GitHub repository.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/Poornima25m/first-repo",
  },
  {
    name: "Entrepreneurism-Ethics",
    description: "Coursework exploring entrepreneurial ethics.",
    tags: [
      { name: "docs", color: "pink-text-gradient" },
    ],
    image: gearXpert,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/Entrepreneurism-Ethics",
  },
  {
    name: "CS230-Entrepreneurial-Project",
    description: "Entrepreneurial project for CS230 course.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
    ],
    image: project3,
    source_code_link:
      "https://github.com/VD738/CS230-Entrepreneurial-Project",
  },
  {
    name: "Palindrome",
    description: "Program to check for palindromes.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
    ],
    image: project2,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/Palindrome",
  },
  {
    name: "GradeCalculator",
    description: "Tool for calculating course grades.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
    ],
    image: gearXpert,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/GradeCalculator",
  },
  {
    name: "Calculator",
    description: "A basic calculator implemented in Java.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
    ],
    image: project3,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/Calculator",
  },
  {
    name: "BattleShip",
    description: "Classic battleship game in Java.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
    ],
    image: project2,
    source_code_link:
      "https://github.com/vishalVasanthakumarPoornima/BattleShip",
  },
];

export { services, technologies, experiences, testimonials, projects };
