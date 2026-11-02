import { Project, SkillCategory, ExperienceItem, EducationItem } from './types';

export const PERSONAL_INFO = {
  name: "Anushka Saraf",
  title: "Communication Design Student",
  philosophy: "Design is not just about making things look good, but about communicating ideas with clarity, empathy, and purpose. I strive to bridge the gap between complex information and human experience.",
  email: "anushka.saraf.505@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/anushka-saraf-9a9739308?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    behance: "https://www.behance.net/anushkasaraf4"
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Skills",
    iconName: "PenTool",
    skills: [
      { name: "UI/UX" },
      { name: "Typography" },
      { name: "Branding" },
      { name: "Web design" },
      { name: "Editorial design" }
    ]
  },
  {
    title: "Tools",
    iconName: "Wrench",
    skills: [
      { name: "Figma" },
      { name: "Adobe Illustrator" },
      { name: "Adobe InDesign" },
      { name: "Adobe Express" }
    ]
  },
  {
    title: "Interpersonal",
    iconName: "HeartHandshake",
    skills: [
      { name: "Communication" },
      { name: "Leadership" },
      { name: "Adaptability" },
      { name: "Time management" },
      { name: "Teamwork" }
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
    degree: "Bachelors of Design Honours in Communication Design",
    institution: "UnitedWorld Institute of Design",
    year: "2024 - Present"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Lakshmipat Singhania Academy",
    year: "2022 - 2024"
  },
  {
    degree: "Secondary Education",
    institution: "Lakshmipat Singhania Academy",
    year: "2011 - 2022"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Graphic Design Intern",
    company: "Lookad (India) Pvt. Ltd.",
    period: "May 2026 - June 2026",
    description: "Carried out tasks and responsibilities in graphic design and visual communication with sincerity, creativity, and diligence. Demonstrated good design sense, professionalism, attention to detail, and a positive attitude."
  },
  {
    role: "Student Council Member",
    company: "Student Council",
    period: "2025 - 2026",
    description: "Actively led student teams and coordinated various initiatives. Demonstrated strong leadership, teamwork, and organizational skills while representing student interests and managing council activities."
  },
  {
    role: "Single Point of Contact (SPOC)",
    company: "Ahemdabad Design Week 7.O",
    period: "February 2026",
    description: "Served as the single point of contact for the session, coordinating communication, schedules, and requirements to ensure smooth planning and execution. Supported end-to-end coordination to facilitate a seamless and well-managed experience."
  },
  {
    role: "Communication Designer",
    company: "Global Game Jam",
    period: "January 2026",
    description: "Designed a custom wayfinding solution for Global Game Jam 2026 (Ahmedabad Site) through a site navigation map. Collaborated with the operations team to align site logistics with clear navigation and efficient movement across the event."
  }
];

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

export const ACHIEVEMENTS: import('./types').AchievementItem[] = [
  {
    title: "Prashasti Award",
    description: "Information and Technology field recognition."
  },
  {
    title: "CyberFair Platinum",
    description: "1st position in the International School CyberFair."
  },
  {
    title: "Infotech Committee Member",
    description: "Served for two consecutive terms: 2022 - 2023 and 2023 - 2024."
  }
];