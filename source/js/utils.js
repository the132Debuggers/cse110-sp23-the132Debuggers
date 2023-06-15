/**
 * theme colors for each house
 */
export const themeColor = {
  gryffindor: ['#b91c23', '#f2b200'],
  hufflepuff: ['#f8be12', '#040005'],
  ravenclaw: ['#0b3259', '#9ea8a0'],
  slytherin: ['#00865d', '#b9b3c0'],
};

/**
 * array of house names
 */
export const houses = ['gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin'];

/**
 * Get a random house from the houses array.
 * @returns {string} A random house from the houses array.
 */
export function randomHouse() {
  return houses[Math.floor(Math.random() * houses.length)];
}

/**
 * keywords of house tones
 */
export const tones = {
  gryffindor: 'bravery, helping and chivalry',
  hufflepuff: 'hard work, patience, justice, and loyalty',
  ravenclaw: 'intelligence, knowledge, planning ahead and wit',
  slytherin: 'ambition, cunning, leadership, and resourcefulness',
};
