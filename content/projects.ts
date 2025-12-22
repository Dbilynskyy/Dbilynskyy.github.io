export type MediaItem =
    | { type: "image"; src: string; alt: string }
    | { type: "video"; src: string; alt: string; poster?: string };

export type Project = {
    slug: string;
    title: string;
    subtitle: string;
    summary: string;
    skills: string[];
    media: MediaItem[];
    links?: { label: string; href: string }[];
};

export const projects: Project[] = [

    {
        slug: "crypto-launcher-market-making",
        title: "Crypto Project Launcher & Market Making Solution",
        subtitle: "Django / Web3 / EVM Automation",
        summary:
            "Architected a Django-based system that interacts with multiple EVM-compatible chains via a unified RPC dispatcher to orchestrate wallets, track balances, collect on-chain data, and run event-driven token lifecycle analytics. Implemented automated market making and liquidity workflows with scheduling, wallet rotation, real-time monitors, and transaction-safe execution services. Built a statistical snapshot engine aggregating on-chain metrics and metadata into structured datasets for research and trading-signal generation.",
        skills: ["Django", "Python", "Web3.py", "RPC", "SQL", "Celery", "EVM", "Systems Design"],
        media: [
            // Add screenshots when available (recommended: architecture diagram + dashboard screenshots)
            // { type: "image", src: "/images/crypto-launcher-1.png", alt: "System dashboard / metrics view" }
        ],
        links: [
            // Add when available:
            // { label: "Source", href: "https://github.com/..." },
            // { label: "Demo", href: "https://..." }
        ]
    },

    {
        slug: "movie-rating-dotnet",
        title: "Movie Rating Website",
        subtitle: ".NET Full-Stack (MVC)",
        summary:
            "Built a full-stack movie rating platform using the .NET framework with MVC patterns, dependency injection, and test-driven design. Implemented search via API calls and database operations to return relevant and similar movies based on user input. Added detailed movie profiles with ratings and critic comments, plus a dynamic ranking table where users can submit their own ratings.",
        skills: [".NET", "C#", "SQL Server", "HTML", "CSS", "JavaScript", "MVC", "DI", "TDD"],
        media: [
            // Add screenshots when available
        ],
        links: []
    },

    {
        slug: "early-crypto-trend-detector",
        title: "Early Crypto Trend Detector",
        subtitle: ".NET + ML (Production Evaluation)",
        summary:
            "Designed and shipped an end-to-end .NET service linking influencer social posts to live tokens from DexScreener for early detection signals. Built a production TokenService (ASP.NET Core) with real-time API ingestion, embedding generation, dynamic model routing, robust rate-limit handling, Docker deployment, and persistence to SQL/MongoDB. Implemented and evaluated three ML approaches (embedding similarity, ML.NET regression, Siamese NN) using BERT tokenisation and GloVe with TensorFlow/Keras and TorchSharp; validated hold-out performance (MSE 0.082, RMSE 0.286).",
        skills: ["C#", "ASP.NET Core", "ML.NET", "TensorFlow/Keras", "TorchSharp", "BERT", "GloVe", "DexScreener API", "Docker", "SQL", "MongoDB", "xUnit"],
        media: [
            // Add screenshots when available (e.g., signal dashboard, evaluation charts)
        ],
        links: []
    },

    {
        slug: "cifar10-classifier-matlab",
        title: "CIFAR-10 Image Classifier",
        subtitle: "ML Benchmarking in MATLAB",
        summary:
            "Built a reproducible MATLAB pipeline for CIFAR-10: normalised images, flattened 32×32×3 into 3072-D vectors, and created seeded 70/30 train/test splits. Implemented and benchmarked KNN (k=1, cosine & Euclidean), Decision Tree, and SVM with vectorised distance computations and runtime profiling. Tracked accuracy/latency trade-offs: KNN (cosine) 56.13% in 242.77s; Decision Tree 51.10% in 3.72s; SVM 52.56% in 126.35s.",
        skills: ["MATLAB", "KNN", "SVM", "Decision Trees", "Benchmarking", "Reproducibility"],
        media: [
            // Add figures/screenshots when available (confusion matrix, timing charts)
        ],
        links: []
    },
    {
        slug: "web-performance-analytics",
        title: "Web Performance Analytics",
        subtitle: "BigQuery / CrUX Insights",
        summary:
            "Translated large-scale CrUX and BigQuery data into actionable performance insights by writing complex SQL to extract and summarise key metrics (DOMContentLoaded, TTFB, FCP) across domains, regions, and time windows. Automated collection/processing to produce repeatable reports and visualised load-time distributions and device trends. Converted findings into clear optimisation recommendations (resource prioritisation, caching/CDN, render-blocking elimination) tied to measurable user-impact improvements.",
        skills: ["Google BigQuery", "SQL", "CrUX", "Analytics", "Performance Engineering", "Reporting"],
        media: [
            // Add dashboards/screenshots when available
        ],
        links: []
    },
    {
        slug: "data-engineering-java-sql",
        title: "Data Engineering with Java and SQL",
        subtitle: "Game Database System",
        summary:
            "Designed and implemented a relational database system for a game using Java and SQL. Wrote efficient queries to extract and transform data for storage and later analysis, enabling insights from structured game data.",
        skills: ["Java", "SQL", "Relational Design", "ETL", "Query Optimization"],
        media: [
            // Add schema diagram / sample query outputs when available
        ],
        links: []
    },
    {
        slug: "airbnb-profit-analysis",
        title: "Airbnb Profit Analysis",
        subtitle: "SQL + Power BI",
        summary:
            "Extracted housing data from CSV and used Python to connect to SQL Server and populate a database via queries. Built an interactive Power BI dashboard to display current and forecast financial signals, informing profitability and reliability assessments for the target area.",
        skills: ["Python", "SQL Server", "Power BI", "Dashboards", "Forecasting", "Data Analysis"],
        media: [
            // Add Power BI screenshots when available
        ],
        links: []
    },

    {
        slug: "pixel-editor",
        title: "Pixel Editor",
        subtitle: "Group Project",
        summary:
            "In a group of 6, I was in charge of developing the drawing functionality (pen, brush, spray can, etc.). I implemented queue-based/iterative fill for a paint-bucket tool, a spray effect by randomly colouring pixels within a radius, and an eyedropper tool to reuse colours directly from the canvas. I also contributed copy/cut/paste for better user control.",
        skills: ["Java", "OOP", "GitLab", "Teamwork", "Algorithms"],
        media: [
            { type: "image", src: "/images/shapes.png", alt: "Pixel editor shapes tool" },
            { type: "image", src: "/images/brush.png", alt: "Pixel editor brush tool" },
            { type: "image", src: "/images/spray.png", alt: "Pixel editor spray tool" },
            { type: "image", src: "/images/fill.png", alt: "Pixel editor fill tool" }
        ],
        links: []
    },
    {
        slug: "reading-list-tracker",
        title: "Reading List",
        subtitle: "Tracker",
        summary:
            "Used HTML and CSS for front-end web design and PHP for server-side security along with MySQL commands to allow a user to store, delete, and update books in a database.",
        skills: ["HTML", "CSS", "PHP", "MySQL", "Databases"],
        media: [
            { type: "image", src: "/images/options.png", alt: "Reading list options screen" },
            { type: "image", src: "/images/form.png", alt: "Book entry form" },
            { type: "image", src: "/images/database.png", alt: "Database view" },
            { type: "image", src: "/images/table.png", alt: "Reading list table view" }
        ],
        links: []
    },
    {
        slug: "uno-revision",
        title: "UNO Revision",
        subtitle: "Card Game",
        summary:
            "Programmed a UNO-style game where a user plays against the computer and answers a revision question (Tkinter GUI) before their turn. Implemented shuffling, rule validation, and question selection logic.",
        skills: ["Python", "Tkinter", "Game Logic"],
        media: [
            { type: "image", src: "/images/winner.png", alt: "UNO revision winner screen" },
            { type: "image", src: "/images/Tkinter.png", alt: "Tkinter interface" },
            { type: "image", src: "/images/computer.png", alt: "Computer player view" },
            { type: "image", src: "/images/player.png", alt: "Player hand view" }
        ],
        links: []
    },
    {
        slug: "football-result-forecasting",
        title: "Football Result Forecasting",
        subtitle: "Data Engineering + Tableau",
        summary:
            "Designed and implemented a relational database system for football data using Python and SQL Server, including efficient import queries from CSV. Built Tableau dashboards for dynamic visualisation and statistical analysis, turning raw match data into actionable insights for decision-making.",
        skills: ["Python", "SQL Server", "Relational Design", "ETL", "Tableau", "Analytics"],
        media: [
            // Add Tableau screenshots when available
        ],
        links: []
    },
    {
        slug: "payroll-ledger-analysis",
        title: "Payroll and Ledger Analysis",
        subtitle: "Excel Audit & Reconciliation",
        summary:
            "Used Excel VLOOKUP/XLOOKUP to align payroll data across 12 months, estimate annual wages, and validate dataset completeness. Reviewed bank and journal accounts to identify potential duplicates/anomalies indicative of errors or fraud, and traced transactional linkages to support reconciliation.",
        skills: ["Excel", "VLOOKUP", "XLOOKUP", "Data Reconciliation", "Audit"],
        media: [
            // Add spreadsheet screenshots when available (ensure sensitive info is removed)
        ],
        links: []
    },
];
