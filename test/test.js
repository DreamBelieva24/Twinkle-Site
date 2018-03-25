var express = require("express");
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
const path = require("path");
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

before(done => {
    server.on('serverStarted', () => {
        done();
    });
});

describe('Contact Page Routing', function () {
    it('should add a SINGLE contact with proper properties on /contact POST', function (done) {
        chai.request(server)
            .post('/contact')
            .send({
                'first_name': 'Test',
                'last_name': 'Test',
                'address': 'Test address',
                'email': 'Test@test.com',
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
                res.body.email.should.equal('Test@test.com');
                res.body.phone.should.equal('999-999-9999');
                res.body.subject.should.equal('test');
                res.body.message.should.equal('test message');
                done();
            });
    });

    it('should return an error object with improper contact info on /contact POST', function (done) {
        chai.request(server)
            .post('/contact')
            .send({
                'first_name': '765876',
                'last_name': '76567',
                'address': 'Test address',
                'email': 'Test email',
                'phone': '999-999-jhb',
                'subject': '',
                'message': ''
            })
            .end(function (err, res) {
                res.body.should.be.an('object');
                res.body.name.should.equal('SequelizeValidationError');
                res.body.errors.should.be.an('array');
                res.body.errors[0].should.have.property('message');
                res.body.errors[0].should.have.property('type');
                res.body.errors[0].should.have.property('path');
                res.body.errors[0].should.have.property('value');
                res.body.errors[0].should.have.property('origin');
                res.body.errors[0].should.have.property('instance');
                res.body.errors[0].should.have.property('message');
                done();
            });
    });

    it('should return contact page html on /contact GET', function (done) {
        chai.request(server)
            .get('/contact')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});

describe('Home Page Routing', function () {
    it('should return home page html on / GET', function (done) {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});

describe('Cart Page Routing', function () {
    it('should return home page html on /cart GET', function (done) {
        chai.request(server)
            .get('/cart')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
});

describe('Shop Page Routing', function () {
    it('should return home page html on /shop GET', function (done) {
        chai.request(server)
            .get('/shop')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('should return specific item info on /shop/:param GET', function (done) {
        chai.request(server)
            .get('/shop/7201aqua')
            .end(function (err, res) {
                res.body.should.be.an('object');
                res.body.product.should.be.an('object');
                res.body.product.should.have.property('id');
                res.body.product.should.have.property('item_name');
                res.body.product.should.have.property('description');
                res.body.product.should.have.property('item_number');
                res.body.product.should.have.property('in_stock');
                res.body.product.should.have.property('price');
                res.should.have.status(200);
                done();
            });
    });
    it('should return null object info on /shop/:param GET for invalid item number', function (done) {
        chai.request(server)
            .get('/shop/5')
            .end(function (err, res) {
                res.body.should.be.an('object');
                res.body.should.have.property('product');
                expect(res.body.product).to.be.null;
                res.should.have.status(200);
                done();
            });
    });
});