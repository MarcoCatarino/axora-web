import Brand1 from "../../../public/images/companies/brand-1.webp";
import Brand2 from "../../../public/images/companies/brand-2.webp";
import Brand3 from "../../../public/images/companies/brand-3.webp";
import Brand4 from "../../../public/images/companies/brand-4.webp";
import Brand5 from "../../../public/images/companies/brand-5.webp";

import Project1 from "../../../public/images/projects/project-01.jpg";
import Project2 from "../../../public/images/projects/project-02.jpg";
import Project3 from "../../../public/images/projects/project-03.jpg";
import Project4 from "../../../public/images/projects/project-04.jpg";

import User1 from "../../../public/images/testimonials/user.jpg";
import User2 from "../../../public/images/testimonials/user2.jpg";
import User3 from "../../../public/images/testimonials/user3.jpg";

import Blog1 from "../../../public/images/blog/blog-1.jpg";
import Blog2 from "../../../public/images/blog/blog-2.jpg";
import Blog3 from "../../../public/images/blog/blog-3.jpg";
import BlogServ1 from "../../../public/images/blog/service-1.webp";
import BlogServ2 from "../../../public/images/blog/service-2.webp";
import BlogServ3 from "../../../public/images/blog/service-3.webp";

export const solutionData = [
  {
    title: "Training & Development",
    icon: "mdi:school",
    description:
      "Equip your teams with skills and knowledge tailored to your corporate goal",
  },
  {
    title: "Business Strategy",
    icon: "mdi:briefcase-outline",
    description:
      "Develop actionable strategies to drive growth and stay ahead in your industrie",
  },
  {
    title: "Sustenability & ESG",
    icon: "mdi:leaf",
    description:
      "Implement strategies for long-term value, sustenability, and corporate goals",
  },
  {
    title: "Training & Development",
    icon: "mdi:school",
    description:
      "Equip your teams with skills and knowledge tailored to your corporate",
  },
  {
    title: "Customer Engagement",
    icon: "mdi:account-group-outline",
    description:
      "Enhance customer journeys to boost satisfaction, loyalty, and long-term",
  },
];

export const companies = [Brand1, Brand2, Brand3, Brand4, Brand5];

export const projects = [
  {
    title: "Eccommerce Acceleration Platform",
    category: "Ecommerce",
    description:
      "We optimize the best strategie on network experience with our UI/UX in the design of the website.",
    link: "https://google.com",
    image: Project1,
  },
  {
    title: "Smart Event Management System",
    category: "Strategy",
    description:
      "Plan, manage, and analyze events effortlessly with AI-driven tools for scheduling, attendee engagement, and real-time insights.",
    link: "https://google.com",
    image: Project2,
  },
  {
    title: "Entertainment Show Cases",
    category: "Entertainment",
    description:
      "In this type of project we know that you need to focus the guests in the project in order to atract the attention.",
    link: "https://google.com",
    image: Project3,
  },
  {
    title: "Social Connections",
    category: "Social",
    description:
      "We know you need interaction between users of your applications, but it's almost 90% of the objective.",
    link: "https://google.com",
    image: Project4,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Marco",
    position: "Boss",
    text: "It was the best esxperience I have had with any company, the service was perfect, and the did all their effort to complete the task they were given.",
    image: User1,
  },
  {
    id: 2,
    name: "Saul",
    position: "RH",
    text: "It was the best esxperience I have had with any company, the service was perfect, and the did all their effort to complete the task they were given.",
    image: User2,
  },
  {
    id: 3,
    name: "Berenice",
    position: "Student",
    text: "It was the best esxperience I have had with any company, the service was perfect, and the did all their effort to complete the task they were given.",
    image: User3,
  },
];

export const blogs = [
  {
    id: 1,
    author: "Arturo",
    title: "Game Development in 2025",
    description:
      "With the grow of the gaming industry, some can think that the developers will have a lot of work oportunities, but it's currently the oposite because the companies have been with masive layoffs",
    category: "Games",
    date: "18 Jun",
    image: Blog1,
    slug: 1,
  },
  {
    id: 2,
    author: "Miguel",
    title: "How does Social Media impact in highschools?",
    description:
      "Thw social media has been one of the main topics in the schedule of all the governments, and it's actual an important topic we must focus",
    category: "Social",
    date: "18 Jun",
    image: Blog2,
    slug: 2,
  },
  {
    id: 3,
    author: "Josue",
    title: "The 3 best snack to eat as a developer",
    description:
      "As developers, most of the times we don't care about our healt, so we must change that by duing some excersise and eating more healthy and in our breaks we can have this desserts.",
    category: "Cook",
    date: "18 Jun",
    image: Blog3,
    slug: 3,
  },
];
