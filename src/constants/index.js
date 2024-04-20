import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    restroworks,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    rfm360,
    aws,
    angular,
    solidity,
} from "../assets/icons";

import { membook, dfund, genmed, support } from "../assets/images";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: aws,
        name: "Amazon Web Services (AWS)",
        type: "Cloud Services",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: solidity,
        name: "Solidity",
        type: "Web3",
    },
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Restroworks",
        icon: restroworks,
        iconBg: "#fbc3bc",
        date: "April 2024 - Present",
        points: [
            "Currently undergoing product training during probation period, gaining in-depth understanding of RestroWorks' software solutions and their application within the restaurant industry",
            "Engaging in hands-on learning sessions to familiarize myself with the features, functionalities, and user workflows of the multi-tenant support application.",
            "Collaborating with senior team members to grasp the technical intricacies of the MEAN stack architecture and AWS services utilized within the RestroWorks ecosystem.",
        ],
    },
    {
        title: "Software Engineer Trainee",
        company_name: "Restroworks",
        icon: restroworks,
        iconBg: "#fbc3bc",
        date: "January 2024 - April 2024",
        points: [
            "Contributed to the development of a multi-tenant technical support application using the MEAN stack.",
            "Implemented AWS SQS for asynchronous communication and cron jobs for automated tasks, enhancing application reliability and efficiency.",
            "Utilized MongoDB aggregations to extract valuable insights from large datasets, enabling informed decision-making for respective brands.",
            "Engaged in agile methodologies, participating in sprint planning and code reviews to ensure collaboration and code quality.",
        ],
    },
    {
        title: "JavaScript Developer Intern",
        company_name: "RFM360",
        icon: rfm360,
        iconBg: "#fbc3bc",
        date: "June 2022 - July 2022",
        points: [
            "Conceptualised and developed the front end of the campaigns section of the Business Management platform by Root Force Marketer, including Email and SMS campaigns.",
            "Developed Campaigns section in the Business Management App to help reach more customers.",
            "Worked with React.js, JavaScript, & got the taste of handling backend logic using Django.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/eshaan5',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/eshaanbagga/',
    }
];

export const projects = [
    {
        iconUrl: support,
        theme: 'btn-back-red',
        name: 'Support App',
        description: "A versatile multi-tenant support application designed to streamline operations and enhance efficiency within the restaurant industry.",
        link: 'https://github.com/eshaan5/ticketingtool',
    },
    {
        iconUrl: membook,
        theme: 'btn-back-green',
        name: 'Membook',
        description: 'Developed a web application to let users share their memories with others. Incorporated RESTful abstraction layer APIs using Node, with efforts being made to minimize server latency.',
        link: 'https://github.com/eshaan5/membook',
    },
    {
        iconUrl: genmed,
        theme: 'btn-back-blue',
        name: 'Genmed - A single platform for all your medical needs',
        description: 'Developed a platform to let users buy generic medicines, decreasing their medicine costs by up to 60%.',
        link: 'https://github.com/eshaan5/genmed-full',
    },
    {
        iconUrl: dfund,
        theme: 'btn-back-pink',
        name: 'DFund - A decentralized crowdfunding platform',
        description: 'Developed a blockchain-based, decentralized crowdfunding platform, to enable different projects to gather public funding.',
        link: 'https://github.com/eshaan5/dfund',
    },
];