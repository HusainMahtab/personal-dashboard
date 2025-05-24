// src/data/profileData.ts
import { ProfileData } from "@/types/type";

export const profileData: ProfileData = {
  name: "Mahtab Husain",
  title: "Full Stack Developer",
  bio: "Passionate developer with expertise in JavaScript, React, Nodejs, Nextjs, Tailwindcss, and Mongodb. Currently pursuing a degree in Computer Science.",
  contact: {
    email: "mahtabh667@gamil.com",
    phone: "+91 9118168704",
    location: "Lucknow, India",
    github: "https://github.com/HusainMahtab?tab=repositories",
    linkedin: "https://www.linkedin.com/in/mahtab-husain-a4a4b1270/"
  },
  academics: [
    {
      institution: "Manipal University Jaipur",
      degree: "Bachelor of Science in Computer Science",
      year: "2023 - Present",
      description: "Web-Development",
    },
    {
      institution: "Siddharth University",
      degree: "Bachelor of ART",
      year: "2020- 2023",
      description: "Graduated with a focus on ART",
    }
  ],
  experience: [
    {
      company: "Enternlight",
      position: "Frontend Developer Intern",
      duration: "Summer 2023",
      responsibilities: [
        "Developed responsive UIs using React and Tailwind CSS",
        "Collaborated with team on product features",
        "Participated in code reviews"
      ]
    },
    {
      company: "Labellift",
      position: "Nextjs Developer",
      duration: "2025 - Present",
      responsibilities: [
        "Built Beats-Marketplace Webapp",
        "Implemented Copyright, Audio-finger-printing,Responsinve UI, Shadcn, Next-auth, ZOD",
        "Provided maintenance and support"
      ]
    }
  ],
  skills: {
  languages: [
    { name: "JavaScript", level: 90 },
    { name: "Typescript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "SQL", level: 80 }
  ],
  frameworks: [
    { name: "React", level: 85 },
    { name: "Next.js", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 }
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 70 },
    { name: "Postman", level: 80 },
    { name: "MongoDB", level: 75 }
  ]
},
  hobbies: [
    "Full-Stack Development",
    "Photography",
    "Hiking",
    "Reading tech blogs"
  ]
};