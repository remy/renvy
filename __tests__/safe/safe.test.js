process.env.NODE_ENV = 'foo';
process.chdir(__dirname);

test('reads local over all others', () => {
  expect(() => {
    require('../../');
  }).toThrow();
  expect(process.env.BASIC_EXPAND).toBe(undefined);
});

afterAll(() => {
  delete process.env.ENV;
  delete process.env.BASIC_EXPAND;
  delete process.env.BASIC;
  delete process.env.ESCAPED_EXPAND;
});
