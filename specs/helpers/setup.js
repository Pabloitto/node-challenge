const supertest = require('supertest')

const chai = require('chai')

const { app, models } = require('../../index')

global.models = models

global.request = supertest(app)

global.expect = chai.expect
