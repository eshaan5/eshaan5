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
    nodejs,
    react,
    typescript,
    rfm360,
    aws,
    angular,
    snowflake,
    bigquery,
    postgresql,
    redis,
    docker,
} from "../assets/icons";

import { membook, dfund, genmed, support } from "../assets/images";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Language",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Language",
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
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "AngularJS",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: snowflake,
        name: "Snowflake",
        type: "Data Warehouse",
    },
    {
        imageUrl: bigquery,
        name: "BigQuery",
        type: "Data Warehouse",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Database",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
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
            "Building scalable backend systems, analytics infrastructure, and multi-tenant applications serving 500+ restaurant tenants.",
            "Architected a centralized logging pipeline intercepting Express res.end to capture API metadata and emit structured events, significantly improving debugging efficiency and observability across microservices.",
            "Built near real-time data streaming using MongoDB Change Streams and Snowpipe ingestion pipelines processing ~6M events/day into Snowflake for analytics and reporting.",
            "Evaluated cloud warehouse architectures including BigQuery and Redshift before finalizing Snowflake; designed schemas, staging layers, and pipelines powering business intelligence dashboards used by stakeholders.",
            "Developed high-volume financial reporting features with optimized MongoDB aggregations, ensuring tax correctness, GSTIN validation, and precision decimal rounding across large transactional datasets.",
            "Built and maintained third-party accounting integrations (QuickBooks, Xero, ZohoBooks) and government APIs with robust retry logic, failure handling, idempotency, and structured audit logging.",
            "Designed async and serverless workflows using AWS SQS, Lambda, S3, and Google Cloud Functions to handle background jobs, long-running tasks, and event-driven processing at scale.",
            "Won Most Impactful Solution Award at a company-wide hackathon for building a RAG-based AI chatbot to serve as the first point of contact for customer support queries.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Restroworks",
        icon: restroworks,
        iconBg: "#fbc3bc",
        date: "January 2024 - April 2024",
        points: [
            "Built and shipped features for a multi-tenant internal support platform handling tickets and operational workflows across hundreds of restaurant brands, using Node.js, Express, AngularJS, and MongoDB.",
            "Implemented asynchronous communication patterns using AWS SQS for decoupled background processing, and cron jobs for scheduled operational tasks.",
            "Developed complex MongoDB aggregation pipelines to surface operational insights and performance metrics for internal teams.",
            "Collaborated with senior engineers in an agile environment, participating in sprint planning, code reviews, and production deployments.",
        ],
    },
    {
        title: "JavaScript Developer Intern",
        company_name: "RFM360",
        icon: rfm360,
        iconBg: "#fbc3bc",
        date: "June 2022 - August 2022",
        points: [
            "Developed a full Email and SMS campaigns module using React.js for a business management platform, enabling marketing automation and targeted customer engagement workflows.",
            "Built reusable UI components for campaign creation, scheduling, and audience targeting, improving marketing team productivity.",
            "Collaborated closely with backend and product teams to integrate campaign APIs and deliver a polished, end-to-end feature.",
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
        iconUrl: restroworks,
        theme: 'btn-back-yellow',
        name: 'RAG-based AI Support Chatbot',
        description: 'Built an AI chatbot using Retrieval-Augmented Generation (RAG) to serve as the first point of contact for customer queries at Restroworks. Won Most Impactful Solution at the company hackathon.',
        link: 'https://github.com/eshaan5/restroworks-copilot',
    },
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