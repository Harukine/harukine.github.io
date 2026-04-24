export type ProjectStatus = 'active' | 'shipped' | 'archived';

export interface Project {
  name: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    name: 'Pokémon Champions Assist',
    description:
      'A real-time competitive assist tool for the Pokémon Champions VGC. Implements a high-performance, type-safe architecture for complex damage calculations and team composition analysis. Focuses on low-latency state management and responsive UI for live competitive environments.',
    status: 'active',
    tags: ['TypeScript', 'React', 'Zustand', 'Complex Logic'],
  },
  {
    name: 'Pokémon GO Dex',
    description:
      'A polished Flutter application focused on delivering a high-fidelity visual experience for exploring Pokémon GO data. Implements an automated ingestion process to pull and parse the latest Game Master files, providing players with accurate, offline-accessible technical stats and move set analysis without the need for a dedicated backend.',
    status: 'shipped',
    tags: ['Flutter', 'Mobile UI/UX', 'Data Ingestion', 'Dart'],
    url: 'http://harukine.com/pkmn_g_dx/',
  },
];
