/**
 *
 * @param {string} name
 * @param {int} age
 * @param {string} house
 * @returns name, age, house
 */
function createPerson(name, age, house) {
  return {
    name,
    age,
    house,
  };
}

createPerson('a', 18, 'house');
