const request = require('supertest');
const server = require('../../../src/server');
const MillController = require('../../../src/app/controller/MillController');

describe('Mill Search', () => {
    test('Getting the Mill by Name', async () => {

        await MillController.store({
            name: 'TestMill'
        });

        await request(server).get('/mill/TestMill');

        return expect(200);
    })
});