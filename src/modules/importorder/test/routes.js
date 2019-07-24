'use strict';
var request = require('supertest'),
    assert = require('assert'),
    config = require('../../../config/config'),
    _ = require('lodash'),
    jwt = require('jsonwebtoken'),
    mongoose = require('mongoose'),
    app = require('../../../config/express'),
    Importorder = mongoose.model('Importorder');

var credentials,
    token,
    mockup;

describe('Importorder CRUD routes tests', function () {

    before(function (done) {
        mockup = {
            recipient_name: 'รัตนา ภิรมณ์ยินดี',
            mobile: '0863350155',
            phone_no: '0863350155'
        };
        credentials = {
            username: 'username',
            password: 'password',
            firstname: 'first name',
            lastname: 'last name',
            email: 'test@email.com',
            roles: ['user']
        };
        token = jwt.sign(_.omit(credentials, 'password'), config.jwt.secret, {
            expiresIn: 2 * 60 * 60 * 1000
        });
        done();
    });

    it('should be Importorder get use token', (done) => {
        request(app)
            .get('/api/importorders')
            .set('Authorization', 'Bearer ' + token)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                var resp = res.body;
                done();
            });
    });

    it('should be Importorder get by id', function (done) {

        request(app)
            .post('/api/importorders')
            .set('Authorization', 'Bearer ' + token)
            .send(mockup)
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                var resp = res.body;
                request(app)
                    .get('/api/importorders/' + resp.data._id)
                    .set('Authorization', 'Bearer ' + token)
                    .expect(200)
                    .end(function (err, res) {
                        if (err) {
                            return done(err);
                        }
                        var resp = res.body;
                        assert.equal(resp.status, 200);

                        assert.equal(resp.data.recipient_name, mockup.recipient_name);
                        assert.equal(resp.data.mobile, mockup.mobile);
                        assert.equal(resp.data.phone_no, mockup.phone_no);
                        done();
                    });
            });

    });

    it('should be Importorder post use token', (done) => {
        request(app)
            .post('/api/importorders')
            .set('Authorization', 'Bearer ' + token)
            .send(mockup)
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                var resp = res.body;
                assert.equal(resp.data.recipient_name, mockup.recipient_name);
                assert.equal(resp.data.mobile, mockup.mobile);
                assert.equal(resp.data.phone_no, mockup.phone_no);
                done();
            });
    });

    it('should be importorder put use token', function (done) {

        request(app)
            .post('/api/importorders')
            .set('Authorization', 'Bearer ' + token)
            .send(mockup)
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                var resp = res.body;
                var update = {
                    recipient_name: 'name update'
                }
                request(app)
                    .put('/api/importorders/' + resp.data._id)
                    .set('Authorization', 'Bearer ' + token)
                    .send(update)
                    .expect(200)
                    .end(function (err, res) {
                        if (err) {
                            return done(err);
                        }
                        var resp = res.body;
                        assert.equal(resp.data.recipient_name, 'name update');
                        
                        done();
                    });
            });

    });

    it('should be importorder delete use token', function (done) {

        request(app)
            .post('/api/importorders')
            .set('Authorization', 'Bearer ' + token)
            .send(mockup)
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                var resp = res.body;
                request(app)
                    .delete('/api/importorders/' + resp.data._id)
                    .set('Authorization', 'Bearer ' + token)
                    .expect(200)
                    .end(done);
            });

    });

    xit('should be importorder get not use token', (done) => {
        request(app)
            .get('/api/importorders')
            .expect(403)
            .expect({
                status: 403,
                message: 'User is not authorized'
            })
            .end(done);
    });

    xit('should be importorder post not use token', function (done) {

        request(app)
            .post('/api/importorders')
            .send(mockup)
            .expect(403)
            .expect({
                status: 403,
                message: 'User is not authorized'
            })
            .end(done);

    });

    xit('should be importorder put not use token', function (done) {

        request(app)
            .post('/api/importorders')
            .set('Authorization', 'Bearer ' + token)
            .send(mockup)
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                var resp = res.body;
                var update = {
                    name: 'name update'
                }
                request(app)
                    .put('/api/importorders/' + resp.data._id)
                    .send(update)
                    .expect(403)
                    .expect({
                        status: 403,
                        message: 'User is not authorized'
                    })
                    .end(done);
            });

    });

    xit('should be importorder delete not use token', function (done) {

        request(app)
            .post('/api/importorders')
            .set('Authorization', 'Bearer ' + token)
            .send(mockup)
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                var resp = res.body;
                request(app)
                    .delete('/api/importorders/' + resp.data._id)
                    .expect(403)
                    .expect({
                        status: 403,
                        message: 'User is not authorized'
                    })
                    .end(done);
            });

    });

    afterEach(function (done) {
        Importorder.remove().exec(done);
    });

});