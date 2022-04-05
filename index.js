const chai = require('chai');
const chaiHttp = require('chai-http');
require('dotenv').config();
chai.use(chaiHttp);
let should = chai.should();

const { API_URL, AUTHORIZATION } = process.env;
describe('Test Api', () => {
  it('Should get user info', () => {
    chai
      .request(API_URL)
      .get('/users/getCurrentLoggedInUser')
      .set('Authorization', AUTHORIZATION)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.user.should.have.property('id');
        response.body.user.location.should.be.a('object');
        response.body.user.role.should.have.property('name').eql('Student');
      });
  });
});
