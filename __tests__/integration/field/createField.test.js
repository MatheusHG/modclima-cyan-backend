const request = require('supertest');
const app = require('../../../src/server');

describe('Saving the Field to the Database', () => {
    test('Creating a Field without a Farm', () => {
        const today = new Date();
        const response = request(app)
            .post('/field')
            .send({
                "fields": [{
                    code: Date.now().toString(),
                    latitude: Date.now().toString(),
                    longitude: Date.now().toString(),
                }]
            })

        expect(201);
    })
});