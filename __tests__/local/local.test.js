process.env.NODE_ENV = 'foo';
process.chdir(__dirname);
require('../../');

test('reads local over all others', () => {
  expect(process.env.ENV).toBe('local/.env.local');
});

afterAll(() => {
  delete process.env.ENV;
});
