import { randomHouse, houses } from '../js/utils.js';

describe('randomHouse', () => {
  test('should return a random house from the houses array', () => {
    const house = randomHouse();
    expect(houses).toContain(house);
  });
});
