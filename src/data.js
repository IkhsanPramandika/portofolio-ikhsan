// src/data.js
import {
  SiLaravel,
  SiFlutter,
  SiFigma,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
} from "react-icons/si";

export const profile = {
  name: "Muhammad Ikhsan Pramandika",
  // --- TAMBAHKAN BARIS INI ---
  role: "IT Quality Assurance & UI UX Designer",
  socials: {
    linkedin: "https://www.linkedin.com/in/muhammad-ikhsan-pramandika/",
    behance: "https://www.behance.net/mikhsanpra",
    github: "https://github.com/mikhsanpramandika",
  },
  summary:
    "An Information Systems fresh graduate with dual specialization in IT Quality Assurance and UI/UX Design. Proven to enhance product quality by identifying 50+ critical bugs and designing intuitive interfaces that achieved an 89.17% usability score.",
};

export const experiences = [
  {
    role: "UI UX Design Intern",
    company: "Riau Regional Office of the Directorate General of Treasury",
    period: "Mar 2025 - May 2025",
    logoUrl:
      "https://djpb.kemenkeu.go.id/kanwil/kalteng/images/KALTENG_2019/WhatsApp_Image_2019-03-19_at_164658.jpeg",
    description: [
      "Led the UI/UX redesign of the TAHNIAH inter-office feedback system using Figma.",
      "Developed key communication materials for the SMAP ISO 37001:2016 policy using Canva.",
    ],
  },
  {
    role: "IT Quality Assurance Intern",
    company: "PT Kawasan Industri Jababeka Tbk",
    period: "Sep 2024 - Dec 2024",
    logoUrl:
      "https://images.seeklogo.com/logo-png/44/1/jababeka-co-logo-png_seeklogo-449040.png",
    description: [
      "Authored 260+ test scenarios for the 'Finance Consolidation system'.",
      "Identified and documented over 50 bugs using Jira.",
      "Designed 90+ high-fidelity UI screens for the Inventory Asset Management system.",
    ],
  },
  {
    role: "Implementator & UI UX Design Intern",
    company: "PT Garuda Cyber Indonesia",
    period: "Feb 2024 - June 2024",
    logoUrl:
      "https://business.brosispku.com/assets/merchant/23072018/business-manager_tktzc_605.png",
    description: [
      'Redesigned the "Garuda Kasir" POS application (75+ screens).',
      'Designed the end-to-end UX for the "Smart Meeting Room" application (32+ screens).',
    ],
  },
];

export const projects = [
  {
    title: "Village Service Information System",
    description:
      "Engineered a full-cycle system with a web portal for officials and a mobile app for citizens.",
    imageUrl: "https://placehold.co/600x400/0D1B2A/E0E1DD?text=Project+1",
    tech: ["Laravel", "Flutter", "Figma"],
    link: { demo: "#", repo: "#" },
  },
  {
    title: "Project UI/UX Design",
    description:
      'Redesigned the "Garuda Kasir" POS application, delivering 75+ high-fidelity screens.',
    imageUrl: "https://placehold.co/600x400/1B263B/E0E1DD?text=Project+2",
    tech: ["Figma", "React"],
    link: { demo: "#", repo: "#" },
  },
];

export const awards = [
  {
    title: "Outstanding Student Award 2023",
    issuer: "Politeknik Caltex Riau",
    date: "Sept 2023",
    imageUrl: "https://placehold.co/600x400/778DA9/0D1B2A?text=Sertifikat+1",
  },
  {
    title: "UI/UX Design Workshop",
    issuer: "Infinite Learning",
    date: "Mar 2023",
    imageUrl: "https://placehold.co/600x400/778DA9/0D1B2A?text=Sertifikat+2",
  },
];

export const techIcons = {
  Laravel: <SiLaravel />,
  Flutter: <SiFlutter />,
  Figma: <SiFigma />,
  React: <SiReact />,
  Vue: <SiVuedotjs />,
  "Node.js": <SiNodedotjs />,
};

export const skills = {
  design: ["UI/UX Design", "Figma", "Wireframing", "Prototyping", "Canva"],
  qa: [
    "Manual Testing",
    "Black-Box Testing",
    "Usability Testing",
    "UAT",
    "Jira",
    "Trello",
  ],
  languages: ["PHP (Laravel)", "Dart (Flutter)", "Python"],
  tools: ["MySQL", "Firebase", "Git", "Postman"],
};

export const education = {
  institution: "Politeknik Caltex Riau",
  major: "Major In Information System",
  gpa: "3.62/4.00",
  period: "Sept 2021 - Aug 2025",
};
