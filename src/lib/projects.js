import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si"
import { IoLogoReact, IoLogoCss3, IoLogoJavascript, IoLogoHtml5, IoLogoVercel, IoLogoNodejs } from "react-icons/io5"
import { FaAws, FaGit, FaSalesforce } from "react-icons/fa"

export const projects = {
    booth: {
        title: "Booth Grading Employee Portal",
        description: `A custom portal web application designed to meet the unique
                needs of the company. The platform streamlines work processes,
                enhances communication, and boosts productivity by providing a
                centralized system for managing key resources.`,
        technologies: [<SiNextdotjs />, <IoLogoReact />, <SiTailwindcss />, <SiMongodb />, <IoLogoCss3 />, <IoLogoJavascript />, <IoLogoHtml5 />, <IoLogoVercel />, <IoLogoNodejs />, <FaGit />, <FaAws />],
        image: "boothproject.png",
        link: "https://booth-grading.vercel.app/",
        features: [
            "AWS CloudWatch Alarms to actively monitor and manage resource metrics",
            `JWT authentication with encrypted passwords to protect user
             accounts, ensuring secure access to sensitive information
            and preventing unauthorized access to the application`,
            `Real-time updates to 30+ employees and managers about
            important information regarding job sites, equipment, and
            daily reports, thus improving overall communication and
            collaboration.`,
            `Generates a ready-to-print PDF from timesheets, daily
            reports, incident reports, absence request forms, and
            warnings, then sends it by email to the company.`
        ],
    },
    intern: {
        title: "Forms Web Application",
        description: `A dynamic form-building web application with authentication,
				real-time updates via WebSockets for questions, comments, and
				likes, and an admin panel for managing forms and users. It
				integrates AWS services, Salesforce, and provides an API token
				for secure form data export, ensuring seamless collaboration and
				data management.`,
        technologies: [<SiNextdotjs/>, <IoLogoReact />, <SiTailwindcss />, <SiPostgresql />, <IoLogoCss3 />, <IoLogoJavascript />, <IoLogoHtml5 />, <IoLogoVercel />, <FaGit />, <IoLogoNodejs/>, <FaAws />, <FaSalesforce />],
        image: "forms.png",
        link: "https://itransition-coursep.vercel.app/",
        features: [
            `Enhanced real-time interactivity by deploying a WebSocket
			server, enabling users to create, delete, or update
			comments, questions, and likes in real-time.`,
            `Implementation of lazy loading and creation of dynamic
			components, resulting in faster load times and an enhanced
			user experience.`,
            `AWS S3 Bucket for image storage, reducing the reliance on
			more expensive storage services.`,
            `Creation of administrator panel to improve user management,
			roles, account deletion, account access.`
        ],
    }, 
    scenariogpt: {
        title: "ScenarioGPT",
        description: "ScenarioGPT is a web app that helps you navigate specific interactions by providing the most likely questions and effective responses—all in your chosen language. ScenarioGPT equips you with the best answers for every scenario. ",
        technologies: [<SiNextdotjs />, <IoLogoReact />, <SiTailwindcss />, <IoLogoCss3 />, <IoLogoJavascript />, <IoLogoHtml5 />, <IoLogoVercel />, <IoLogoNodejs />, <FaGit />],
        image: "scenariogpt.png",
        link: "https://scenariogpt.vercel.app/",
        features: [`AI-Powered Responses: Utilizes the OpenAI API to generate realistic questions and effective responses tailored to various scenarios.`, `Multilingual Support: Provides answers and interactions in your chosen language, helping you communicate effectively in real-time.`, `Instant Learning Aid: Designed for quick access to practical language responses, perfect for urgent situations without waiting for a full lesson.`],
    }
}