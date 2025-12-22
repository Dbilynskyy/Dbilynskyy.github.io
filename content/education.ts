export type EducationMedia =
  | { type: "image"; src: string; alt: string };

export type EducationEntry = {
  id: string;
  institution: string;
  program: string;
  level: "University" | "Sixth Form" | "Secondary School";
  period?: string;
  highlights: string[];
  modules?: string[];
  grades?: { label: string; value: string }[];
  media?: EducationMedia[];
};

export const education: EducationEntry[] = [
  {
    id: "lancaster",
    institution: "Lancaster University",
    program: "BSc (Hons) Computer Science (2:1)",
    level: "University",
    period: "2021 - 2025",
    highlights: [
      "Year 4: Graduated with a 2:1 honours degree after taking Artificial Intelligence, Distributed Systems, Security and Risk and more.",
      "Year 3: Completed a year-long industrial placement at a leading tech company, gaining hands-on experience in software development and project management.",
      "Year 2: Computer Science modules include Advanced Programming, Operating Systems, Software Design, Computer Networks, Human Computer Interaction, Databases.",
      "Year 1: 1st class equivalent grade.",
      "Computer Science (Major): Notable modules include Software Development (70.7%), Discrete Maths Logic and Data Structures (76.7%), Information Systems (91.6%), Digital Systems (77.5%).",
      "Economics (Minor): Principles of Economics (76.7%)."
    ],
    media: [
      { type: "image", src: "/images/lulogo.svg", alt: "Lancaster University logo" },
      { type: "image", src: "/images/scc.jpg", alt: "Lancaster University / Computer Science-related image" },
      { type: "image", src: "/images/smile.png", alt: "Personal / campus image" }
    ]
  },
  {
    id: "pimlico-sixth-form",
    institution: "Pimlico Academy",
    program: "Sixth Form",
    level: "Sixth Form",
    highlights: ["A-Levels:"],
    grades: [
      { label: "Computer Science", value: "A*" },
      { label: "Mathematics", value: "A" },
      { label: "Physics", value: "A" }
    ]
  },
  {
    id: "pimlico-secondary",
    institution: "Pimlico Academy",
    program: "Secondary School",
    level: "Secondary School",
    highlights: ["GCSEs: 11 GCSEs including..."],
    grades: [
      { label: "Mathematics", value: "9" },
      { label: "Further Maths", value: "A*" },
      { label: "English", value: "7" }
    ]
  }
];
