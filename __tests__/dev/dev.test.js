process.env.NODE_ENV = 'development';
process.chdir(__dirname);
require('../../');

test('dev by default', () => {
  expect(process.env.ENV).toBe('dev/.env.dev.development');
});

afterAll(() => {
  delete process.env.ENV;
});
