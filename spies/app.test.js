const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');


describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };

  //Replace db with the db variable above
  //Method made available because of the rewire above
  app.__set__('db', db);

  it('should call saveUser with user object', () => {
    var email = 'John@example.com';
    var password = '123abc';

    app.handleSignup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({
      email:email,
      password: password
    });
  });
});
