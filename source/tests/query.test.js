import query from '../js/fortunes.js';

describe('query', () => {
  test('should not be a question', async () => {
    const input = 'not a question';
    const output = await query(input, 'Hufflepuff');
    const expected = 'This is not a question about your future';
    expect(output).toContain(expected);
  });
});

describe('query', () => {
  test('should be a question', async () => {
    const input = 'will I get an A in CSE 110?';
    const output = await query(input, 'Slytherin');
    const notExpected = 'This is not a question about your future';
    expect(output).not.toContain(notExpected);
  });
});
