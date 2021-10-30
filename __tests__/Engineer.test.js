

const Engineer = require('../lib/Engineer.js')


test('creates an Employee object', () => {

  const carol = new Engineer('Carol Brady', 1234, 'Carol@Brady.com', 'Carol.github.com');
 
  expect(carol.name).toBe('Carol Brady');
  // expect(carol.id).toEqual(expect.any(Number));
  // expect(carol.email).toEqual(expect.any(String));
  expect(carol.getRole()).toBe('Engineer');
  expect(carol.getGithub()).toEqual(expect.any(String));

});