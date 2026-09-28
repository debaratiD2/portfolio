import { Icons } from "@/components/icons";
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
import { SiSubstack, SiDuolingo } from "react-icons/si";
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
//import { platform } from "node:os";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOrcid } from "@fortawesome/free-brands-svg-icons";
import { HomeIcon, NotebookIcon, TrophyIcon } from "lucide-react";

const OrcidIcon = ({ className }: { className?: string }) => (
  <FontAwesomeIcon icon={faOrcid} className={className} />
);

export const DATA = {
  name: "Debarati Dhar",
  initials: "D",
  url: "https://portfolio-wwiu.vercel.app", //need to change
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
  {name: "TypeScript", icon: SiTypescript},
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  // Using Lucide-style icons for ML/DL as they don't have single "brand" logos
  { name: "Machine Learning", icon: LuBrainCircuit }, 
  { name: "Deep Learning", icon: LuNetwork },
  {name: "Natural Language Processing (NLP)", icon: LuBrainCircuit},
  {name: "Large Language Models (LLMs)", icon: LuBrainCircuit},
  
  ],
  navbar: [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/blog", icon: NotebookIcon, label: "Blog" },
  { href: "/achievements", icon: TrophyIcon, label: "Achievements" },
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
      // Substack: {
      //   name: "Substack",
      //   url: "https://substack.com/@trulydebarati",   // replace
      //   icon: SiSubstack,
      //   navbar: true,
      // },
      Duolingo: {
        name: "Duolingo",
        url: "https://www.duolingo.com/profile/DEBARATI_d2",   // replace
        icon: SiDuolingo,
        navbar: true,
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
        "Collaborated on the architecture and full-stack development of TeleCure, a secure, role-based telemedicine application, and optimized the relational database pipeline for secure, low-latency handling of patient records.",
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
      pdf: "/papers/csitss-2025-neurodevelopmental.pdf",
      image: "/csitss.png", // Optional: Add a thumbnail image in your public folder
    },
    {
      title: "Cattle Infectious Disease Prediction Using Machine Learning Model and Explainable AI",
      conference: "7th International Conference on Electrical Information and Communication Technology (EICT)",
      year: "2025",
      authors: "Co-author",
      doi: "10.1109/eict68394.2025.11355591",
      href: "https://doi.org/10.1109/EICT68394.2025.11355591",
      //pdf: "/papers/eict-2025-cattle-disease.pdf",
      pdf:"#",
      image: "/heartland.png",
    },
    {
      title: "Heartland: A Kidney, Liver, Heart Disease Patient Assistance Smartphone Application With Disease Detection, Treatment, Physician Suggestion Features",
      conference: "2nd International Conference on Trends in Engineering Systems and Technologies (ICTEST)",
      year: "2025",
      authors: "Co-author",
      doi: "10.1109/ICTEST64710.2025.11042534",
      href: "https://doi.org/10.1109/ICTEST64710.2025.11042534",
      //pdf: "/papers/ictest-2025-heartland.pdf",
      pdf:"#",
      image: "/heartland.png", // Optional
    },
    
  ],


  projects: [
    {
      title: "Emotion Classification with BiGRU + FastAPI",
      href: "https://analyzing-sentiments-using-fastapi-1.onrender.com/",
      dates: "July 2026 - Aug 2026",
      active: true,
      description:
        "End-to-end sentiment classification pipeline using BiGRU, TensorFlow and FastAPI, trained on the Hugging Face Emotion dataset",
      technologies: [
        "python3",
        "fastapi",
        "biGRU",
      "HTML",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://analyzing-sentiments-using-fastapi-1.onrender.com/",//fix later
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/debaratiD2/emotion-classification-BiGRU-FastAPI/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQalCL1LQvQ_iiJQM9SPY6jwhbZz7Fjc2jD9MRRZIFnTiZTk1GZ",
      video: "",
    },
    
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
        // {
        //   type: "Website",
        //   href: "#",//fix later
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/debaratiD2/scrapvoltnewrepo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/scrapvolt.png",
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
        // {
        //   type: "Website",
        //   href: "#t",
        //   icon: <Icons.globe className="size-3" />,
        // },
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
      image: "/essence.jpeg", 
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
    image: "/euphoria.jpeg", 
    video: "",

  },
  ],



  hackathons: [
    // {
    //   title: "BirdCLEF+ 2026",
    //   dates: "March 11, 2026 - June 3, 2026",
    //   location: "Kaggle",
    //   description:
    //     " to develop machine learning frameworks capable of identifying understudied species within continuous audio data from Brazil's Pantanal wetlands",
    //   image: 'https://www.kaggle.com/competitions/129329/images/thumbnail',
    //   links: [
    //     {
    //       title: "Cornell Lab of Ornithology",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet", //change later
    //     },
    //   ],
    // },
    
    
   
    
    
    {
      title: "CALL-E: Your Code Is Calling",
      dates: "July 23, 2026 - September 14, 2026",
      location: "online",
      description:
        "developed an AI-powered supplier calling platform named, CallForge AI that automates phone conversations, asks custom questions about pricing, stock, warranties, delivery and terms, then turns each call into structured results for quick comparison and decisions.",
      team: "Team of 2",
      image:
        "https://www.heycall-e.com/wp-content/uploads/2026/04/logo-CALL-E.svg",
      links: [
        {
          title: "live app",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://call-forge-ai.vercel.app/",
          details: "https://github.com/fayyazsarah07/Call-Forge-AI"
        },
      ],
    },
  ],
  certifications: [
  {
    title: "Deep Learning, NLP, and AI Applications",
    issuer: "Packt",
    date: "Jul 2026",
    credentialId: "K1HJU02I3I0J",
    credentialUrl: "",              // paste the "Show credential" URL
    pdf: "/certificates/packt-deep-learning-nlp.pdf",
    logo: "logo/packt_publishing_logo.jpeg",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    date: "Jul 2026",
    credentialId: "4AE1KZDWFWNS",
    credentialUrl: "",              // paste the "Show credential" URL
    pdf: "/certificates/google-cybersecurity.pdf",
    logo: "logo/google.png",
  },
  {
    title: "Python Logic & Flow",
    issuer: "Coddy",
    date: "Jun 2026",
    credentialId: "u57Toc-python-C8r1xh",
    credentialUrl: "",
    pdf: "/certificates/python-coddy.pdf",
    logo: "https://coddy.tech/images/press/logo-icon-512.png",
  },
  {
    title: "Analyzing Data with Power BI",
    issuer: "Analytics Vidhya",
    date: "Jun 2025",
    credentialId: "bd6vft8usm",
    credentialUrl: "",
    pdf: "/certificates/powerbi-analytics-vidhya.pdf",
    logo: "https://imgcdn.analyticsvidhya.com/dhs2025/AV_logo_hires.png",
  },
  {
    title: "Front-End Development (React/NodeJS/VueJS/AngularJS), EDGE Project",
    issuer: "Bangladesh Computer Council",
    date: "Sep 2024 - Dec 2024",
    credentialId: "",
    credentialUrl: "",
    pdf: "/certificates/certificate_EDGE.pdf",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DglIjUVmrmmdpEBRiZXKGpma2GfX11k3aAe03SOth3Tz5d8mcC_pTqg&s=10",
  },
],

awards: [
  {
    title: "Technical Scholarship",
    description: "Awarded for 6 consecutive semesters for consistent academic excellence, Dept. of CSE, CUET.",
  },
],

activities: [
  
  { role: "Session Co-ordinator (Volunteer)", org: "ECCE-25", date: "Feb 2025" },
  { role: "Office Secretary", org: "CUET Computer Club", date: "2020 - 2025" },
  { role: "Member", org: "IEEE CUET Student Branch", date: "2023 - 2025" },
],

learning: [
  {
    name: "Japanese",
    platform: "Duolingo",
    stat: " 11 / 18139 XP",     // e.g. "Section 2, Unit 5" or "1,250 XP"
    streak: "392",          // optional
    href: "https://www.duolingo.com/profile/DEBARATI_d2",
  },
],
} as const;

//src/app/achievements/page.tsx
