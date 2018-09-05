const expect = require('expect');
const utils = require('./utils.js');

it('should add two numbers', () => {
  var result = utils.add(33,11);
  expect(result).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4,3, (sum) => {
    expect(sum).toBe(10).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  var result = utils.square(2);
  expect(result).toBe(4).toBeA('number');
});

it('should verify that first and last names are set', () => {
  var user = {};
  var result = utils.setName(user, 'John Smith'); //In Javascript it is passed by reference
  expect(result).toInclude({
    firstName: 'John',
    lastName: 'Smith'
  });
});

// it('should expect some values', () => {
//   //Uses the triple equals to check if they are the exact same object
//   //In this case it will not work since they are two different objects
//   expect({name: 'Kimathi'}).toBe({name: 'Kimathi'});
//   //Uses double equals to check if they have the same properties
//   expect({name: 'Kimathi'}).toEqual({name: 'Kimathi'});
//   expect([2,3,4]).toInclude(2);
// });
