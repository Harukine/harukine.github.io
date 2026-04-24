export interface NowItem {
  category: string;
  title: string;
  description: string;
}

export const nowUpdated = 'April 2026';

export const nowItems: NowItem[] = [
  {
    category: 'Currently Building',
    title: 'Pokémon Champions Assist Tool',
    description: 'A real-time competitive assist app for the Pokémon Champions card game. Working on team composition analysis, and matchups. Scratching my own itch as I lose a lot.',
  },
  {
    category: 'Currently At',
    title: 'Tokyo, Japan',
    description: 'Currently in Tokyo to network within the local tech ecosystem as I prepare for a relocation to Japan. I am focusing on building professional connections while immersing myself in the city\'s unique engineering culture.',
  },
  {
    category: 'Currently Working On',
    title: 'Learning Japanese',
    description: 'Trying to find a balance between work, side projects, and actually opening a textbook. Navigating daily life with translation assistance while I slowly but steadily work my way through the kanji fundamentals.',
  },
  {
    category: 'Currently Wrenching On',
    title: 'Honda Integra DC5',
    description: 'When I\'m not shipping code, I\'m probably under the car. The DC5 is a constant project; currently focused on preventive maintenance and refreshing 20-year-old bushings to keep it road-ready.',
  },
];
