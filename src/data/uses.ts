export interface UsesItem {
  name: string;
  description: string;
  url?: string;
}

export interface UsesGroup {
  heading: string;
  icon: string;
  items: UsesItem[];
}

export const groups: UsesGroup[] = [
  {
    heading: 'Work Machine',
    icon: '💻',
    items: [
      {
        name: 'MacBook Pro',
        description:
          'My primary workstation for the last few years. It handles everything from local Docker clusters to heavy IDE sessions without breaking a sweat.',
      },
    ],
  },
  {
    heading: 'Gaming Rig',
    icon: '🎮',
    items: [
      {
        name: 'ASUS ROG Strix G18',
        description:
          'The powerhouse for when I need to decompress. High-refresh display and enough performance to run demanding titles at native resolution.',
      },
    ],
  },
  {
    heading: 'Editor & Terminal',
    icon: '⌨️',
    items: [
      {
        name: 'JetBrains IDE (IntelliJ IDEA / WebStorm / Rider)',
        description:
          'I have tried almost every editor, but I always come back to JetBrains for serious work. The deep static analysis and refactoring tools make maintaining complex codebases significantly safer.',
      },
      {
        name: 'VS Code',
        description:
          'The perfect lightweight companion for quick scripts, config tweaks, or writing documentation like this page.',
      },
      {
        name: 'Antigravity',
        description:
          'My go-to AI coding assistant. It handles the boilerplate and repetitive tasks, letting me focus on higher-level problem-solving.',
      },
    ],
  },
  {
    heading: 'Cloud & DevOps',
    icon: '☁️',
    items: [
      {
        name: 'Azure',
        description:
          'My go-to ecosystem for building enterprise-grade AI. I spend most of my time here managing AKS clusters and fine-tuning RAG pipelines.',
      },
      {
        name: 'Docker + Kubernetes',
        description:
          'Standardizing environments across the board. Everything is containerized and orchestrated via Helm to ensure consistency from local dev to production.',
      },
      {
        name: 'GitHub Actions',
        description:
          'If it is worth doing twice, it is worth automating. I use Actions to keep my deployment pipelines lean and reliable.',
      },
    ],
  },
  {
    heading: 'In the Garage',
    icon: '🔧',
    items: [
      {
        name: 'Acura RSX (Honda Integra DC5)',
        description:
          'A long-term project and a great lesson in mechanical engineering. It is a 20-year-old car, so I am often under it refreshing gaskets or suspension components, but the K20 power delivery is unmatched.',
      },
      {
        name: 'Acura TSX (Honda Accord CL7)',
        description:
          'A reliable daily driver with just enough sport DNA to keep it interesting. Simple, practical, and a great piece of Honda engineering.',
      },
    ],
  },
];
