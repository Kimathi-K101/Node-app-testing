const utils = require('./utils.js');

//A function provided by mocha. lets us define a test case with two arguements
//The keyword 'it' plays into the description. This is called Behaviour Driven Development (BDD)
it('should add two numbers', () => {
  var results = utils.add(33,11);
  if(results !== 44){
    throw new Error(`Expected 44 but got ${results}`);
  }
});

it('should square a number', () => {
  var result = utils.square(2);
  if(result !== 4){
    throw new Error(`Expected 4 but got ${results}`);
  }
});
