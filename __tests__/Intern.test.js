
const Intern = require('../lib/Intern.js')


test('creates an Employee object', () => {

    const cindy = new Intern('Cindy Brady', 4567, 'Cindy@Brady.com', 'Brady Tech');

    expect(cindy.name).toBe('Cindy Brady');

    expect(cindy.getRole()).toBe('Intern');
    expect(cindy.getSchool()).toEqual(expect.any(String));

});