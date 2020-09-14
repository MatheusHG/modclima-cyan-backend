const request = require('supertest');
const app = require('../../../src/server');

describe('Salvando o Campo no banco de dados', () => {
    test('Criando um Campo sem Fazenda', () => {
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