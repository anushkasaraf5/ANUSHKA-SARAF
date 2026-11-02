import { Project, SkillCategory, ExperienceItem, EducationItem, VolunteeringItem, ReferenceItem, AchievementItem } from './types';

export const PERSONAL_INFO = {
  name: "Anushka Saraf",
  title: "Communication Designer",
  phone: "+91 91632 03810",
  email: "anushka.saraf.505@gmail.com",
  linkedin: "anushkasaraf",
  linkedinUrl: "https://www.linkedin.com/in/anushkasaraf",
  introQuote: "Curiosity is where my approach to design begins.",
  introBio: "Somewhere between overthinking an idea and wondering why things are the way they are, I find the beginnings of something worth creating. I'm drawn to unexpected connections, overlooked details, and possibilities that aren't immediately obvious. Design gives me a way to bring those thoughts to life, while AI lets me push them further and explore where they might lead.",
  introClosing: "I'm here to keep learning, keep creating, and keep asking, \"What if?\"",
  philosophy: "Somewhere between overthinking an idea and wondering why things are the way they are, I find the beginnings of something worth creating. I'm drawn to unexpected connections, overlooked details, and possibilities that aren't immediately obvious. Design gives me a way to bring those thoughts to life, while AI lets me push them further and explore where they might lead.",
  socials: {
    linkedin: "https://www.linkedin.com/in/anushkasaraf",
    behance: "https://www.behance.net/anushkasaraf4"
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Technical",
    iconName: "Layout",
    skills: [
      { name: "SaaS Interface Design" },
      { name: "User Centric Design" },
      { name: "User Interface (UI) Design" },
      { name: "Visual Hierarchy & Layout Design" },
      { name: "Typography & Colour Theory" },
      { name: "Responsive Interface Design" },
      { name: "Grid Systems & Spacing" },
      { name: "Interaction Design" },
      { name: "User Journey Mapping" },
      { name: "Information Architecture" },
      { name: "User Flows & Task Flows" },
      { name: "Wireframing" },
      { name: "Low and High-Fidelity Prototyping" },
      { name: "Design Systems" },
      { name: "Interactive Prototyping" },
      { name: "Competitor Analysis" },
      { name: "User Persona Development" },
      { name: "Affinity Mapping" },
      { name: "Dashboard Design" }
    ]
  },
  {
    title: "Soft competencies",
    iconName: "HeartHandshake",
    skills: [
      { name: "Critical Thinking" },
      { name: "Analytical Thinking" },
      { name: "Time Management" },
      { name: "Leadership" },
      { name: "Team Coordination" }
    ]
  },
  {
    title: "Software",
    iconName: "PenTool",
    skills: [
      { name: "Figma" },
      { name: "Framer" },
      { name: "Wordpress" },
      { name: "HTML & CSS" },
      { name: "Adobe Photoshop" },
      { name: "Adobe Illustrator" }
    ]
  },
  {
    title: "AI & Generative Tools",
    iconName: "Sparkles",
    skills: [
      { name: "ChatGPT" },
      { name: "Gemini" },
      { name: "Claude" },
      { name: "Google AI Studio" },
      { name: "Canva AI" },
      { name: "Figma make" },
      { name: "Stitch" },
      { name: "Lovable" },
      { name: "Leonardo AI" },
      { name: "Adobe Firefly" },
      { name: "Eleven Labs" },
      { name: "Notebook LM" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "6",
    title: "Visual Transformation",
    category: "Lettering",
    date: "October, 2025",
    description: "A freehand alphabet inspired by nature—drawing from the forms, textures, and growth patterns of trees, plants, vines, or fungi.",
    thumbnailUrl: "https://i.ibb.co/S488Nw33/Gemini-Generated-Image-ey47fwey47fwey47.png",
    details: {
      overview: "Fuchsia is a genus of flowering shrubs and small trees native to Central and South America. Known for their pendulous, ballerina-like blossoms in striking red and purple hues, these plants thrive in cool, shaded, and moist environments. Beyond their beauty, fuchsias symbolize delicacy, elegance, and confiding love.",
      problem: "The challenge was to create a freehand alphabet or font inspired by nature, letting letterforms reflect organic structure and express a chosen theme or emotion through their flow and character.",
      process: "The design process involved translating the biological traits of the Fuchsia plant into typographic forms. From the bell-shaped blossoms to the lance-shaped leaves, every curve mimics organic plant growth.",
      processSteps: [
        { title: "Organic Structure", description: "Drawing from the forms, textures, and growth patterns of trees, plants, vines, or fungi to create a cohesive alphabet." },
        { title: "Fuchsia Inspiration", description: "Analyzing the pendulous, ballerina-like blossoms and their striking red and purple hues to inform the color palette and form." },
        { title: "Anatomy Translation", description: "Translating features like 'drooping buds', 'succulent texture', and 'juicy interior' into letter strokes." },
        { title: "Rhythmic Variation", description: "Creating rhythmic variation to avoid monotony, expressing depth and the layered anatomy of a fuchsia bloom." },
        { title: "Continuous Flow", description: "Using continuous curves to mimic organic plant growth, with twisting branches topped with buds capturing the plant's cascading nature." }
      ],
      conceptNote: "VIVUS, meaning “alive,” is a typeface inspired by the fuchsia flower’s grace and vitality. Its soft yet structured forms reflect harmony between resilience and elegance, using vibrant hues of pink, purple, and green to express growth and transformation.",
      outcome: "A unique typeface 'VIVUS' that captures the essence of the Fuchsia flower. The dual-petal structure hints at an open flower, while the simplest petal gives visual breathing space. The result is a design that is not just a font, but a reflection of organic life.",
      gallery: [
    "https://i.ibb.co/5hpzVw00/assignment-1-13.jpg",
    "https://i.ibb.co/4whQzC5L/assignment-1-16.jpg",
    "https://i.ibb.co/cSgvXp1d/assignment-1-15.jpg",
    "https://i.ibb.co/HL2L9qbN/assignment-1-14.jpg"
       ]
    }
  },  
  {
    id: "1",
    title: "Type & Emotion",
    category: "Research",
    date: "August, 2025",
    description: "A design research project exploring how different scripts emotionally resonate across age groups through expressive typographic posters and audience surveys.",
    thumbnailUrl: "https://i.ibb.co/BVqRW8pw/ANUSHKA-SARAF-KU2403-U492-DESIGN-RESEARCH-POSTER.png",
    details: {
      overview: "This project investigates generational differences in emotional interpretation of typography within multilingual contexts. Using poster-based experiments and audience feedback, it reveals how abstract design and script variation are experienced differently by younger and older viewers.",
      problem: "Designers often make typographic decisions without understanding how various age groups emotionally connect with scripts. The challenge was to uncover these perception gaps and translate them into actionable insights for inclusive visual communication.",
      process: "The research followed a structured qualitative and quantitative methodology, combining visual experimentation with direct audience engagement.",
      processSteps: [
        { title: "Research Framing", description: "Defined the core research question around emotional impact of scripts and identified three participant age groups to study generational perception patterns." },
        { title: "Visual Experiments", description: "Created experimental typographic posters that communicated emotion purely through layout, form, and script—without relying on imagery." },
        { title: "Survey Design", description: "Developed a structured survey with multiple-choice interpretations to capture emotional responses from 47 participants across varying demographics." },
        { title: "Data Collection", description: "Conducted field interviews and online forms to gather raw data on how different age groups interpreted the visual stimuli." },
        { title: "Synthesis & Insight", description: "Analyzed responses using heatmaps and thematic mapping to identify emotional trends, user personas, and clear perception differences." }
      ],
      outcome: "The research revealed clear generational differences in emotional engagement—young audiences connected deeply with symbolic and abstract typography, while older participants preferred clarity and familiar scripts. These insights highlight the need for balanced typographic systems.",
      gallery: [
     "https://i.ibb.co/KpbzJYf8/ANUSHKA-SARAF-KU2403-U492-BRAINSTORMING.png",
     "https://i.ibb.co/5WqmtVPV/Whats-App-Image-2026-11-02-at-10-32-25.jpg",
     "https://i.ibb.co/FkNG7fLM/Whats-App-Image-2026-11-02-at-10-32-26-1.jpg",
     "https://i.ibb.co/hJvkLYw5/Whats-App-Image-2026-11-02-at-10-32-26.jpg"
      ]
    }
  },
  {
    id: "2",
    title: "Typographic Legacy",
    category: "Typography",
    date: "July, 2025",
    description: "A typographic journey through Indian street lettering, documenting the vibrant visual culture of public spaces through a flipbook-style narrative.",
    thumbnailUrl: "https://i.ibb.co/3mYNnGQj/10.webp",
    details: {
      overview: "Matra Marks is a documentation and meditation on the visual landscape of Indian streets. It assembles a compelling narrative about the life of type in public spaces, celebrating the vibrant, layered world of street lettering—a space where language and craft meet improvisation, identity, and memory.",
      problem: "Letters are everywhere—painted on shutters, stenciled on walls—but we rarely stop to read them as stories. The challenge was to preserve these ephemeral 'matra marks' and decode the cultural context behind every stroke before they vanish, redefining type as memory.",
      process: "The project unfolded through field documentation, zine-making, and community workshops, bridging the gap between analog craft and digital design.",
      processSteps: [
        { title: "Galli Graffiti", description: "Documented the fading art of public lettering across Indian cities, capturing the unique aesthetic decisions of local signmakers in 'Galliyon Se Chhapai'." },
        { title: "Desi Strokes", description: "Experimented with visual forms of onomatopoeic words like boom, crack, and zap, matching their sonic impact with dynamic, exaggerated strokes." },
        { title: "Zine Creation", description: "Produced A6 accordion-fold zines like 'Azulejos of Panjim' to tell layered stories of Portuguese influence and bilingual coexistence in street signs." },
        { title: "Bridging Worlds", description: "Conducted workshops connecting analog skills (embroidery, sketching) with digital outcomes (pixel type), exploring how Latin alphabets might look if shaped by Indic scripts." },
        { title: "Visual Archiving", description: "Compiled a decade-long archive of street lettering to highlight how constraints drive creative ingenuity in vernacular type." }
      ],
      outcome: "A published collection and series of interactive zines that serve as a visual field guide to Indian typography. The work has inspired workshops and discussions on the cultural significance of street lettering.",
      gallery: [
      "https://i.ibb.co/wZSprGqY/1.gif",
      "https://i.ibb.co/5yKRCjY/12.webp",
      "https://i.ibb.co/wFcmPPJz/13.webp",
      "https://i.ibb.co/G46w4hRC/5.webp"
      ],
      flipbook: [
        {
          imageUrl: "https://i.ibb.co/cSnMPWrq/Screenshot-2026-11-02-at-10-28-58.png",
          type: "cover",
          alt: "Matra Marks Front Cover"
        },
        {
          imageUrl: "https://i.ibb.co/hRPH5zPn/Screenshot-2026-11-02-at-10-29-30.png",
          type: "spread",
          alt: "Lettered & Layered Spread"
        },
        {
          imageUrl: "https://i.ibb.co/ccnqMP30/Screenshot-2026-11-02-at-10-29-51.png",
          type: "spread",
          alt: "Desi Strokes Spread"
        },
        {
          imageUrl: "https://i.ibb.co/20y6LQJv/Screenshot-2026-11-02-at-10-30-00.png",
          type: "spread",
          alt: "Galli Graffiti Spread"
        },
        {
          imageUrl: "https://i.ibb.co/JW09mPPs/Screenshot-2026-11-02-at-10-30-41.png",
          type: "back",
          alt: "Matra Marks Back Cover"
        }
      ]
    }
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Design (Hons.) Visual Communication",
    institution: "Unitedworld Institute of Design, Gandhinagar, Gujarat",
    year: "2024 – Present"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Lakshmipat Singhania Academy, Kolkata",
    year: "2022 – 2024"
  },
  {
    degree: "Secondary Education",
    institution: "Lakshmipat Singhania Academy, Kolkata",
    year: "2011 – 2022"
  }
];

export interface DetailedExperienceItem extends ExperienceItem {
  bullets: string[];
}

export const WORK_EXPERIENCE: DetailedExperienceItem[] = [
  {
    role: "Graphic Design Intern",
    company: "Lookad (India) Pvt. Ltd. Kolkata",
    period: "May – June 2026",
    description: "Designed digital assets and website layouts using visual hierarchy, typography, and layout principles to create clear, consistent user-facing experiences.",
    bullets: [
      "Designed digital assets and website layouts using visual hierarchy, typography, and layout principles to create clear, consistent user-facing experiences.",
      "Generated and refined AI-assisted visuals for digital communications, integrating them into layouts to support visual storytelling and creative objectives.",
      "Redesigned corporate website pages by refining content organisation, layout structure, and visual consistency across pages.",
      "Collaborated with team members to interpret briefs, incorporate feedback, and deliver revised assets within deadlines.",
      "Managed multiple design tasks and revisions while maintaining visual consistency, attention to detail, and adaptability."
    ]
  }
];

export const EXPERIENCE = WORK_EXPERIENCE;

export const VOLUNTEERING: VolunteeringItem[] = [
  {
    role: "Student Council",
    period: "2025–2026"
  },
  {
    role: "Ahmedabad Design Week 7.0",
    period: "Jan 2026"
  },
  {
    role: "Global Game Jam",
    period: "Jan 2026"
  },
  {
    role: "Infotech Committee Member",
    period: "2022 – 2023 & 2023 – 2024"
  }
];

export const AWARDS_ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Prashasti Award",
    year: "2023",
    description: "Information and Technology field recognition."
  },
  {
    title: "CyberFair Platinum",
    year: "2023",
    description: "1st position in the International School CyberFair."
  }
];

export const ACHIEVEMENTS = AWARDS_ACHIEVEMENTS;

export const REFERENCES: ReferenceItem[] = [
  {
    name: "Shankar Dayal",
    designation: "Assistant Professor",
    organization: "UID",
    phone: "73970 62231",
    email: "shankar@karnavatiuniversty.edu.in"
  },
  {
    name: "Nikhil Lunia",
    designation: "Chief Operating Officer (COO)",
    organization: "Lookad (India) Pvt. Ltd.",
    phone: "96815 65890",
    email: "nikhil.lunia@digitale.co.in"
  }
];

export const LANGUAGES: string[] = ["English", "Hindi", "Bengali"];

export const INTERESTS: string[] = ["Baking", "Travelling"];

export const CERTIFICATIONS: import('./types').Certification[] = [
  {
    issuer: "LinkedIn Learning",
    courses: [
      "Graphic Design Concepts",
      "Creating Inclusive Content",
      "Ethical, Human-Centric AI Design"
    ]
  }
];