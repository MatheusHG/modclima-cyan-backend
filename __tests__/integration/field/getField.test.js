const request = require('supertest');
const server = require('../../../src/server');
const FieldController = require('../../../src/app/controller/FieldController');

describe('Field search', () => {
    test('Getting Field by Code', async () => {
        const code = Date.now().toString();
        const latitude = Date.now().toString();
        const longitude = Date.now().toString();

        await FieldController.store({ 
            code,
            latitude,
            longitude
        });

        await request(server).get(`/field/${code}`);

        return expect(200);
    })
});