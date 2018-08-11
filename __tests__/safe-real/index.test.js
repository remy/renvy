process.chdir(__dirname);

test('real .example', () => {
  // shouldn't throw
  delete process.env.PORT;
  delete process.env.NODE_ENV;
  require('../../');

  expect(process.env.PORT).toBe('3100');
});

const reset = () => {
  delete process.env.TOKEN;
  delete process.env.USER;
  delete process.env.API;
  delete process.env.PORT;
};

beforeAll(reset);
afterEach(reset);
