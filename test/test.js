var express  = require("express");
var chai     = require('chai');
var chaiHttp = require('chai-http');
var server   = require('../server.js');
var should   = chai.should();

chai.use(chaiHttp);

before(done => {
    server.on('serverStarted', () => {
        done();
    });
});

describe('contactRoute', function () {
    it('should add a SINGLE contact on /contact POST', function (done) {
        chai.request(server)
            .post('/contact')
            .send({
                'first_name': 'Test',
                'last_name': 'Test',
                'address': 'Test address',
                'email': 'Test email',
                'phone': '999-999-9999',
                'subject': 'test',
                'message': 'test message'
            })
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('first_name');
                res.body.should.have.property('last_name');
                res.body.should.have.property('address');
                res.body.should.have.property('email');
                res.body.should.have.property('phone');
                res.body.should.have.property('subject');
                res.body.should.have.property('message');
                res.body.first_name.should.equal('Test');
                res.body.last_name.should.equal('Test');
                res.body.address.should.equal('Test address');
                res.body.email.should.equal('Test email');
                res.body.phone.should.equal('999-999-9999');
                res.body.subject.should.equal('test');
                res.body.message.should.equal('test message');
                done();
            });
    });
});