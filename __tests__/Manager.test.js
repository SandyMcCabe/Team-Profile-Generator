

const Manager = require('../lib/Manager.js')


test('creates an Employee object', () => {

  const jan = new Manager('Jan Brady', 3456, 'jan@Brady.com', 'RM-409');
 
  expect(jan.name).toBe('Jan Brady');

   expect(jan.getRole()).toBe('Manager');
  expect(jan.getOfficeNumber()).toEqual(expect.any(String));

});