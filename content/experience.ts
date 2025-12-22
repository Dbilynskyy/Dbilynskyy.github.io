export type ExperienceMedia =
    | { type: "image"; src: string; alt: string }
    | { type: "video"; src: string; alt: string; poster?: string };

export type ExperienceLink = {
    label: string;
    href: string;
    description?: string;
};

export type ExperienceItem = {
    id: string;
    role: string;
    organisation: string;
    location?: string;
    period: string;
    description: string[];
    skills: string[];
    media?: ExperienceMedia[];
    links?: ExperienceLink[];
};

export const experience: ExperienceItem[] = [
    {
        id: "interact-software",
        role: "Software Engineer",
        organisation: "Interact Software",
        location: "Manchester",
        period: "July 2023 – July 2024",
        description: [
            "Led the design and implementation of a high-impact feature for device-specific content delivery, introducing robust fallbacks for incomplete user input and ensuring seamless deployment following bug resolution.",
            "Owned and delivered multiple cross-cutting features including email-based content promotion, achieving design consistency across ~40% of content types, and a recurring events system with calendar export while maintaining layout integrity.",
            "Implemented HTML sanitisation to mitigate security risks and collaborated closely with stakeholders, UX/UI designers, and front-end engineers to deliver reliable APIs aligned with business and user needs.",
            "Worked extensively across the Microsoft stack, including .NET MVC, C#, SQL Server, JavaScript, TypeScript, Node, and React, with strong emphasis on BDD/TDD testing practices."
        ],
        skills: [
            "C#",
            ".NET MVC",
            "SQL Server",
            "React",
            "TypeScript",
            "Node.js",
            "BDD/TDD",
            "Security"
        ]
    },
    {
        id: "web3-founder",
        role: "Founder",
        organisation: "Web3 Marketing & Business Agency",
        period: "March 2024 – Present",
        description: [
            "Founded and led a Web3-focused agency, independently connecting blockchain projects with top-tier marketing specialists and managing 3–5 concurrent client engagements.",
            "Planned and executed financial budgets, optimising marketing ROI through tailored strategies including billboard campaigns, viral video marketing, and influencer-driven growth.",
            "Drove multiple projects to significant growth, contributing to 7–9 figure valuations across utility AI and meme-based crypto sectors.",
            "Spearheaded development of custom landing pages across HTML, CSS, JavaScript, and .NET MVC stacks, tailoring branding and functionality to each project’s technical and commercial needs."
        ],
        skills: [
            "Leadership",
            "Web3",
            "Marketing Strategy",
            "HTML",
            "CSS",
            "JavaScript",
            ".NET MVC"
        ],
        links: [
            {
                label: "Trump Card Official",
                href: "https://www.trumpcardofficial.com/",
                description: "High-conversion Web3 landing page for a tokenised rewards project"
            }
        ],
    }
    ,
    {
        id: "lsmp",
        role: "Teaching Assistant",
        organisation: "London School of Mathematics & Programming",
        location: "Kensington",
        period: "June 2019 – Feb 2020",
        description: [
            "Assisted with teaching Python fundamentals, from basic syntax to building recursive and visual programs using the Turtle module.",
            "Guided students through recursion and fractal theory, helping them create complex geometric visualisations while reinforcing algorithmic thinking."
        ],
        skills: ["Python", "Teaching", "Recursion", "Communication"]
    },
    {
        id: "geeks-testing",
        role: "Software Testing Intern",
        organisation: "Geeks Ltd",
        location: "Morden",
        period: "Aug 2019",
        description: [
            "Tested and contributed to the development of the WordUp vocabulary app, analysing user feedback and proposing usability improvements.",
            "Worked closely with development teams to identify defects and suggest enhancements that improved user engagement and experience."
        ],
        skills: ["Software Testing", "QA", "User Feedback", "UX"]
    },
    {
        id: "banking-insight",
        role: "Insight Week Participant",
        organisation: "10x Banking",
        location: "Victoria",
        period: "Feb 2020",
        description: [
            "Gained exposure to the fintech industry by exploring roles, responsibilities, and workflows across engineering, product, and business teams.",
            "Delivered a presentation to company members proposing frameworks and methodologies to improve operational efficiency and productivity."
        ],
        skills: ["FinTech", "Presentation", "Business Analysis"]
    },
    {
        id: "barista",
        role: "Barista",
        organisation: "Black Sheep Coffee",
        location: "Wood Street",
        period: "2022",
        description: [
            "Recognised as Employee of the Month in my second month for outstanding customer service in a fast-paced environment.",
            "Trained and mentored new baristas, fostering confidence, efficiency, and teamwork during high-volume service periods.",
            "Collaborated with management to optimise service flow, calibrate equipment, maintain hygiene standards, and showcase creativity through specialty coffee and latte art."
        ],
        skills: ["Customer Service", "Leadership", "Teamwork"]
    },
    {
        id: "bartender",
        role: "Bartender",
        organisation: "The Duke of York",
        location: "Victoria",
        period: "2021",
        description: [
            "Delivered fast, accurate service during peak rushes from nearby theatres and offices while maintaining professionalism under pressure.",
            "Managed inventory, stock rotation, and glassware workflows to ensure smooth service during high-demand periods.",
            "Balanced complex drink orders, payments, and team coordination, contributing to efficient operations and a welcoming atmosphere."
        ],
        skills: ["Communication", "Multitasking", "Operations"]
    }
];
