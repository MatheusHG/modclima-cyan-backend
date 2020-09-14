const request = require('supertest');
const app = require('../../../src/server');
const { controllerFazenda } = require('../../../src/app/controller/FarmController');

describe('Checking the ways to create a Farm', () => {
    test('It should be possible to create a Farm without an associated Field', () => {
        const today = new Date();
        const response = request(app)
            .post('/farm')
            .send({
                "farms": [{
                    code: Date.now().toString(),
                    name: Date.now().toString()
                }]
            })

        expect(201);
    })

    test('It should be possible to create multiple fields associated with a farm', () => {
        const farm = controllerFazenda.store({
            "farms": [
                {
                    code: Date.now().toString(),
                    name: Date.now().toString()
                }
            ]
        })

        const response = request(app)
            .post('/field')
            .send({
                id_farm: farm.id,
                farms: 
                [
                    {
                        code: Date.now().toString(),
                        latitude: Date.now().toString(),
                        longitude: Date.now().toString()
                    }
                ]
            })
      
        expect(201);
    })
});
