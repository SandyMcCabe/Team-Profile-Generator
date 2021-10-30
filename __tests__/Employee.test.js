const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee.js');

test('creates an Employee object', () => {
 
  const marcia = new Employee('Marcia Brady', 2345, 'marcia@Brady.com');
 
  expect(marcia.name).toBe('Marcia Brady');
  expect(marcia.id).toEqual(expect.any(Number));
  expect(marcia.email).toEqual(expect.any(String));

  expect(marcia.getName()).toEqual('Marcia Brady');
  expect(marcia.getID()).toEqual(expect.any(Number));
  expect(marcia.getEmail()).toEqual(expect.any(String));
  expect(marcia.getRole()).toEqual('Employee');

});

