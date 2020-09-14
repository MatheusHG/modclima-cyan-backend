const request = require('supertest');
const app = require('../../../src/server');
const { controllerFazenda } = require('../../../src/app/controller/FarmController');

describe('Verificando as formas de criar uma Fazenda', () => {
    test('Deve ser possível criar uma Fazenda sem Campo associado', () => {
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

    test('Deve ser possível criar várias campos associado a uma fazenda', () => {
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
