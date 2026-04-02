import { FaCode, FaDesktop, FaMobile, FaReact, FaSchool, } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import profileImg from './profile.avif';
import { IconBase } from "react-icons";
import { TbEyeCheck } from "react-icons/tb";
import { title } from "framer-motion/client";

export const assets ={
    profileImg,
}
export const navMenu =['Home','About','Skills','Project','Contact']

export const skillsData = [
    {
        icon: FaCode,
        title: 'Frontend',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript']
    },
    {
        icon: FaReact,
        title: 'Frameworks & Libraries',
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap']
    },
    {
        icon: FaProjectDiagram,
        title: 'Backend',
        technologies: ['Node.js', 'Express', 'MongoDB', 'Firebase']
    },
    {
        icon: FaMobile,
        title: 'Mobile',
        technologies: ['React Native', 'Java']
    },
    {
        icon: FaDesktop,
        title: 'Tools',
        technologies: ['Git', 'GitHub', 'Vite', 'Postman']
    }
];
export const ProfileData = [
    {
        icon: FaCode,
        title: 'Tech Stack',
        description: 'MERN Stack Developer focusing on scalable Backend architectures.'
    },
    {
        icon: FaSchool,
        title: 'Education',
        description: 'Bachelor of Computer Science - Building a strong foundation in Logic & Algorithms.'
    },
]
export const projectData = [
    {
        title: 'Professional Dev Portfolio',
        Description: 'A responsive React application featuring dynamic component rendering and modern UI/UX principles to showcase technical expertise.',
        github: "https://github.com/Priyanka-Tripathi98/portfolio", 
        tech: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    },
    {
        title: 'Chat-App', 
        Description: 'A real-time chat application built with Node.js and Socket.io, enabling seamless communication between users with features like private messaging and group chats.',
        github: "https://github.com/Priyanka-Tripathi98/chatapp", 
        tech: ["Node.js", "Express", "JWT", "Bcrypt", "MongoDB"],
        demo:"https://chatapp-az0y.onrender.com",
    }
]