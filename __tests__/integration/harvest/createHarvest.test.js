const request = require('supertest');
const app = require('../../../src/server');
const { controllerHarvest } = require('../../../src/app/controller/HarvestController');

describe('Verificando as formas de criar Colheita', () => {
    test('Deve ser possível criar uma colheita sem fazenda', () => {
        const today = new Date();
        const response = request(app)
            .post('/harvest')
            .send({
                "harvests": [{
                    code: Date.now().toString(),
                    start_date: today,
                    end_date: new Date(
                        today.getFullYear() + 1,
                        today.getMonth(),
                        today.getDate(),
                    ),
                }]
            })

        expect(201);
    });

    test('Deve ser possível criar várias fazendas associado a uma colheita', () => {
        const today = new Date();
        const harvest = controllerHarvest.store({
            "harvests": [
                {
                    code: Date.now().toString(),
                    start_date: today,
                    end_date: new Date(
                        today.getFullYear() + 1,
                        today.getMonth(),
                        today.getDate(),
                    ),
                }
            ]
        })

        const response = request(app)
            .post('/farm')
            .send({
                id_harvest: harvest.id,
                farms: 
                [
                    {
                        code: Date.now().toString(),
                        name: Date.now().toString()
                    }
                ]
            })
      
        expect(201);


    })
});