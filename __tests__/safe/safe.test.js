process.env.NODE_ENV = 'foo';
process.chdir(__dirname);

test('reads local over all others', () => {
  const t = () => {
    require('../../');
  };

  expect(t).toThrow(/BASIC_EXPAND/);
  expect(process.env.BASIC_EXPAND).toBe(undefined);
  expect(process.env.ENV).toBe('local');
});

afterEach(() => {
  delete process.env.ENV;
  delete process.env.BASIC_EXPAND;
  delete process.env.BASIC;
  delete process.env.ESCAPED_EXPAND;
});
