import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { 
  SiPython, 
  SiC, 
  SiCplusplus, 
  SiMongodb, 
  SiPostgresql, 
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs 
} from "react-icons/si";
import { LuBrainCircuit, LuNetwork } from "react-icons/lu";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { platform } from "node:os";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOrcid } from "@fortawesome/free-brands-svg-icons";

const OrcidIcon = ({ className }: { className?: string }) => (
  <FontAwesomeIcon icon={faOrcid} className={className} />
);

export const DATA = {
  name: "Debarati Dhar",
  initials: "D",
  url: "https://github.com/debaratiD2/portfolio.git", //need to change
  location: "Bhatiary, Chattogram-4315, Bangladesh",
  
  description:
    "I am Debarati Dhar, a graduate in Computer Science & Engineering from Chittagong University of Engineering and Technology (CUET) ",
  summary:
    "I am an enthusiastic explorer of emerging fields, including Artificial Intelligence, Cybersecurity, and advanced software development. I actively channel this enthusiasm into research projects focused on Machine Learning, Natural Language Processing (NLP), Large Language Models (LLMs), and multi-agent systems. I really like working with Programming and Artificial Intelligence. I am always trying to learn more about them.",
  avatarUrl: "/me.jpeg",
  skills: [
     { name: "Python", icon: SiPython },
  { name: "SQL", icon: SiPostgresql },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "Javascript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  // Using Lucide-style icons for ML/DL as they don't have single "brand" logos
  { name: "Machine Learning", icon: LuBrainCircuit }, 
  { name: "Deep Learning", icon: LuNetwork },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "debaratidhar.dee124@gmail.com",
    tel: "+8801821898023",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/debaratiD2",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/debarati-dhar-9aab25210/",
        icon: Icons.linkedin,
        navbar: true,
      },
       
      Orcid: {
        name: "Orcid",
        url: "https://orcid.org/0009-0002-8105-9137",
        icon: OrcidIcon, 
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:debaratidhar.dee124@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: " Softrobotics Bangladesh Limited",
      href: "https://www.softrobotics.com.bd/",
      badges: [],
      location: "Onsite",
      title: "Software Engineer Intern",
      logoUrl: "/image.png",
      start: "Dec 2024",
      end: "Jan 2025",
      description:
        "Developed a telemedicine platform using HTML, SQL, Laravel.",
    },
    
    
    
    
    
  ],




  education: [
    {
      school: "Chittagong University of Engineering and Technology(CUET)",
      href: "https://cuet.ac.bd/",
      degree: "BSc in Computer Science & Engineering",
      logoUrl: "/cuet_logo.png",
      start: "2020",
      end: "2025",
    },
    {
      school: "Chittagong College",
      href: "https://ctgcollege.gov.bd/",
      degree: "Higher Secondary Certificate (HSC)",
      logoUrl: "/ctg_clg.png",
      start: "2017",
      end: "2019",
    },

  ],

publications: [
    {
      title: "Dyslexia, ADHD, Dyscalculia, and Dyspraxia Prediction in Children Using Machine Learning and Explainable AI",
      conference: "9th International Conference on Computational Systems and Information Technology for Sustainable Solutions (CSITSS)",
      year: "2025",
      authors: "First Author",
      doi: "10.1109/CSITSS67709.2025.11294091",
      href: "https://doi.org/10.1109/CSITSS67709.2025.11294091",
      image: "/csitss.png", // Optional: Add a thumbnail image in your public folder
    },
    {
      title: "Heartland: A Kidney, Liver, Heart Disease Patient Assistance Smartphone Application With Disease Detection, Treatment, Physician Suggestion Features",
      conference: "2nd International Conference on Trends in Engineering Systems and Technologies (ICTEST)",
      year: "2025",
      authors: "Co-author",
      doi: "10.1109/ICTEST64710.2025.11042534",
      href: "https://doi.org/10.1109/ICTEST64710.2025.11042534",
      image: "/heartland.png", // Optional
    },
  ],


  projects: [
    
    {
      title: "ScrapVolt",
      href: "#",
      dates: "Nov 2024 - Jan 2025",
      active: true,
      description:
        "A full-stack web application designed for industrial/scrap management. Built a robust data architecture to handle complex inventory and transactions.",
      technologies: [
        "C#",
      "React.js",
      "Microsoft SQL Server",
      "ASP.NET Core",
      ],
      links: [
        {
          type: "Website",
          href: "#",//fix later
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/debaratiD2/scrapvoltnewrepo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/s-1.png",
      video: "",
    },
    {
      title: "Burger-builder",
      href: "#",
      dates: "April 2023 - September 2023",
      active: true,
      description:"A full-stack project allowing users to customize burgers and order in real-time. Features include user authentication and a real-time database.",
      technologies: [
       "React",
      "Firebase",
      "CSS Modules",
      "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dEEdebarati/burgerbuilderusingreactrepo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/logo.png",
      video: "",
    },
    {
      title: "Essence",
      href: "#t",
      dates: "Nov 2023 - Feb 2024",
      active: true,
      description:"A mobile-engineered application focused on stress management and mental well-being, featuring user progress tracking and resources.",
      technologies: [
        "Flutter",
      "Firebase",
      "Dart",
      ],
      links: [],
      image: "", 
      video: "",
      
    },
    {
    title: "Euphoria",
    href: "#",
    dates: "2022 - 2023",
    active: true,
    description:
      "A web-based Event Management platform that streamlines the process of booking and managing local events.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    links: [], 
    image: "", 
    video: "",

  },
  ],



  hackathons: [
    {
      title: "BirdCLEF+ 2026",
      dates: "March 11, 2026 - June 3, 2026",
      location: "Kaggle",
      description:
        " to develop machine learning frameworks capable of identifying understudied species within continuous audio data from Brazil's Pantanal wetlands",
      image: 'https://www.kaggle.com/competitions/129329/images/header',
      links: [
        {
          title: "Cornell Lab of Ornithology",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet", //change later
        },
      ],
    },
    
    
   
    
    
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
